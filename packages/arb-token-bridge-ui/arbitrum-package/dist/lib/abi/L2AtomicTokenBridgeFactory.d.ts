import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type L2RuntimeCodeStruct = {
    router: BytesLike;
    standardGateway: BytesLike;
    customGateway: BytesLike;
    wethGateway: BytesLike;
    aeWeth: BytesLike;
    upgradeExecutor: BytesLike;
    multicall: BytesLike;
};
export type L2RuntimeCodeStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    string
] & {
    router: string;
    standardGateway: string;
    customGateway: string;
    wethGateway: string;
    aeWeth: string;
    upgradeExecutor: string;
    multicall: string;
};
export interface L2AtomicTokenBridgeFactoryInterface extends utils.Interface {
    contractName: "L2AtomicTokenBridgeFactory";
    functions: {
        "deployL2Contracts((bytes,bytes,bytes,bytes,bytes,bytes,bytes),address,address,address,address,address,address,address,address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "deployL2Contracts", values: [
        L2RuntimeCodeStruct,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
    ]): string;
    decodeFunctionResult(functionFragment: "deployL2Contracts", data: BytesLike): Result;
    events: {};
}
export interface L2AtomicTokenBridgeFactory extends BaseContract {
    contractName: "L2AtomicTokenBridgeFactory";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: L2AtomicTokenBridgeFactoryInterface;
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
        deployL2Contracts(l2Code: L2RuntimeCodeStruct, l1Router: string, l1StandardGateway: string, l1CustomGateway: string, l1WethGateway: string, l1Weth: string, l2StandardGatewayCanonicalAddress: string, rollupOwner: string, aliasedL1UpgradeExecutor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    deployL2Contracts(l2Code: L2RuntimeCodeStruct, l1Router: string, l1StandardGateway: string, l1CustomGateway: string, l1WethGateway: string, l1Weth: string, l2StandardGatewayCanonicalAddress: string, rollupOwner: string, aliasedL1UpgradeExecutor: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        deployL2Contracts(l2Code: L2RuntimeCodeStruct, l1Router: string, l1StandardGateway: string, l1CustomGateway: string, l1WethGateway: string, l1Weth: string, l2StandardGatewayCanonicalAddress: string, rollupOwner: string, aliasedL1UpgradeExecutor: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        deployL2Contracts(l2Code: L2RuntimeCodeStruct, l1Router: string, l1StandardGateway: string, l1CustomGateway: string, l1WethGateway: string, l1Weth: string, l2StandardGatewayCanonicalAddress: string, rollupOwner: string, aliasedL1UpgradeExecutor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        deployL2Contracts(l2Code: L2RuntimeCodeStruct, l1Router: string, l1StandardGateway: string, l1CustomGateway: string, l1WethGateway: string, l1Weth: string, l2StandardGatewayCanonicalAddress: string, rollupOwner: string, aliasedL1UpgradeExecutor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
