/*
 * Copyright 2021, Offchain Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-env node */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.EthDepositMessage = exports.L1ToL2MessageWriter = exports.L1ToL2MessageReaderClassic = exports.L1ToL2MessageReader = exports.L1ToL2Message = exports.EthDepositStatus = exports.L1ToL2MessageStatus = void 0;
const bignumber_1 = require("@ethersproject/bignumber");
const bytes_1 = require("@ethersproject/bytes");
const address_1 = require("@ethersproject/address");
const keccak256_1 = require("@ethersproject/keccak256");
const ArbRetryableTx__factory_1 = require("../abi/factories/ArbRetryableTx__factory");
const constants_1 = require("../dataEntities/constants");
const signerOrProvider_1 = require("../dataEntities/signerOrProvider");
const errors_1 = require("../dataEntities/errors");
const ethers_1 = require("ethers");
const L2Transaction_1 = require("./L2Transaction");
const networks_1 = require("../../lib/dataEntities/networks");
const lib_1 = require("../utils/lib");
const eventFetcher_1 = require("../utils/eventFetcher");
const logger_1 = require("@ethersproject/logger");
var L1ToL2MessageStatus;
(function (L1ToL2MessageStatus) {
    /**
     * The retryable ticket has yet to be created
     */
    L1ToL2MessageStatus[L1ToL2MessageStatus["NOT_YET_CREATED"] = 1] = "NOT_YET_CREATED";
    /**
     * An attempt was made to create the retryable ticket, but it failed.
     * This could be due to not enough submission cost being paid by the L1 transaction
     */
    L1ToL2MessageStatus[L1ToL2MessageStatus["CREATION_FAILED"] = 2] = "CREATION_FAILED";
    /**
     * The retryable ticket has been created but has not been redeemed. This could be due to the
     * auto redeem failing, or if the params (max l2 gas price) * (max l2 gas) = 0 then no auto
     * redeem tx is ever issued. An auto redeem is also never issued for ETH deposits.
     * A manual redeem is now required.
     */
    L1ToL2MessageStatus[L1ToL2MessageStatus["FUNDS_DEPOSITED_ON_L2"] = 3] = "FUNDS_DEPOSITED_ON_L2";
    /**
     * The retryable ticket has been redeemed (either by auto, or manually) and the
     * l2 transaction has been executed
     */
    L1ToL2MessageStatus[L1ToL2MessageStatus["REDEEMED"] = 4] = "REDEEMED";
    /**
     * The message has either expired or has been canceled. It can no longer be redeemed.
     */
    L1ToL2MessageStatus[L1ToL2MessageStatus["EXPIRED"] = 5] = "EXPIRED";
})(L1ToL2MessageStatus = exports.L1ToL2MessageStatus || (exports.L1ToL2MessageStatus = {}));
var EthDepositStatus;
(function (EthDepositStatus) {
    /**
     * ETH is not deposited on L2 yet
     */
    EthDepositStatus[EthDepositStatus["PENDING"] = 1] = "PENDING";
    /**
     * ETH is deposited successfully on L2
     */
    EthDepositStatus[EthDepositStatus["DEPOSITED"] = 2] = "DEPOSITED";
})(EthDepositStatus = exports.EthDepositStatus || (exports.EthDepositStatus = {}));
class L1ToL2Message {
    /**
     * The submit retryable transactions use the typed transaction envelope 2718.
     * The id of these transactions is the hash of the RLP encoded transaction.
     * @param l2ChainId
     * @param fromAddress the aliased address that called the L1 inbox as emitted in the bridge event.
     * @param messageNumber
     * @param l1BaseFee
     * @param destAddress
     * @param l2CallValue
     * @param l1Value
     * @param maxSubmissionFee
     * @param excessFeeRefundAddress refund address specified in the retryable creation. Note the L1 inbox aliases this address if it is a L1 smart contract. The user is expected to provide this value already aliased when needed.
     * @param callValueRefundAddress refund address specified in the retryable creation. Note the L1 inbox aliases this address if it is a L1 smart contract. The user is expected to provide this value already aliased when needed.
     * @param gasLimit
     * @param maxFeePerGas
     * @param data
     * @returns
     */
    static calculateSubmitRetryableId(l2ChainId, fromAddress, messageNumber, l1BaseFee, destAddress, l2CallValue, l1Value, maxSubmissionFee, excessFeeRefundAddress, callValueRefundAddress, gasLimit, maxFeePerGas, data) {
        const formatNumber = (value) => {
            return ethers_1.ethers.utils.stripZeros(value.toHexString());
        };
        const chainId = bignumber_1.BigNumber.from(l2ChainId);
        const msgNum = bignumber_1.BigNumber.from(messageNumber);
        const fields = [
            formatNumber(chainId),
            (0, bytes_1.zeroPad)(formatNumber(msgNum), 32),
            fromAddress,
            formatNumber(l1BaseFee),
            formatNumber(l1Value),
            formatNumber(maxFeePerGas),
            formatNumber(gasLimit),
            // when destAddress is 0x0, arbos treat that as nil
            destAddress === ethers_1.ethers.constants.AddressZero ? '0x' : destAddress,
            formatNumber(l2CallValue),
            callValueRefundAddress,
            formatNumber(maxSubmissionFee),
            excessFeeRefundAddress,
            data,
        ];
        // arbitrum submit retry transactions have type 0x69
        const rlpEnc = ethers_1.ethers.utils.hexConcat([
            '0x69',
            ethers_1.ethers.utils.RLP.encode(fields),
        ]);
        return ethers_1.ethers.utils.keccak256(rlpEnc);
    }
    static fromEventComponents(l2SignerOrProvider, chainId, sender, messageNumber, l1BaseFee, messageData) {
        return signerOrProvider_1.SignerProviderUtils.isSigner(l2SignerOrProvider)
            ? new L1ToL2MessageWriter(l2SignerOrProvider, chainId, sender, messageNumber, l1BaseFee, messageData)
            : new L1ToL2MessageReader(l2SignerOrProvider, chainId, sender, messageNumber, l1BaseFee, messageData);
    }
    constructor(chainId, sender, messageNumber, l1BaseFee, messageData) {
        this.chainId = chainId;
        this.sender = sender;
        this.messageNumber = messageNumber;
        this.l1BaseFee = l1BaseFee;
        this.messageData = messageData;
        this.retryableCreationId = L1ToL2Message.calculateSubmitRetryableId(chainId, sender, messageNumber, l1BaseFee, messageData.destAddress, messageData.l2CallValue, messageData.l1Value, messageData.maxSubmissionFee, messageData.excessFeeRefundAddress, messageData.callValueRefundAddress, messageData.gasLimit, messageData.maxFeePerGas, messageData.data);
    }
}
exports.L1ToL2Message = L1ToL2Message;
class L1ToL2MessageReader extends L1ToL2Message {
    constructor(l2Provider, chainId, sender, messageNumber, l1BaseFee, messageData) {
        super(chainId, sender, messageNumber, l1BaseFee, messageData);
        this.l2Provider = l2Provider;
    }
    /**
     * Try to get the receipt for the retryable ticket creation.
     * This is the L2 transaction that creates the retryable ticket.
     * If confirmations or timeout is provided, this will wait for the ticket to be created
     * @returns Null if retryable has not been created
     */
    async getRetryableCreationReceipt(confirmations, timeout) {
        if (!this.retryableCreationReceipt) {
            this.retryableCreationReceipt = await (0, lib_1.getTransactionReceipt)(this.l2Provider, this.retryableCreationId, confirmations, timeout);
        }
        return this.retryableCreationReceipt || null;
    }
    /**
     * When retryable tickets are created, and gas is supplied to it, an attempt is
     * made to redeem the ticket straight away. This is called an auto redeem.
     * @returns TransactionReceipt of the auto redeem attempt if exists, otherwise null
     */
    async getAutoRedeemAttempt() {
        const creationReceipt = await this.getRetryableCreationReceipt();
        if (creationReceipt) {
            const l2Receipt = new L2Transaction_1.L2TransactionReceipt(creationReceipt);
            const redeemEvents = l2Receipt.getRedeemScheduledEvents();
            if (redeemEvents.length === 1) {
                return await this.l2Provider.getTransactionReceipt(redeemEvents[0].retryTxHash);
            }
            else if (redeemEvents.length > 1) {
                throw new errors_1.ArbSdkError(`Unexpected number of redeem events for retryable creation tx. ${creationReceipt} ${redeemEvents}`);
            }
        }
        return null;
    }
    /**
     * Receipt for the successful l2 transaction created by this message.
     * @returns TransactionReceipt of the first successful redeem if exists, otherwise the current status of the message.
     */
    async getSuccessfulRedeem() {
        const l2Network = await (0, networks_1.getL2Network)(this.l2Provider);
        const eventFetcher = new eventFetcher_1.EventFetcher(this.l2Provider);
        const creationReceipt = await this.getRetryableCreationReceipt();
        if (!(0, lib_1.isDefined)(creationReceipt)) {
            // retryable was never created, or not created yet
            // therefore it cant have been redeemed or be expired
            return { status: L1ToL2MessageStatus.NOT_YET_CREATED };
        }
        if (creationReceipt.status === 0) {
            return { status: L1ToL2MessageStatus.CREATION_FAILED };
        }
        // check the auto redeem first to avoid doing costly log queries in the happy case
        const autoRedeem = await this.getAutoRedeemAttempt();
        if (autoRedeem && autoRedeem.status === 1) {
            return { l2TxReceipt: autoRedeem, status: L1ToL2MessageStatus.REDEEMED };
        }
        if (await this.retryableExists()) {
            // the retryable was created and still exists
            // therefore it cant have been redeemed or be expired
            return { status: L1ToL2MessageStatus.FUNDS_DEPOSITED_ON_L2 };
        }
        // from this point on we know that the retryable was created but does not exist,
        // so the retryable was either successfully redeemed, or it expired
        // the auto redeem didnt exist or wasnt successful, look for a later manual redeem
        // to do this we need to filter through the whole lifetime of the ticket looking
        // for relevant redeem scheduled events
        let increment = 1000;
        let fromBlock = await this.l2Provider.getBlock(creationReceipt.blockNumber);
        let timeout = fromBlock.timestamp + l2Network.retryableLifetimeSeconds;
        const queriedRange = [];
        const maxBlock = await this.l2Provider.getBlockNumber();
        while (fromBlock.number < maxBlock) {
            const toBlockNumber = Math.min(fromBlock.number + increment, maxBlock);
            // using fromBlock.number would lead to 1 block overlap
            // not fixing it here to keep the code simple
            const outerBlockRange = { from: fromBlock.number, to: toBlockNumber };
            queriedRange.push(outerBlockRange);
            const redeemEvents = await eventFetcher.getEvents(ArbRetryableTx__factory_1.ArbRetryableTx__factory, contract => contract.filters.RedeemScheduled(this.retryableCreationId), {
                fromBlock: outerBlockRange.from,
                toBlock: outerBlockRange.to,
                address: constants_1.ARB_RETRYABLE_TX_ADDRESS,
            });
            const successfulRedeem = (await Promise.all(redeemEvents.map(e => this.l2Provider.getTransactionReceipt(e.event.retryTxHash)))).filter(r => (0, lib_1.isDefined)(r) && r.status === 1);
            if (successfulRedeem.length > 1)
                throw new errors_1.ArbSdkError(`Unexpected number of successful redeems. Expected only one redeem for ticket ${this.retryableCreationId}, but found ${successfulRedeem.length}.`);
            if (successfulRedeem.length == 1)
                return {
                    l2TxReceipt: successfulRedeem[0],
                    status: L1ToL2MessageStatus.REDEEMED,
                };
            const toBlock = await this.l2Provider.getBlock(toBlockNumber);
            if (toBlock.timestamp > timeout) {
                // Check for LifetimeExtended event
                while (queriedRange.length > 0) {
                    const blockRange = queriedRange.shift();
                    const keepaliveEvents = await eventFetcher.getEvents(ArbRetryableTx__factory_1.ArbRetryableTx__factory, contract => contract.filters.LifetimeExtended(this.retryableCreationId), {
                        fromBlock: blockRange.from,
                        toBlock: blockRange.to,
                        address: constants_1.ARB_RETRYABLE_TX_ADDRESS,
                    });
                    if (keepaliveEvents.length > 0) {
                        timeout = keepaliveEvents
                            .map(e => e.event.newTimeout.toNumber())
                            .sort()
                            .reverse()[0];
                        break;
                    }
                }
                // the retryable no longer exists, but we've searched beyond the timeout
                // so it must have expired
                if (toBlock.timestamp > timeout)
                    break;
                // It is possible to have another keepalive in the last range as it might include block after previous timeout
                while (queriedRange.length > 1)
                    queriedRange.shift();
            }
            const processedSeconds = toBlock.timestamp - fromBlock.timestamp;
            if (processedSeconds != 0) {
                // find the increment that cover ~ 1 day
                increment = Math.ceil((increment * 86400) / processedSeconds);
            }
            fromBlock = toBlock;
        }
        // we know from earlier that the retryable no longer exists, so if we havent found the redemption
        // we know that it must have expired
        return { status: L1ToL2MessageStatus.EXPIRED };
    }
    /**
     * Has this message expired. Once expired the retryable ticket can no longer be redeemed.
     * @deprecated Will be removed in v3.0.0
     * @returns
     */
    async isExpired() {
        return await this.retryableExists();
    }
    async retryableExists() {
        const currentTimestamp = bignumber_1.BigNumber.from((await this.l2Provider.getBlock('latest')).timestamp);
        try {
            const timeoutTimestamp = await this.getTimeout();
            // timeoutTimestamp returns the timestamp at which the retryable ticket expires
            // it can also return revert if the ticket l2Tx does not exist
            return currentTimestamp.lte(timeoutTimestamp);
        }
        catch (err) {
            if (err instanceof Error &&
                err.code ===
                    logger_1.Logger.errors.CALL_EXCEPTION &&
                err.errorName === 'NoTicketWithID') {
                return false;
            }
            throw err;
        }
    }
    async status() {
        return (await this.getSuccessfulRedeem()).status;
    }
    /**
     * Wait for the retryable ticket to be created, for it to be redeemed, and for the l2Tx to be executed.
     * Note: The terminal status of a transaction that only does an eth deposit is FUNDS_DEPOSITED_ON_L2 as
     * no L2 transaction needs to be executed, however the terminal state of any other transaction is REDEEMED
     * which represents that the retryable ticket has been redeemed and the L2 tx has been executed.
     * @param confirmations Amount of confirmations the retryable ticket and the auto redeem receipt should have
     * @param timeout Amount of time to wait for the retryable ticket to be created
     * Defaults to 15 minutes, as by this time all transactions are expected to be included on L2. Throws on timeout.
     * @returns The wait result contains a status, and optionally the l2TxReceipt.
     * If the status is "REDEEMED" then a l2TxReceipt is also available on the result.
     * If the status has any other value then l2TxReceipt is not populated.
     */
    async waitForStatus(confirmations, timeout) {
        const l2Network = await (0, networks_1.getL2Network)(this.chainId);
        const chosenTimeout = (0, lib_1.isDefined)(timeout)
            ? timeout
            : l2Network.depositTimeout;
        // try to wait for the retryable ticket to be created
        const _retryableCreationReceipt = await this.getRetryableCreationReceipt(confirmations, chosenTimeout);
        if (!_retryableCreationReceipt) {
            if (confirmations || chosenTimeout) {
                throw new errors_1.ArbSdkError(`Timed out waiting to retrieve retryable creation receipt: ${this.retryableCreationId}.`);
            }
            else {
                throw new errors_1.ArbSdkError(`Retryable creation receipt not found ${this.retryableCreationId}.`);
            }
        }
        return await this.getSuccessfulRedeem();
    }
    /**
     * The minimium lifetime of a retryable tx
     * @returns
     */
    static async getLifetime(l2Provider) {
        const arbRetryableTx = ArbRetryableTx__factory_1.ArbRetryableTx__factory.connect(constants_1.ARB_RETRYABLE_TX_ADDRESS, l2Provider);
        return await arbRetryableTx.getLifetime();
    }
    /**
     * Timestamp at which this message expires
     * @returns
     */
    async getTimeout() {
        const arbRetryableTx = ArbRetryableTx__factory_1.ArbRetryableTx__factory.connect(constants_1.ARB_RETRYABLE_TX_ADDRESS, this.l2Provider);
        return await arbRetryableTx.getTimeout(this.retryableCreationId);
    }
    /**
     * Address to which CallValue will be credited to on L2 if the retryable ticket times out or is cancelled.
     * The Beneficiary is also the address with the right to cancel a Retryable Ticket (if the ticket hasn’t been redeemed yet).
     * @returns
     */
    getBeneficiary() {
        const arbRetryableTx = ArbRetryableTx__factory_1.ArbRetryableTx__factory.connect(constants_1.ARB_RETRYABLE_TX_ADDRESS, this.l2Provider);
        return arbRetryableTx.getBeneficiary(this.retryableCreationId);
    }
}
exports.L1ToL2MessageReader = L1ToL2MessageReader;
class L1ToL2MessageReaderClassic {
    constructor(l2Provider, chainId, messageNumber) {
        const bitFlip = (num) => num.or(bignumber_1.BigNumber.from(1).shl(255));
        this.messageNumber = messageNumber;
        this.l2Provider = l2Provider;
        this.retryableCreationId = (0, keccak256_1.keccak256)((0, bytes_1.concat)([
            (0, bytes_1.zeroPad)(bignumber_1.BigNumber.from(chainId).toHexString(), 32),
            (0, bytes_1.zeroPad)(bitFlip(this.messageNumber).toHexString(), 32),
        ]));
        this.autoRedeemId = (0, keccak256_1.keccak256)((0, bytes_1.concat)([
            (0, bytes_1.zeroPad)(this.retryableCreationId, 32),
            (0, bytes_1.zeroPad)(bignumber_1.BigNumber.from(1).toHexString(), 32),
        ]));
        this.l2TxHash = (0, keccak256_1.keccak256)((0, bytes_1.concat)([
            (0, bytes_1.zeroPad)(this.retryableCreationId, 32),
            (0, bytes_1.zeroPad)(bignumber_1.BigNumber.from(0).toHexString(), 32),
        ]));
    }
    calculateL2DerivedHash(retryableCreationId) {
        return (0, keccak256_1.keccak256)((0, bytes_1.concat)([
            (0, bytes_1.zeroPad)(retryableCreationId, 32),
            // BN 0 meaning L2 TX
            (0, bytes_1.zeroPad)(bignumber_1.BigNumber.from(0).toHexString(), 32),
        ]));
    }
    /**
     * Try to get the receipt for the retryable ticket creation.
     * This is the L2 transaction that creates the retryable ticket.
     * If confirmations or timeout is provided, this will wait for the ticket to be created
     * @returns Null if retryable has not been created
     */
    async getRetryableCreationReceipt(confirmations, timeout) {
        if (!this.retryableCreationReceipt) {
            this.retryableCreationReceipt = await (0, lib_1.getTransactionReceipt)(this.l2Provider, this.retryableCreationId, confirmations, timeout);
        }
        return this.retryableCreationReceipt || null;
    }
    async status() {
        const creationReceipt = await this.getRetryableCreationReceipt();
        if (!(0, lib_1.isDefined)(creationReceipt)) {
            return L1ToL2MessageStatus.NOT_YET_CREATED;
        }
        if (creationReceipt.status === 0) {
            return L1ToL2MessageStatus.CREATION_FAILED;
        }
        const l2DerivedHash = this.calculateL2DerivedHash(this.retryableCreationId);
        const l2TxReceipt = await this.l2Provider.getTransactionReceipt(l2DerivedHash);
        if (l2TxReceipt && l2TxReceipt.status === 1) {
            return L1ToL2MessageStatus.REDEEMED;
        }
        return L1ToL2MessageStatus.EXPIRED;
    }
}
exports.L1ToL2MessageReaderClassic = L1ToL2MessageReaderClassic;
class L1ToL2MessageWriter extends L1ToL2MessageReader {
    constructor(l2Signer, chainId, sender, messageNumber, l1BaseFee, messageData) {
        super(l2Signer.provider, chainId, sender, messageNumber, l1BaseFee, messageData);
        this.l2Signer = l2Signer;
        if (!l2Signer.provider)
            throw new errors_1.ArbSdkError('Signer not connected to provider.');
    }
    /**
     * Manually redeem the retryable ticket.
     * Throws if message status is not L1ToL2MessageStatus.FUNDS_DEPOSITED_ON_L2
     */
    async redeem(overrides) {
        const status = await this.status();
        if (status === L1ToL2MessageStatus.FUNDS_DEPOSITED_ON_L2) {
            const arbRetryableTx = ArbRetryableTx__factory_1.ArbRetryableTx__factory.connect(constants_1.ARB_RETRYABLE_TX_ADDRESS, this.l2Signer);
            const redeemTx = await arbRetryableTx.redeem(this.retryableCreationId, Object.assign({}, overrides));
            return L2Transaction_1.L2TransactionReceipt.toRedeemTransaction(L2Transaction_1.L2TransactionReceipt.monkeyPatchWait(redeemTx), this.l2Provider);
        }
        else {
            throw new errors_1.ArbSdkError(`Cannot redeem as retryable does not exist. Message status: ${L1ToL2MessageStatus[status]} must be: ${L1ToL2MessageStatus[L1ToL2MessageStatus.FUNDS_DEPOSITED_ON_L2]}.`);
        }
    }
    /**
     * Cancel the retryable ticket.
     * Throws if message status is not L1ToL2MessageStatus.FUNDS_DEPOSITED_ON_L2
     */
    async cancel(overrides) {
        const status = await this.status();
        if (status === L1ToL2MessageStatus.FUNDS_DEPOSITED_ON_L2) {
            const arbRetryableTx = ArbRetryableTx__factory_1.ArbRetryableTx__factory.connect(constants_1.ARB_RETRYABLE_TX_ADDRESS, this.l2Signer);
            return await arbRetryableTx.cancel(this.retryableCreationId, overrides);
        }
        else {
            throw new errors_1.ArbSdkError(`Cannot cancel as retryable does not exist. Message status: ${L1ToL2MessageStatus[status]} must be: ${L1ToL2MessageStatus[L1ToL2MessageStatus.FUNDS_DEPOSITED_ON_L2]}.`);
        }
    }
    /**
     * Increase the timeout of a retryable ticket.
     * Throws if message status is not L1ToL2MessageStatus.FUNDS_DEPOSITED_ON_L2
     */
    async keepAlive(overrides) {
        const status = await this.status();
        if (status === L1ToL2MessageStatus.FUNDS_DEPOSITED_ON_L2) {
            const arbRetryableTx = ArbRetryableTx__factory_1.ArbRetryableTx__factory.connect(constants_1.ARB_RETRYABLE_TX_ADDRESS, this.l2Signer);
            return await arbRetryableTx.keepalive(this.retryableCreationId, overrides);
        }
        else {
            throw new errors_1.ArbSdkError(`Cannot keep alive as retryable does not exist. Message status: ${L1ToL2MessageStatus[status]} must be: ${L1ToL2MessageStatus[L1ToL2MessageStatus.FUNDS_DEPOSITED_ON_L2]}.`);
        }
    }
}
exports.L1ToL2MessageWriter = L1ToL2MessageWriter;
/**
 * A message for Eth deposits from L1 to L2
 */
