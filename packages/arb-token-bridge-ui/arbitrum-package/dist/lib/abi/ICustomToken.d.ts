import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ICustomTokenInterface extends utils.Interface {
    contractName: "ICustomToken";
    functions: {
        "balanceOf(address)": FunctionFragment;
        "isArbitrumEnabled()": FunctionFragment;
        "registerTokenOnL2(address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "isArbitrumEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "registerTokenOnL2", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string
    ]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isArbitrumEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerTokenOnL2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    events: {};
}
export interface ICustomToken extends BaseContract {
    contractName: "ICustomToken";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICustomTokenInterface;
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
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        isArbitrumEnabled(overrides?: CallOverrides): Promise<[number]>;
        registerTokenOnL2(l2CustomTokenAddress: string, maxSubmissionCostForCustomBridge: BigNumberish, maxSubmissionCostForRouter: BigNumberish, maxGasForCustomBridge: BigNumberish, maxGasForRouter: BigNumberish, gasPriceBid: BigNumberish, valueForGateway: BigNumberish, valueForRouter: BigNumberish, creditBackAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    isArbitrumEnabled(overrides?: CallOverrides): Promise<number>;
    registerTokenOnL2(l2CustomTokenAddress: string, maxSubmissionCostForCustomBridge: BigNumberish, maxSubmissionCostForRouter: BigNumberish, maxGasForCustomBridge: BigNumberish, maxGasForRouter: BigNumberish, gasPriceBid: BigNumberish, valueForGateway: BigNumberish, valueForRouter: BigNumberish, creditBackAddress: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isArbitrumEnabled(overrides?: CallOverrides): Promise<number>;
        registerTokenOnL2(l2CustomTokenAddress: string, maxSubmissionCostForCustomBridge: BigNumberish, maxSubmissionCostForRouter: BigNumberish, maxGasForCustomBridge: BigNumberish, maxGasForRouter: BigNumberish, gasPriceBid: BigNumberish, valueForGateway: BigNumberish, valueForRouter: BigNumberish, creditBackAddress: string, overrides?: CallOverrides): Promise<void>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isArbitrumEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        registerTokenOnL2(l2CustomTokenAddress: string, maxSubmissionCostForCustomBridge: BigNumberish, maxSubmissionCostForRouter: BigNumberish, maxGasForCustomBridge: BigNumberish, maxGasForRouter: BigNumberish, gasPriceBid: BigNumberish, valueForGateway: BigNumberish, valueForRouter: BigNumberish, creditBackAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isArbitrumEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerTokenOnL2(l2CustomTokenAddress: string, maxSubmissionCostForCustomBridge: BigNumberish, maxSubmissionCostForRouter: BigNumberish, maxGasForCustomBridge: BigNumberish, maxGasForRouter: BigNumberish, gasPriceBid: BigNumberish, valueForGateway: BigNumberish, valueForRouter: BigNumberish, creditBackAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
