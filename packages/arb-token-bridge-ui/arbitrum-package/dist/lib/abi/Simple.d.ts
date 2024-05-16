import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface SimpleInterface extends utils.Interface {
    contractName: "Simple";
    functions: {
        "checkBlockHashes()": FunctionFragment;
        "checkCalls(bool,bool,bool,bool,bool,bool)": FunctionFragment;
        "checkGasUsed(address,bytes)": FunctionFragment;
        "checkIsTopLevelOrWasAliased(bool,bool)": FunctionFragment;
        "counter()": FunctionFragment;
        "emitNullEvent()": FunctionFragment;
        "getBlockDifficulty()": FunctionFragment;
        "increment()": FunctionFragment;
        "incrementEmit()": FunctionFragment;
        "incrementRedeem()": FunctionFragment;
        "logAndIncrement(uint256)": FunctionFragment;
        "noop()": FunctionFragment;
        "pleaseRevert()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "checkBlockHashes", values?: undefined): string;
    encodeFunctionData(functionFragment: "checkCalls", values: [boolean, boolean, boolean, boolean, boolean, boolean]): string;
    encodeFunctionData(functionFragment: "checkGasUsed", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "checkIsTopLevelOrWasAliased", values: [boolean, boolean]): string;
    encodeFunctionData(functionFragment: "counter", values?: undefined): string;
    encodeFunctionData(functionFragment: "emitNullEvent", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBlockDifficulty", values?: undefined): string;
    encodeFunctionData(functionFragment: "increment", values?: undefined): string;
    encodeFunctionData(functionFragment: "incrementEmit", values?: undefined): string;
    encodeFunctionData(functionFragment: "incrementRedeem", values?: undefined): string;
    encodeFunctionData(functionFragment: "logAndIncrement", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "noop", values?: undefined): string;
    encodeFunctionData(functionFragment: "pleaseRevert", values?: undefined): string;
    decodeFunctionResult(functionFragment: "checkBlockHashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkCalls", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkGasUsed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkIsTopLevelOrWasAliased", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "counter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitNullEvent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBlockDifficulty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "incrementEmit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "incrementRedeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "logAndIncrement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "noop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pleaseRevert", data: BytesLike): Result;
    events: {
        "CounterEvent(uint64)": EventFragment;
        "LogAndIncrementCalled(uint256,uint256)": EventFragment;
        "NullEvent()": EventFragment;
        "RedeemedEvent(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CounterEvent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogAndIncrementCalled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NullEvent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RedeemedEvent"): EventFragment;
}
export type CounterEventEvent = TypedEvent<[BigNumber], {
    count: BigNumber;
}>;
export type CounterEventEventFilter = TypedEventFilter<CounterEventEvent>;
export type LogAndIncrementCalledEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    expected: BigNumber;
    have: BigNumber;
}>;
export type LogAndIncrementCalledEventFilter = TypedEventFilter<LogAndIncrementCalledEvent>;
export type NullEventEvent = TypedEvent<[], {}>;
export type NullEventEventFilter = TypedEventFilter<NullEventEvent>;
export type RedeemedEventEvent = TypedEvent<[
    string,
    string
], {
    caller: string;
    redeemer: string;
}>;
export type RedeemedEventEventFilter = TypedEventFilter<RedeemedEventEvent>;
export interface Simple extends BaseContract {
    contractName: "Simple";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SimpleInterface;
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
        checkBlockHashes(overrides?: CallOverrides): Promise<[BigNumber]>;
        checkCalls(useTopLevel: boolean, directCase: boolean, staticCase: boolean, delegateCase: boolean, callcodeCase: boolean, callCase: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        checkGasUsed(to: string, input: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        checkIsTopLevelOrWasAliased(useTopLevel: boolean, expected: boolean, overrides?: CallOverrides): Promise<[void]>;
        counter(overrides?: CallOverrides): Promise<[BigNumber]>;
        emitNullEvent(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getBlockDifficulty(overrides?: CallOverrides): Promise<[BigNumber]>;
        increment(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        incrementEmit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        incrementRedeem(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        logAndIncrement(expected: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        noop(overrides?: CallOverrides): Promise<[void]>;
        pleaseRevert(overrides?: CallOverrides): Promise<[void]>;
    };
    checkBlockHashes(overrides?: CallOverrides): Promise<BigNumber>;
    checkCalls(useTopLevel: boolean, directCase: boolean, staticCase: boolean, delegateCase: boolean, callcodeCase: boolean, callCase: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    checkGasUsed(to: string, input: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    checkIsTopLevelOrWasAliased(useTopLevel: boolean, expected: boolean, overrides?: CallOverrides): Promise<void>;
    counter(overrides?: CallOverrides): Promise<BigNumber>;
    emitNullEvent(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getBlockDifficulty(overrides?: CallOverrides): Promise<BigNumber>;
    increment(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    incrementEmit(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    incrementRedeem(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    logAndIncrement(expected: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    noop(overrides?: CallOverrides): Promise<void>;
    pleaseRevert(overrides?: CallOverrides): Promise<void>;
    callStatic: {
        checkBlockHashes(overrides?: CallOverrides): Promise<BigNumber>;
        checkCalls(useTopLevel: boolean, directCase: boolean, staticCase: boolean, delegateCase: boolean, callcodeCase: boolean, callCase: boolean, overrides?: CallOverrides): Promise<void>;
        checkGasUsed(to: string, input: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        checkIsTopLevelOrWasAliased(useTopLevel: boolean, expected: boolean, overrides?: CallOverrides): Promise<void>;
        counter(overrides?: CallOverrides): Promise<BigNumber>;
        emitNullEvent(overrides?: CallOverrides): Promise<void>;
        getBlockDifficulty(overrides?: CallOverrides): Promise<BigNumber>;
        increment(overrides?: CallOverrides): Promise<void>;
        incrementEmit(overrides?: CallOverrides): Promise<void>;
        incrementRedeem(overrides?: CallOverrides): Promise<void>;
        logAndIncrement(expected: BigNumberish, overrides?: CallOverrides): Promise<void>;
        noop(overrides?: CallOverrides): Promise<void>;
        pleaseRevert(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CounterEvent(uint64)"(count?: null): CounterEventEventFilter;
        CounterEvent(count?: null): CounterEventEventFilter;
        "LogAndIncrementCalled(uint256,uint256)"(expected?: null, have?: null): LogAndIncrementCalledEventFilter;
        LogAndIncrementCalled(expected?: null, have?: null): LogAndIncrementCalledEventFilter;
        "NullEvent()"(): NullEventEventFilter;
        NullEvent(): NullEventEventFilter;
        "RedeemedEvent(address,address)"(caller?: null, redeemer?: null): RedeemedEventEventFilter;
        RedeemedEvent(caller?: null, redeemer?: null): RedeemedEventEventFilter;
    };
    estimateGas: {
        checkBlockHashes(overrides?: CallOverrides): Promise<BigNumber>;
        checkCalls(useTopLevel: boolean, directCase: boolean, staticCase: boolean, delegateCase: boolean, callcodeCase: boolean, callCase: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        checkGasUsed(to: string, input: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        checkIsTopLevelOrWasAliased(useTopLevel: boolean, expected: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        counter(overrides?: CallOverrides): Promise<BigNumber>;
        emitNullEvent(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getBlockDifficulty(overrides?: CallOverrides): Promise<BigNumber>;
        increment(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        incrementEmit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        incrementRedeem(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        logAndIncrement(expected: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        noop(overrides?: CallOverrides): Promise<BigNumber>;
        pleaseRevert(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        checkBlockHashes(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkCalls(useTopLevel: boolean, directCase: boolean, staticCase: boolean, delegateCase: boolean, callcodeCase: boolean, callCase: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        checkGasUsed(to: string, input: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkIsTopLevelOrWasAliased(useTopLevel: boolean, expected: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        counter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        emitNullEvent(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getBlockDifficulty(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increment(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        incrementEmit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        incrementRedeem(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        logAndIncrement(expected: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        noop(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pleaseRevert(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
