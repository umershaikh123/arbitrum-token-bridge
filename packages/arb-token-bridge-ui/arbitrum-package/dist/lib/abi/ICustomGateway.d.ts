import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ICustomGatewayInterface extends utils.Interface {
    contractName: "ICustomGateway";
    functions: {
        "l1ToL2Token(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "l1ToL2Token", values: [string]): string;
    decodeFunctionResult(functionFragment: "l1ToL2Token", data: BytesLike): Result;
    events: {
        "TokenSet(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TokenSet"): EventFragment;
}
export type TokenSetEvent = TypedEvent<[
    string,
    string
], {
    l1Address: string;
    l2Address: string;
}>;
export type TokenSetEventFilter = TypedEventFilter<TokenSetEvent>;
export interface ICustomGateway extends BaseContract {
    contractName: "ICustomGateway";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICustomGatewayInterface;
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
        l1ToL2Token(_l1Token: string, overrides?: CallOverrides): Promise<[string] & {
            _l2Token: string;
        }>;
    };
    l1ToL2Token(_l1Token: string, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        l1ToL2Token(_l1Token: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "TokenSet(address,address)"(l1Address?: string | null, l2Address?: string | null): TokenSetEventFilter;
        TokenSet(l1Address?: string | null, l2Address?: string | null): TokenSetEventFilter;
    };
    estimateGas: {
        l1ToL2Token(_l1Token: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        l1ToL2Token(_l1Token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
