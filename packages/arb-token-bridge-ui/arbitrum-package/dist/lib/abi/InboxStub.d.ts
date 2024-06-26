import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface InboxStubInterface extends utils.Interface {
    contractName: "InboxStub";
    functions: {
        "allowListEnabled()": FunctionFragment;
        "bridge()": FunctionFragment;
        "calculateRetryableSubmissionFee(uint256,uint256)": FunctionFragment;
        "createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)": FunctionFragment;
        "depositEth()": FunctionFragment;
        "getProxyAdmin()": FunctionFragment;
        "initialize(address,address)": FunctionFragment;
        "isAllowed(address)": FunctionFragment;
        "maxDataSize()": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "postUpgradeInit(address)": FunctionFragment;
        "sendContractTransaction(uint256,uint256,address,uint256,bytes)": FunctionFragment;
        "sendL1FundedContractTransaction(uint256,uint256,address,bytes)": FunctionFragment;
        "sendL1FundedUnsignedTransaction(uint256,uint256,uint256,address,bytes)": FunctionFragment;
        "sendL1FundedUnsignedTransactionToFork(uint256,uint256,uint256,address,bytes)": FunctionFragment;
        "sendL2Message(bytes)": FunctionFragment;
        "sendL2MessageFromOrigin(bytes)": FunctionFragment;
        "sendUnsignedTransaction(uint256,uint256,uint256,address,uint256,bytes)": FunctionFragment;
        "sendUnsignedTransactionToFork(uint256,uint256,uint256,address,uint256,bytes)": FunctionFragment;
        "sendWithdrawEthToFork(uint256,uint256,uint256,uint256,address)": FunctionFragment;
        "sequencerInbox()": FunctionFragment;
        "setAllowList(address[],bool[])": FunctionFragment;
        "setAllowListEnabled(bool)": FunctionFragment;
        "unpause()": FunctionFragment;
        "unsafeCreateRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "allowListEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
    encodeFunctionData(functionFragment: "calculateRetryableSubmissionFee", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createRetryableTicket", values: [
        string,
        BigNumberish,
        BigNumberish,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "depositEth", values?: undefined): string;
    encodeFunctionData(functionFragment: "getProxyAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isAllowed", values: [string]): string;
    encodeFunctionData(functionFragment: "maxDataSize", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "postUpgradeInit", values: [string]): string;
    encodeFunctionData(functionFragment: "sendContractTransaction", values: [BigNumberish, BigNumberish, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "sendL1FundedContractTransaction", values: [BigNumberish, BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "sendL1FundedUnsignedTransaction", values: [BigNumberish, BigNumberish, BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "sendL1FundedUnsignedTransactionToFork", values: [BigNumberish, BigNumberish, BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "sendL2Message", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "sendL2MessageFromOrigin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "sendUnsignedTransaction", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "sendUnsignedTransactionToFork", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "sendWithdrawEthToFork", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "sequencerInbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAllowList", values: [string[], boolean[]]): string;
    encodeFunctionData(functionFragment: "setAllowListEnabled", values: [boolean]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "unsafeCreateRetryableTicket", values: [
        string,
        BigNumberish,
        BigNumberish,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "allowListEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateRetryableSubmissionFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createRetryableTicket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositEth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProxyAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxDataSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "postUpgradeInit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendContractTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendL1FundedContractTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendL1FundedUnsignedTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendL1FundedUnsignedTransactionToFork", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendL2Message", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendL2MessageFromOrigin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendUnsignedTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendUnsignedTransactionToFork", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendWithdrawEthToFork", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sequencerInbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAllowList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAllowListEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unsafeCreateRetryableTicket", data: BytesLike): Result;
    events: {
        "InboxMessageDelivered(uint256,bytes)": EventFragment;
        "InboxMessageDeliveredFromOrigin(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "InboxMessageDelivered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InboxMessageDeliveredFromOrigin"): EventFragment;
}
export type InboxMessageDeliveredEvent = TypedEvent<[
    BigNumber,
    string
], {
    messageNum: BigNumber;
    data: string;
}>;
export type InboxMessageDeliveredEventFilter = TypedEventFilter<InboxMessageDeliveredEvent>;
export type InboxMessageDeliveredFromOriginEvent = TypedEvent<[
    BigNumber
], {
    messageNum: BigNumber;
}>;
export type InboxMessageDeliveredFromOriginEventFilter = TypedEventFilter<InboxMessageDeliveredFromOriginEvent>;
export interface InboxStub extends BaseContract {
    contractName: "InboxStub";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: InboxStubInterface;
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
        allowListEnabled(overrides?: CallOverrides): Promise<[boolean]>;
        bridge(overrides?: CallOverrides): Promise<[string]>;
        calculateRetryableSubmissionFee(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        createRetryableTicket(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: string, arg5: BigNumberish, arg6: BigNumberish, arg7: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        depositEth(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getProxyAdmin(overrides?: CallOverrides): Promise<[string]>;
        initialize(_bridge: string, arg1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isAllowed(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        maxDataSize(overrides?: CallOverrides): Promise<[BigNumber]>;
        pause(overrides?: CallOverrides): Promise<[void]>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        postUpgradeInit(_bridge: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendContractTransaction(arg0: BigNumberish, arg1: BigNumberish, arg2: string, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        sendL1FundedContractTransaction(arg0: BigNumberish, arg1: BigNumberish, arg2: string, arg3: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendL1FundedUnsignedTransaction(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendL1FundedUnsignedTransactionToFork(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendL2Message(messageData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendL2MessageFromOrigin(messageData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendUnsignedTransaction(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BigNumberish, arg5: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        sendUnsignedTransactionToFork(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BigNumberish, arg5: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendWithdrawEthToFork(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, arg4: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sequencerInbox(overrides?: CallOverrides): Promise<[string]>;
        setAllowList(arg0: string[], arg1: boolean[], overrides?: CallOverrides): Promise<[void]>;
        setAllowListEnabled(arg0: boolean, overrides?: CallOverrides): Promise<[void]>;
        unpause(overrides?: CallOverrides): Promise<[void]>;
        unsafeCreateRetryableTicket(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: string, arg5: BigNumberish, arg6: BigNumberish, arg7: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    allowListEnabled(overrides?: CallOverrides): Promise<boolean>;
    bridge(overrides?: CallOverrides): Promise<string>;
    calculateRetryableSubmissionFee(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    createRetryableTicket(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: string, arg5: BigNumberish, arg6: BigNumberish, arg7: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    depositEth(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getProxyAdmin(overrides?: CallOverrides): Promise<string>;
    initialize(_bridge: string, arg1: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isAllowed(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    maxDataSize(overrides?: CallOverrides): Promise<BigNumber>;
    pause(overrides?: CallOverrides): Promise<void>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    postUpgradeInit(_bridge: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendContractTransaction(arg0: BigNumberish, arg1: BigNumberish, arg2: string, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    sendL1FundedContractTransaction(arg0: BigNumberish, arg1: BigNumberish, arg2: string, arg3: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendL1FundedUnsignedTransaction(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendL1FundedUnsignedTransactionToFork(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendL2Message(messageData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendL2MessageFromOrigin(messageData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendUnsignedTransaction(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BigNumberish, arg5: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    sendUnsignedTransactionToFork(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BigNumberish, arg5: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendWithdrawEthToFork(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, arg4: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sequencerInbox(overrides?: CallOverrides): Promise<string>;
    setAllowList(arg0: string[], arg1: boolean[], overrides?: CallOverrides): Promise<void>;
    setAllowListEnabled(arg0: boolean, overrides?: CallOverrides): Promise<void>;
    unpause(overrides?: CallOverrides): Promise<void>;
    unsafeCreateRetryableTicket(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: string, arg5: BigNumberish, arg6: BigNumberish, arg7: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowListEnabled(overrides?: CallOverrides): Promise<boolean>;
        bridge(overrides?: CallOverrides): Promise<string>;
        calculateRetryableSubmissionFee(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        createRetryableTicket(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: string, arg5: BigNumberish, arg6: BigNumberish, arg7: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        depositEth(overrides?: CallOverrides): Promise<BigNumber>;
        getProxyAdmin(overrides?: CallOverrides): Promise<string>;
        initialize(_bridge: string, arg1: string, overrides?: CallOverrides): Promise<void>;
        isAllowed(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        maxDataSize(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        postUpgradeInit(_bridge: string, overrides?: CallOverrides): Promise<void>;
        sendContractTransaction(arg0: BigNumberish, arg1: BigNumberish, arg2: string, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        sendL1FundedContractTransaction(arg0: BigNumberish, arg1: BigNumberish, arg2: string, arg3: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        sendL1FundedUnsignedTransaction(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        sendL1FundedUnsignedTransactionToFork(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        sendL2Message(messageData: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        sendL2MessageFromOrigin(messageData: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        sendUnsignedTransaction(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BigNumberish, arg5: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        sendUnsignedTransactionToFork(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BigNumberish, arg5: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        sendWithdrawEthToFork(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, arg4: string, overrides?: CallOverrides): Promise<BigNumber>;
        sequencerInbox(overrides?: CallOverrides): Promise<string>;
        setAllowList(arg0: string[], arg1: boolean[], overrides?: CallOverrides): Promise<void>;
        setAllowListEnabled(arg0: boolean, overrides?: CallOverrides): Promise<void>;
        unpause(overrides?: CallOverrides): Promise<void>;
        unsafeCreateRetryableTicket(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: string, arg5: BigNumberish, arg6: BigNumberish, arg7: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "InboxMessageDelivered(uint256,bytes)"(messageNum?: BigNumberish | null, data?: null): InboxMessageDeliveredEventFilter;
        InboxMessageDelivered(messageNum?: BigNumberish | null, data?: null): InboxMessageDeliveredEventFilter;
        "InboxMessageDeliveredFromOrigin(uint256)"(messageNum?: BigNumberish | null): InboxMessageDeliveredFromOriginEventFilter;
        InboxMessageDeliveredFromOrigin(messageNum?: BigNumberish | null): InboxMessageDeliveredFromOriginEventFilter;
    };
    estimateGas: {
        allowListEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        bridge(overrides?: CallOverrides): Promise<BigNumber>;
        calculateRetryableSubmissionFee(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        createRetryableTicket(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: string, arg5: BigNumberish, arg6: BigNumberish, arg7: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        depositEth(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getProxyAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_bridge: string, arg1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isAllowed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxDataSize(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: CallOverrides): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        postUpgradeInit(_bridge: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendContractTransaction(arg0: BigNumberish, arg1: BigNumberish, arg2: string, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        sendL1FundedContractTransaction(arg0: BigNumberish, arg1: BigNumberish, arg2: string, arg3: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendL1FundedUnsignedTransaction(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendL1FundedUnsignedTransactionToFork(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendL2Message(messageData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendL2MessageFromOrigin(messageData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendUnsignedTransaction(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BigNumberish, arg5: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        sendUnsignedTransactionToFork(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BigNumberish, arg5: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendWithdrawEthToFork(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, arg4: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sequencerInbox(overrides?: CallOverrides): Promise<BigNumber>;
        setAllowList(arg0: string[], arg1: boolean[], overrides?: CallOverrides): Promise<BigNumber>;
        setAllowListEnabled(arg0: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: CallOverrides): Promise<BigNumber>;
        unsafeCreateRetryableTicket(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: string, arg5: BigNumberish, arg6: BigNumberish, arg7: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allowListEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateRetryableSubmissionFee(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createRetryableTicket(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: string, arg5: BigNumberish, arg6: BigNumberish, arg7: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        depositEth(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getProxyAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_bridge: string, arg1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isAllowed(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxDataSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        postUpgradeInit(_bridge: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendContractTransaction(arg0: BigNumberish, arg1: BigNumberish, arg2: string, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendL1FundedContractTransaction(arg0: BigNumberish, arg1: BigNumberish, arg2: string, arg3: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendL1FundedUnsignedTransaction(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendL1FundedUnsignedTransactionToFork(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendL2Message(messageData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendL2MessageFromOrigin(messageData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendUnsignedTransaction(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BigNumberish, arg5: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendUnsignedTransactionToFork(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BigNumberish, arg5: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendWithdrawEthToFork(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, arg4: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sequencerInbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAllowList(arg0: string[], arg1: boolean[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAllowListEnabled(arg0: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unpause(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unsafeCreateRetryableTicket(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: string, arg5: BigNumberish, arg6: BigNumberish, arg7: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
