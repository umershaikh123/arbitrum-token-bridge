import { Signer } from '@ethersproject/abstract-signer';
import { ContractTransaction, Overrides } from 'ethers';
import { TransactionRequest } from '@ethersproject/providers';
import { RequiredPick } from '../utils/types';
import { MessageDeliveredEvent } from '../abi/Bridge';
import { L2Network } from '../dataEntities/networks';
import { FetchedEvent } from '../utils/eventFetcher';
type ForceInclusionParams = FetchedEvent<MessageDeliveredEvent> & {
    delayedAcc: string;
};
type RequiredTransactionRequestType = RequiredPick<TransactionRequest, 'data' | 'value'>;
/**
 * Tools for interacting with the inbox and bridge contracts
 */
export declare class InboxTools {
    private readonly l1Signer;
    private readonly l2Network;
    /**
     * Parent chain provider
     */
    private readonly l1Provider;
    /**
     * Parent chain for the given Arbitrum chain, can be an L1 or an L2
     */
    private readonly l1Network;
    constructor(l1Signer: Signer, l2Network: L2Network);
    /**
     * Find the first (or close to first) block whose number
     * is below the provided number, and whose timestamp is below
     * the provided timestamp
     * @param blockNumber
     * @param blockTimestamp
     * @returns
     */
    private findFirstBlockBelow;
    private isContractCreation;
    /**
     * We should use nodeInterface to get the gas estimate is because we
     * are making a delayed inbox message which doesn't need l1 calldata
     * gas fee part.
     */
    private estimateArbitrumGas;
    /**
     * Get a range of blocks within messages eligible for force inclusion emitted events
     * @param blockNumberRangeSize
     * @returns
     */
    private getForceIncludableBlockRange;
    /**
     * Look for force includable events in the search range blocks, if no events are found the search range is
     * increased incrementally up to the max search range blocks.
     * @param bridge
     * @param searchRangeBlocks
     * @param maxSearchRangeBlocks
     * @returns
     */
    private getEventsAndIncreaseRange;
    /**
     * Find the event of the latest message that can be force include
     * @param maxSearchRangeBlocks The max range of blocks to search in.
     * Defaults to 3 * 6545 ( = ~3 days) prior to the first eligble block
     * @param startSearchRangeBlocks The start range of block to search in.
     * Moves incrementally up to the maxSearchRangeBlocks. Defaults to 100;
     * @param rangeMultiplier The multiplier to use when increasing the block range
     * Defaults to 2.
     * @returns Null if non can be found.
     */
    getForceIncludableEvent(maxSearchRangeBlocks?: number, startSearchRangeBlocks?: number, rangeMultipler?: number): Promise<ForceInclusionParams | null>;
    /**
     * Force includes all eligible messages in the delayed inbox.
     * The inbox contract doesnt allow a message to be force-included
     * until after a delay period has been completed.
     * @param messageDeliveredEvent Provide this to include all messages up to this one. Responsibility is on the caller to check the eligibility of this event.
     * @returns The force include transaction, or null if no eligible message were found for inclusion
     */
    forceInclude<T extends ForceInclusionParams | undefined>(messageDeliveredEvent?: T, overrides?: Overrides): Promise<T extends ForceInclusionParams ? ContractTransaction : ContractTransaction | null>;
    /**
     * Send l2 signed tx using delayed inox, which won't alias the sender's adddress
     * It will be automatically included by the sequencer on l2, if it isn't included
     * within 24 hours, you can force include it
     * @param signedTx A signed transaction which can be sent directly to network,
     * you can call inboxTools.signL2Message to get.
     * @returns The l1 delayed inbox's transaction itself.
     */
    sendL2SignedTx(signedTx: string): Promise<ContractTransaction | null>;
    /**
     * Sign a transaction with msg.to, msg.value and msg.data.
     * You can use this as a helper to call inboxTools.sendL2SignedMessage
     * above.
     * @param message A signed transaction which can be sent directly to network,
     * tx.to, tx.data, tx.value must be provided when not contract creation, if
     * contractCreation is true, no need provide tx.to. tx.gasPrice and tx.nonce
     * can be overrided. (You can also send contract creation transaction by set tx.to
     * to zero address or null)
     * @param l2Signer ethers Signer type, used to sign l2 transaction
     * @returns The l1 delayed inbox's transaction signed data.
     */
    signL2Tx(txRequest: RequiredTransactionRequestType, l2Signer: Signer): Promise<string>;
}
export {};
