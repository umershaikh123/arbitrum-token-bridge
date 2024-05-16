import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IOrbitGatewayRouterInterface extends utils.Interface {
    contractName: "IOrbitGatewayRouter";
    functions: {
        "inbox()": FunctionFragment;
        "setGateway(address,uint256,uint256,uint256,address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "inbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "setGateway", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish
    ]): string;
    decodeFunctionResult(functionFragment: "inbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGateway", data: BytesLike): Result;
    events: {};
}
export interface IOrbitGatewayRouter extends BaseContract {
    contractName: "IOrbitGatewayRouter";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IOrbitGatewayRouterInterface;
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
        inbox(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setGateway(_gateway: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, _creditBackAddress: string, _feeAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    inbox(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setGateway(_gateway: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, _creditBackAddress: string, _feeAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        inbox(overrides?: CallOverrides): Promise<string>;
        setGateway(_gateway: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, _creditBackAddress: string, _feeAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        inbox(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setGateway(_gateway: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, _creditBackAddress: string, _feeAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        inbox(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setGateway(_gateway: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, _creditBackAddress: string, _feeAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