class EthDepositMessage {
    static calculateDepositTxId(l2ChainId, messageNumber, fromAddress, toAddress, value) {
        const formatNumber = (numberVal) => {
            return ethers_1.ethers.utils.stripZeros(numberVal.toHexString());
        };
        const chainId = bignumber_1.BigNumber.from(l2ChainId);
        const msgNum = bignumber_1.BigNumber.from(messageNumber);
        // https://github.com/OffchainLabs/go-ethereum/blob/07e017aa73e32be92aadb52fa327c552e1b7b118/core/types/arb_types.go#L302-L308
        const fields = [
            formatNumber(chainId),
            (0, bytes_1.zeroPad)(formatNumber(msgNum), 32),
            (0, address_1.getAddress)(fromAddress),
            (0, address_1.getAddress)(toAddress),
            formatNumber(value),
        ];
        // arbitrum eth deposit transactions have type 0x64
        const rlpEnc = ethers_1.ethers.utils.hexConcat([
            '0x64',
            ethers_1.ethers.utils.RLP.encode(fields),
        ]);
        return ethers_1.ethers.utils.keccak256(rlpEnc);
    }
    /**
     * Parse the data field in
     * event InboxMessageDelivered(uint256 indexed messageNum, bytes data);
     * @param eventData
     * @returns destination and amount
     */
    static parseEthDepositData(eventData) {
        // https://github.com/OffchainLabs/nitro/blob/aa84e899cbc902bf6da753b1d66668a1def2c106/contracts/src/bridge/Inbox.sol#L242
        // ethers.defaultAbiCoder doesnt decode packed args, so we do a hardcoded parsing
        const addressEnd = 2 + 20 * 2;
        const to = (0, address_1.getAddress)('0x' + eventData.substring(2, addressEnd));
        const value = bignumber_1.BigNumber.from('0x' + eventData.substring(addressEnd));
        return { to, value };
    }
    /**
     * Create an EthDepositMessage from data emitted in event when calling ethDeposit on Inbox.sol
     * @param l2Provider
     * @param messageNumber The message number in the Inbox.InboxMessageDelivered event
     * @param senderAddr The sender address from Bridge.MessageDelivered event
     * @param inboxMessageEventData The data field from the Inbox.InboxMessageDelivered event
     * @returns
     */
    static async fromEventComponents(l2Provider, messageNumber, senderAddr, inboxMessageEventData) {
        const chainId = (await l2Provider.getNetwork()).chainId;
        const { to, value } = EthDepositMessage.parseEthDepositData(inboxMessageEventData);
        return new EthDepositMessage(l2Provider, chainId, messageNumber, senderAddr, to, value);
    }
    /**
     *
     * @param l2Provider
     * @param l2ChainId
     * @param messageNumber
     * @param to Recipient address of the ETH on L2
     * @param value
     */
    constructor(l2Provider, l2ChainId, messageNumber, from, to, value) {
        this.l2Provider = l2Provider;
        this.l2ChainId = l2ChainId;
        this.messageNumber = messageNumber;
        this.from = from;
        this.to = to;
        this.value = value;
        this.l2DepositTxHash = EthDepositMessage.calculateDepositTxId(l2ChainId, messageNumber, from, to, value);
    }
    async status() {
        const receipt = await this.l2Provider.getTransactionReceipt(this.l2DepositTxHash);
        if (receipt === null)
            return EthDepositStatus.PENDING;
        else
            return EthDepositStatus.DEPOSITED;
    }
    async wait(confirmations, timeout) {
        const l2Network = await (0, networks_1.getL2Network)(this.l2ChainId);
        const chosenTimeout = (0, lib_1.isDefined)(timeout)
            ? timeout
            : l2Network.depositTimeout;
        if (!this.l2DepositTxReceipt) {
            this.l2DepositTxReceipt = await (0, lib_1.getTransactionReceipt)(this.l2Provider, this.l2DepositTxHash, confirmations, chosenTimeout);
        }
        return this.l2DepositTxReceipt || null;
    }
}
exports.EthDepositMessage = EthDepositMessage;
