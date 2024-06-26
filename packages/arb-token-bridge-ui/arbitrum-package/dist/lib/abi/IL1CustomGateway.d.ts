import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IL1CustomGatewayInterface extends utils.Interface {
    contractName: "IL1CustomGateway";
    functions: {
        "registerTokenToL2(address,uint256,uint256,uint256,address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "registerTokenToL2", values: [string, BigNumberish, BigNumberish, BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "registerTokenToL2", data: BytesLike): Result;
    events: {};
}
export interface IL1CustomGateway extends BaseContract {
    contractName: "IL1CustomGateway";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IL1CustomGatewayInterface;
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
        registerTokenToL2(_l2Address: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, _creditBackAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    registerTokenToL2(_l2Address: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, _creditBackAddress: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        registerTokenToL2(_l2Address: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, _creditBackAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        registerTokenToL2(_l2Address: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, _creditBackAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        registerTokenToL2(_l2Address: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, _creditBackAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
