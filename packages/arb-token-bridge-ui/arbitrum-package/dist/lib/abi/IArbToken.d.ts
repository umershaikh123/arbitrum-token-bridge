import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IArbTokenInterface extends utils.Interface {
    contractName: "IArbToken";
    functions: {
        "bridgeBurn(address,uint256)": FunctionFragment;
        "bridgeMint(address,uint256)": FunctionFragment;
        "l1Address()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "bridgeBurn", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "bridgeMint", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "l1Address", values?: undefined): string;
    decodeFunctionResult(functionFragment: "bridgeBurn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridgeMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l1Address", data: BytesLike): Result;
    events: {};
}
export interface IArbToken extends BaseContract {
    contractName: "IArbToken";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IArbTokenInterface;
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
        bridgeBurn(account: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        bridgeMint(account: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        l1Address(overrides?: CallOverrides): Promise<[string]>;
    };
    bridgeBurn(account: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    bridgeMint(account: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    l1Address(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        bridgeBurn(account: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        bridgeMint(account: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        l1Address(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        bridgeBurn(account: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        bridgeMint(account: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        l1Address(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        bridgeBurn(account: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        bridgeMint(account: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        l1Address(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
