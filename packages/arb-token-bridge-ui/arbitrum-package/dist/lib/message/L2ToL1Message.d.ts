import { Provider } from '@ethersproject/abstract-provider';
import { Signer } from '@ethersproject/abstract-signer';
import { BigNumber } from '@ethersproject/bignumber';
import { BlockTag } from '@ethersproject/abstract-provider';
import { ContractTransaction, Overrides } from 'ethers';
import { SignerOrProvider } from '../dataEntities/signerOrProvider';
import * as classic from './L2ToL1MessageClassic';
import { L2ToL1TransactionEvent as ClassicL2ToL1TransactionEvent, L2ToL1TxEvent as NitroL2ToL1TransactionEvent } from '../abi/ArbSys';
import { EventArgs } from '../dataEntities/event';
import { L2ToL1MessageStatus } from '../dataEntities/message';
export type L2ToL1TransactionEvent = EventArgs<ClassicL2ToL1TransactionEvent> | EventArgs<NitroL2ToL1TransactionEvent>;
/**
 * Conditional type for Signer or Provider. If T is of type Provider
 * then L2ToL1MessageReaderOrWriter<T> will be of type L2ToL1MessageReader.
 * If T is of type Signer then L2ToL1MessageReaderOrWriter<T> will be of
 * type L2ToL1MessageWriter.
 */
export type L2ToL1MessageReaderOrWriter<T extends SignerOrProvider> = T extends Provider ? L2ToL1MessageReader : L2ToL1MessageWriter;
/**
 * Base functionality for L2->L1 messages
 */
export declare class L2ToL1Message {
    protected isClassic(e: L2ToL1TransactionEvent): e is EventArgs<ClassicL2ToL1TransactionEvent>;
    /**
     * Instantiates a new `L2ToL1MessageWriter` or `L2ToL1MessageReader` object.
     *
     * @param {SignerOrProvider} l1SignerOrProvider Signer or provider to be used for executing or reading the L2-to-L1 message.
     * @param {L2ToL1TransactionEvent} event The event containing the data of the L2-to-L1 message.
     * @param {Provider} [l1Provider] Optional. Used to override the Provider which is attached to `l1SignerOrProvider` in case you need more control. This will be a required parameter in a future major version update.
     */
    static fromEvent<T extends SignerOrProvider>(l1SignerOrProvider: T, event: L2ToL1TransactionEvent, l1Provider?: Provider): L2ToL1MessageReaderOrWriter<T>;
    /**
     * Get event logs for L2ToL1 transactions.
     * @param l2Provider
     * @param filter Block range filter
     * @param position The batchnumber indexed field was removed in nitro and a position indexed field was added.
     * For pre-nitro events the value passed in here will be used to find events with the same batchnumber.
     * For post nitro events it will be used to find events with the same position.
     * @param destination The L1 destination of the L2ToL1 message
     * @param hash The uniqueId indexed field was removed in nitro and a hash indexed field was added.
     * For pre-nitro events the value passed in here will be used to find events with the same uniqueId.
     * For post nitro events it will be used to find events with the same hash.
     * @param indexInBatch The index in the batch, only valid for pre-nitro events. This parameter is ignored post-nitro
     * @returns Any classic and nitro events that match the provided filters.
     */
    static getL2ToL1Events(l2Provider: Provider, filter: {
        fromBlock: BlockTag;
        toBlock: BlockTag;
    }, position?: BigNumber, destination?: string, hash?: BigNumber, indexInBatch?: BigNumber): Promise<(L2ToL1TransactionEvent & {
        transactionHash: string;
    })[]>;
}
/**
 * Provides read-only access for l2-to-l1-messages
 */
export declare class L2ToL1MessageReader extends L2ToL1Message {
    protected readonly l1Provider: Provider;
    private readonly classicReader?;
    private readonly nitroReader?;
    constructor(l1Provider: Provider, event: L2ToL1TransactionEvent);
    getOutboxProof(l2Provider: Provider): Promise<classic.MessageBatchProofInfo | null | string[]>;
    /**
     * Get the status of this message
     * In order to check if the message has been executed proof info must be provided.
     * @returns
     */
    status(l2Provider: Provider): Promise<L2ToL1MessageStatus>;
    /**
     * Waits until the outbox entry has been created, and will not return until it has been.
     * WARNING: Outbox entries are only created when the corresponding node is confirmed. Which
     * can take 1 week+, so waiting here could be a very long operation.
     * @param retryDelay
     * @returns outbox entry status (either executed or confirmed but not pending)
     */
    waitUntilReadyToExecute(l2Provider: Provider, retryDelay?: number): Promise<L2ToL1MessageStatus.EXECUTED | L2ToL1MessageStatus.CONFIRMED>;
    /**
     * Estimates the L1 block number in which this L2 to L1 tx will be available for execution.
     * If the message can or already has been executed, this returns null
     * @param l2Provider
     * @returns expected L1 block number where the L2 to L1 message will be executable. Returns null if the message can or already has been executed
     */
    getFirstExecutableBlock(l2Provider: Provider): Promise<BigNumber | null>;
}
/**
 * Provides read and write access for l2-to-l1-messages
 */
export declare class L2ToL1MessageWriter extends L2ToL1MessageReader {
    private readonly classicWriter?;
    private readonly nitroWriter?;
    /**
     * Instantiates a new `L2ToL1MessageWriter` object.
     *
     * @param {Signer} l1Signer The signer to be used for executing the L2-to-L1 message.
     * @param {L2ToL1TransactionEvent} event The event containing the data of the L2-to-L1 message.
     * @param {Provider} [l1Provider] Optional. Used to override the Provider which is attached to `l1Signer` in case you need more control. This will be a required parameter in a future major version update.
     */
    constructor(l1Signer: Signer, event: L2ToL1TransactionEvent, l1Provider?: Provider);
    /**
     * Executes the L2ToL1Message on L1.
     * Will throw an error if the outbox entry has not been created, which happens when the
     * corresponding assertion is confirmed.
     * @returns
     */
    execute(l2Provider: Provider, overrides?: Overrides): Promise<ContractTransaction>;
}
