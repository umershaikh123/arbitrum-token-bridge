import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface L2GatewayTesterInterface extends utils.Interface {
    contractName: "L2GatewayTester";
    functions: {
        "beaconProxyFactory()": FunctionFragment;
        "calculateL2TokenAddress(address)": FunctionFragment;
        "cloneableProxyHash()": FunctionFragment;
        "counterpartGateway()": FunctionFragment;
        "exitNum()": FunctionFragment;
        "finalizeInboundTransfer(address,address,address,uint256,bytes)": FunctionFragment;
        "getOutboundCalldata(address,address,address,uint256,bytes)": FunctionFragment;
        "getUserSalt(address)": FunctionFragment;
        "initialize(address,address,address)": FunctionFragment;
        "outboundTransfer(address,address,uint256,bytes)": FunctionFragment;
        "postUpgradeInit()": FunctionFragment;
        "router()": FunctionFragment;
        "setStubAddressOracleReturn(address)": FunctionFragment;
        "stubAddressOracleReturn()": FunctionFragment;
        "triggerTxToL1()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "beaconProxyFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "calculateL2TokenAddress", values: [string]): string;
    encodeFunctionData(functionFragment: "cloneableProxyHash", values?: undefined): string;
    encodeFunctionData(functionFragment: "counterpartGateway", values?: undefined): string;
    encodeFunctionData(functionFragment: "exitNum", values?: undefined): string;
    encodeFunctionData(functionFragment: "finalizeInboundTransfer", values: [string, string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "getOutboundCalldata", values: [string, string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "getUserSalt", values: [string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "outboundTransfer", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "postUpgradeInit", values?: undefined): string;
    encodeFunctionData(functionFragment: "router", values?: undefined): string;
    encodeFunctionData(functionFragment: "setStubAddressOracleReturn", values: [string]): string;
    encodeFunctionData(functionFragment: "stubAddressOracleReturn", values?: undefined): string;
    encodeFunctionData(functionFragment: "triggerTxToL1", values?: undefined): string;
    decodeFunctionResult(functionFragment: "beaconProxyFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateL2TokenAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cloneableProxyHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "counterpartGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exitNum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeInboundTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOutboundCalldata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserSalt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outboundTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "postUpgradeInit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStubAddressOracleReturn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stubAddressOracleReturn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "triggerTxToL1", data: BytesLike): Result;
    events: {
        "DepositFinalized(address,address,address,uint256)": EventFragment;
        "TxToL1(address,address,uint256,bytes)": EventFragment;
        "WithdrawalInitiated(address,address,address,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DepositFinalized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TxToL1"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawalInitiated"): EventFragment;
}
export type DepositFinalizedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], {
    l1Token: string;
    _from: string;
    _to: string;
    _amount: BigNumber;
}>;
export type DepositFinalizedEventFilter = TypedEventFilter<DepositFinalizedEvent>;
export type TxToL1Event = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], {
    _from: string;
    _to: string;
    _id: BigNumber;
    _data: string;
}>;
export type TxToL1EventFilter = TypedEventFilter<TxToL1Event>;
export type WithdrawalInitiatedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], {
    l1Token: string;
    _from: string;
    _to: string;
    _l2ToL1Id: BigNumber;
    _exitNum: BigNumber;
    _amount: BigNumber;
}>;
export type WithdrawalInitiatedEventFilter = TypedEventFilter<WithdrawalInitiatedEvent>;
export interface L2GatewayTester extends BaseContract {
    contractName: "L2GatewayTester";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: L2GatewayTesterInterface;
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
        beaconProxyFactory(overrides?: CallOverrides): Promise<[string]>;
        calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<[string]>;
        cloneableProxyHash(overrides?: CallOverrides): Promise<[string]>;
        counterpartGateway(overrides?: CallOverrides): Promise<[string]>;
        exitNum(overrides?: CallOverrides): Promise<[BigNumber]>;
        finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getOutboundCalldata(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            outboundCalldata: string;
        }>;
        getUserSalt(l1ERC20: string, overrides?: CallOverrides): Promise<[string]>;
        initialize(_l1Counterpart: string, _router: string, _beaconProxyFactory: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "outboundTransfer(address,address,uint256,bytes)"(_l1Token: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "outboundTransfer(address,address,uint256,uint256,uint256,bytes)"(_l1Token: string, _to: string, _amount: BigNumberish, arg3: BigNumberish, arg4: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        postUpgradeInit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        router(overrides?: CallOverrides): Promise<[string]>;
        setStubAddressOracleReturn(_stubValue: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stubAddressOracleReturn(overrides?: CallOverrides): Promise<[string]>;
        triggerTxToL1(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    beaconProxyFactory(overrides?: CallOverrides): Promise<string>;
    calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<string>;
    cloneableProxyHash(overrides?: CallOverrides): Promise<string>;
    counterpartGateway(overrides?: CallOverrides): Promise<string>;
    exitNum(overrides?: CallOverrides): Promise<BigNumber>;
    finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getOutboundCalldata(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
    getUserSalt(l1ERC20: string, overrides?: CallOverrides): Promise<string>;
    initialize(_l1Counterpart: string, _router: string, _beaconProxyFactory: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "outboundTransfer(address,address,uint256,bytes)"(_l1Token: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "outboundTransfer(address,address,uint256,uint256,uint256,bytes)"(_l1Token: string, _to: string, _amount: BigNumberish, arg3: BigNumberish, arg4: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    postUpgradeInit(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    router(overrides?: CallOverrides): Promise<string>;
    setStubAddressOracleReturn(_stubValue: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stubAddressOracleReturn(overrides?: CallOverrides): Promise<string>;
    triggerTxToL1(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        beaconProxyFactory(overrides?: CallOverrides): Promise<string>;
        calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<string>;
        cloneableProxyHash(overrides?: CallOverrides): Promise<string>;
        counterpartGateway(overrides?: CallOverrides): Promise<string>;
        exitNum(overrides?: CallOverrides): Promise<BigNumber>;
        finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        getOutboundCalldata(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
        getUserSalt(l1ERC20: string, overrides?: CallOverrides): Promise<string>;
        initialize(_l1Counterpart: string, _router: string, _beaconProxyFactory: string, overrides?: CallOverrides): Promise<void>;
        "outboundTransfer(address,address,uint256,bytes)"(_l1Token: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
        "outboundTransfer(address,address,uint256,uint256,uint256,bytes)"(_l1Token: string, _to: string, _amount: BigNumberish, arg3: BigNumberish, arg4: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
        postUpgradeInit(overrides?: CallOverrides): Promise<void>;
        router(overrides?: CallOverrides): Promise<string>;
        setStubAddressOracleReturn(_stubValue: string, overrides?: CallOverrides): Promise<void>;
        stubAddressOracleReturn(overrides?: CallOverrides): Promise<string>;
        triggerTxToL1(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "DepositFinalized(address,address,address,uint256)"(l1Token?: string | null, _from?: string | null, _to?: string | null, _amount?: null): DepositFinalizedEventFilter;
        DepositFinalized(l1Token?: string | null, _from?: string | null, _to?: string | null, _amount?: null): DepositFinalizedEventFilter;
        "TxToL1(address,address,uint256,bytes)"(_from?: string | null, _to?: string | null, _id?: BigNumberish | null, _data?: null): TxToL1EventFilter;
        TxToL1(_from?: string | null, _to?: string | null, _id?: BigNumberish | null, _data?: null): TxToL1EventFilter;
        "WithdrawalInitiated(address,address,address,uint256,uint256,uint256)"(l1Token?: null, _from?: string | null, _to?: string | null, _l2ToL1Id?: BigNumberish | null, _exitNum?: null, _amount?: null): WithdrawalInitiatedEventFilter;
        WithdrawalInitiated(l1Token?: null, _from?: string | null, _to?: string | null, _l2ToL1Id?: BigNumberish | null, _exitNum?: null, _amount?: null): WithdrawalInitiatedEventFilter;
    };
    estimateGas: {
        beaconProxyFactory(overrides?: CallOverrides): Promise<BigNumber>;
        calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<BigNumber>;
        cloneableProxyHash(overrides?: CallOverrides): Promise<BigNumber>;
        counterpartGateway(overrides?: CallOverrides): Promise<BigNumber>;
        exitNum(overrides?: CallOverrides): Promise<BigNumber>;
        finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getOutboundCalldata(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getUserSalt(l1ERC20: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_l1Counterpart: string, _router: string, _beaconProxyFactory: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "outboundTransfer(address,address,uint256,bytes)"(_l1Token: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "outboundTransfer(address,address,uint256,uint256,uint256,bytes)"(_l1Token: string, _to: string, _amount: BigNumberish, arg3: BigNumberish, arg4: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        postUpgradeInit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        router(overrides?: CallOverrides): Promise<BigNumber>;
        setStubAddressOracleReturn(_stubValue: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stubAddressOracleReturn(overrides?: CallOverrides): Promise<BigNumber>;
        triggerTxToL1(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        beaconProxyFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cloneableProxyHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        counterpartGateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exitNum(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getOutboundCalldata(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserSalt(l1ERC20: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_l1Counterpart: string, _router: string, _beaconProxyFactory: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "outboundTransfer(address,address,uint256,bytes)"(_l1Token: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "outboundTransfer(address,address,uint256,uint256,uint256,bytes)"(_l1Token: string, _to: string, _amount: BigNumberish, arg3: BigNumberish, arg4: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        postUpgradeInit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        router(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setStubAddressOracleReturn(_stubValue: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stubAddressOracleReturn(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        triggerTxToL1(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
