import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ArbRetryableTxInterface extends utils.Interface {
    contractName: "ArbRetryableTx";
    functions: {
        "cancel(bytes32)": FunctionFragment;
        "getBeneficiary(bytes32)": FunctionFragment;
        "getCurrentRedeemer()": FunctionFragment;
        "getLifetime()": FunctionFragment;
        "getTimeout(bytes32)": FunctionFragment;
        "keepalive(bytes32)": FunctionFragment;
        "redeem(bytes32)": FunctionFragment;
        "submitRetryable(bytes32,uint256,uint256,uint256,uint256,uint64,uint256,address,address,address,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "cancel", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getBeneficiary", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getCurrentRedeemer", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLifetime", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTimeout", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "keepalive", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "redeem", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "submitRetryable", values: [
        BytesLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        string,
        string,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBeneficiary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentRedeemer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLifetime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTimeout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "keepalive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitRetryable", data: BytesLike): Result;
    events: {
        "Canceled(bytes32)": EventFragment;
        "LifetimeExtended(bytes32,uint256)": EventFragment;
        "RedeemScheduled(bytes32,bytes32,uint64,uint64,address,uint256,uint256)": EventFragment;
        "Redeemed(bytes32)": EventFragment;
        "TicketCreated(bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Canceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LifetimeExtended"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RedeemScheduled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Redeemed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TicketCreated"): EventFragment;
}
export type CanceledEvent = TypedEvent<[string], {
    ticketId: string;
}>;
export type CanceledEventFilter = TypedEventFilter<CanceledEvent>;
export type LifetimeExtendedEvent = TypedEvent<[
    string,
    BigNumber
], {
    ticketId: string;
    newTimeout: BigNumber;
}>;
export type LifetimeExtendedEventFilter = TypedEventFilter<LifetimeExtendedEvent>;
export type RedeemScheduledEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber
], {
    ticketId: string;
    retryTxHash: string;
    sequenceNum: BigNumber;
    donatedGas: BigNumber;
    gasDonor: string;
    maxRefund: BigNumber;
    submissionFeeRefund: BigNumber;
}>;
export type RedeemScheduledEventFilter = TypedEventFilter<RedeemScheduledEvent>;
export type RedeemedEvent = TypedEvent<[string], {
    userTxHash: string;
}>;
export type RedeemedEventFilter = TypedEventFilter<RedeemedEvent>;
export type TicketCreatedEvent = TypedEvent<[string], {
    ticketId: string;
}>;
export type TicketCreatedEventFilter = TypedEventFilter<TicketCreatedEvent>;
export interface ArbRetryableTx extends BaseContract {
    contractName: "ArbRetryableTx";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ArbRetryableTxInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        cancel(ticketId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getBeneficiary(ticketId: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getCurrentRedeemer(overrides?: CallOverrides): Promise<[string]>;
        getLifetime(overrides?: CallOverrides): Promise<[BigNumber]>;
        getTimeout(ticketId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        keepalive(ticketId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        redeem(ticketId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        submitRetryable(requestId: BytesLike, l1BaseFee: BigNumberish, deposit: BigNumberish, callvalue: BigNumberish, gasFeeCap: BigNumberish, gasLimit: BigNumberish, maxSubmissionFee: BigNumberish, feeRefundAddress: string, beneficiary: string, retryTo: string, retryData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    cancel(ticketId: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getBeneficiary(ticketId: BytesLike, overrides?: CallOverrides): Promise<string>;
    getCurrentRedeemer(overrides?: CallOverrides): Promise<string>;
    getLifetime(overrides?: CallOverrides): Promise<BigNumber>;
    getTimeout(ticketId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    keepalive(ticketId: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    redeem(ticketId: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    submitRetryable(requestId: BytesLike, l1BaseFee: BigNumberish, deposit: BigNumberish, callvalue: BigNumberish, gasFeeCap: BigNumberish, gasLimit: BigNumberish, maxSubmissionFee: BigNumberish, feeRefundAddress: string, beneficiary: string, retryTo: string, retryData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        cancel(ticketId: BytesLike, overrides?: CallOverrides): Promise<void>;
        getBeneficiary(ticketId: BytesLike, overrides?: CallOverrides): Promise<string>;
        getCurrentRedeemer(overrides?: CallOverrides): Promise<string>;
        getLifetime(overrides?: CallOverrides): Promise<BigNumber>;
        getTimeout(ticketId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        keepalive(ticketId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        redeem(ticketId: BytesLike, overrides?: CallOverrides): Promise<string>;
        submitRetryable(requestId: BytesLike, l1BaseFee: BigNumberish, deposit: BigNumberish, callvalue: BigNumberish, gasFeeCap: BigNumberish, gasLimit: BigNumberish, maxSubmissionFee: BigNumberish, feeRefundAddress: string, beneficiary: string, retryTo: string, retryData: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Canceled(bytes32)"(ticketId?: BytesLike | null): CanceledEventFilter;
        Canceled(ticketId?: BytesLike | null): CanceledEventFilter;
        "LifetimeExtended(bytes32,uint256)"(ticketId?: BytesLike | null, newTimeout?: null): LifetimeExtendedEventFilter;
        LifetimeExtended(ticketId?: BytesLike | null, newTimeout?: null): LifetimeExtendedEventFilter;
        "RedeemScheduled(bytes32,bytes32,uint64,uint64,address,uint256,uint256)"(ticketId?: BytesLike | null, retryTxHash?: BytesLike | null, sequenceNum?: BigNumberish | null, donatedGas?: null, gasDonor?: null, maxRefund?: null, submissionFeeRefund?: null): RedeemScheduledEventFilter;
        RedeemScheduled(ticketId?: BytesLike | null, retryTxHash?: BytesLike | null, sequenceNum?: BigNumberish | null, donatedGas?: null, gasDonor?: null, maxRefund?: null, submissionFeeRefund?: null): RedeemScheduledEventFilter;
        "Redeemed(bytes32)"(userTxHash?: BytesLike | null): RedeemedEventFilter;
        Redeemed(userTxHash?: BytesLike | null): RedeemedEventFilter;
        "TicketCreated(bytes32)"(ticketId?: BytesLike | null): TicketCreatedEventFilter;
        TicketCreated(ticketId?: BytesLike | null): TicketCreatedEventFilter;
    };
    estimateGas: {
        cancel(ticketId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getBeneficiary(ticketId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentRedeemer(overrides?: CallOverrides): Promise<BigNumber>;
        getLifetime(overrides?: CallOverrides): Promise<BigNumber>;
        getTimeout(ticketId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        keepalive(ticketId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        redeem(ticketId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        submitRetryable(requestId: BytesLike, l1BaseFee: BigNumberish, deposit: BigNumberish, callvalue: BigNumberish, gasFeeCap: BigNumberish, gasLimit: BigNumberish, maxSubmissionFee: BigNumberish, feeRefundAddress: string, beneficiary: string, retryTo: string, retryData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        cancel(ticketId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getBeneficiary(ticketId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentRedeemer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLifetime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTimeout(ticketId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        keepalive(ticketId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        redeem(ticketId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        submitRetryable(requestId: BytesLike, l1BaseFee: BigNumberish, deposit: BigNumberish, callvalue: BigNumberish, gasFeeCap: BigNumberish, gasLimit: BigNumberish, maxSubmissionFee: BigNumberish, feeRefundAddress: string, beneficiary: string, retryTo: string, retryData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
