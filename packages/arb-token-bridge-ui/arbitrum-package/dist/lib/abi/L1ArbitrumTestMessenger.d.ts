import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface L1ArbitrumTestMessengerInterface extends utils.Interface {
    contractName: "L1ArbitrumTestMessenger";
    functions: {
        "setInboxUse(bool)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "setInboxUse", values: [boolean]): string;
    decodeFunctionResult(functionFragment: "setInboxUse", data: BytesLike): Result;
    events: {
        "TxToL2(address,address,uint256,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TxToL2"): EventFragment;
}
export type TxToL2Event = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], {
    _from: string;
    _to: string;
    _seqNum: BigNumber;
    _data: string;
}>;
export type TxToL2EventFilter = TypedEventFilter<TxToL2Event>;
export interface L1ArbitrumTestMessenger extends BaseContract {
    contractName: "L1ArbitrumTestMessenger";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: L1ArbitrumTestMessengerInterface;
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
        setInboxUse(_shouldUseInbox: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    setInboxUse(_shouldUseInbox: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        setInboxUse(_shouldUseInbox: boolean, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "TxToL2(address,address,uint256,bytes)"(_from?: string | null, _to?: string | null, _seqNum?: BigNumberish | null, _data?: null): TxToL2EventFilter;
        TxToL2(_from?: string | null, _to?: string | null, _seqNum?: BigNumberish | null, _data?: null): TxToL2EventFilter;
    };
    estimateGas: {
        setInboxUse(_shouldUseInbox: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        setInboxUse(_shouldUseInbox: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
