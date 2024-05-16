import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace BridgeCreator {
    type BridgeContractsStruct = {
        bridge: string;
        sequencerInbox: string;
        inbox: string;
        rollupEventInbox: string;
        outbox: string;
    };
    type BridgeContractsStructOutput = [
        string,
        string,
        string,
        string,
        string
    ] & {
        bridge: string;
        sequencerInbox: string;
        inbox: string;
        rollupEventInbox: string;
        outbox: string;
    };
}
export declare namespace ISequencerInbox {
    type MaxTimeVariationStruct = {
        delayBlocks: BigNumberish;
        futureBlocks: BigNumberish;
        delaySeconds: BigNumberish;
        futureSeconds: BigNumberish;
    };
    type MaxTimeVariationStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        delayBlocks: BigNumber;
        futureBlocks: BigNumber;
        delaySeconds: BigNumber;
        futureSeconds: BigNumber;
    };
}
export interface BridgeCreatorInterface extends utils.Interface {
    contractName: "BridgeCreator";
    functions: {
        "createBridge(address,address,address,(uint256,uint256,uint256,uint256))": FunctionFragment;
        "erc20BasedTemplates()": FunctionFragment;
        "ethBasedTemplates()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateERC20Templates((address,address,address,address,address))": FunctionFragment;
        "updateTemplates((address,address,address,address,address))": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "createBridge", values: [string, string, string, ISequencerInbox.MaxTimeVariationStruct]): string;
    encodeFunctionData(functionFragment: "erc20BasedTemplates", values?: undefined): string;
    encodeFunctionData(functionFragment: "ethBasedTemplates", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "updateERC20Templates", values: [BridgeCreator.BridgeContractsStruct]): string;
    encodeFunctionData(functionFragment: "updateTemplates", values: [BridgeCreator.BridgeContractsStruct]): string;
    decodeFunctionResult(functionFragment: "createBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "erc20BasedTemplates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ethBasedTemplates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateERC20Templates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTemplates", data: BytesLike): Result;
    events: {
        "ERC20TemplatesUpdated()": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "TemplatesUpdated()": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ERC20TemplatesUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TemplatesUpdated"): EventFragment;
}
export type ERC20TemplatesUpdatedEvent = TypedEvent<[], {}>;
export type ERC20TemplatesUpdatedEventFilter = TypedEventFilter<ERC20TemplatesUpdatedEvent>;
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export type TemplatesUpdatedEvent = TypedEvent<[], {}>;
export type TemplatesUpdatedEventFilter = TypedEventFilter<TemplatesUpdatedEvent>;
export interface BridgeCreator extends BaseContract {
    contractName: "BridgeCreator";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BridgeCreatorInterface;
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
        createBridge(adminProxy: string, rollup: string, nativeToken: string, maxTimeVariation: ISequencerInbox.MaxTimeVariationStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        erc20BasedTemplates(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            string,
            string
        ] & {
            bridge: string;
            sequencerInbox: string;
            inbox: string;
            rollupEventInbox: string;
            outbox: string;
        }>;
        ethBasedTemplates(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            string,
            string
        ] & {
            bridge: string;
            sequencerInbox: string;
            inbox: string;
            rollupEventInbox: string;
            outbox: string;
        }>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateERC20Templates(_newTemplates: BridgeCreator.BridgeContractsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateTemplates(_newTemplates: BridgeCreator.BridgeContractsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    createBridge(adminProxy: string, rollup: string, nativeToken: string, maxTimeVariation: ISequencerInbox.MaxTimeVariationStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    erc20BasedTemplates(overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        string,
        string
    ] & {
        bridge: string;
        sequencerInbox: string;
        inbox: string;
        rollupEventInbox: string;
        outbox: string;
    }>;
    ethBasedTemplates(overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        string,
        string
    ] & {
        bridge: string;
        sequencerInbox: string;
        inbox: string;
        rollupEventInbox: string;
        outbox: string;
    }>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateERC20Templates(_newTemplates: BridgeCreator.BridgeContractsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateTemplates(_newTemplates: BridgeCreator.BridgeContractsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        createBridge(adminProxy: string, rollup: string, nativeToken: string, maxTimeVariation: ISequencerInbox.MaxTimeVariationStruct, overrides?: CallOverrides): Promise<BridgeCreator.BridgeContractsStructOutput>;
        erc20BasedTemplates(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            string,
            string
        ] & {
            bridge: string;
            sequencerInbox: string;
            inbox: string;
            rollupEventInbox: string;
            outbox: string;
        }>;
        ethBasedTemplates(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            string,
            string
        ] & {
            bridge: string;
            sequencerInbox: string;
            inbox: string;
            rollupEventInbox: string;
            outbox: string;
        }>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        updateERC20Templates(_newTemplates: BridgeCreator.BridgeContractsStruct, overrides?: CallOverrides): Promise<void>;
        updateTemplates(_newTemplates: BridgeCreator.BridgeContractsStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ERC20TemplatesUpdated()"(): ERC20TemplatesUpdatedEventFilter;
        ERC20TemplatesUpdated(): ERC20TemplatesUpdatedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "TemplatesUpdated()"(): TemplatesUpdatedEventFilter;
        TemplatesUpdated(): TemplatesUpdatedEventFilter;
    };
    estimateGas: {
        createBridge(adminProxy: string, rollup: string, nativeToken: string, maxTimeVariation: ISequencerInbox.MaxTimeVariationStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        erc20BasedTemplates(overrides?: CallOverrides): Promise<BigNumber>;
        ethBasedTemplates(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateERC20Templates(_newTemplates: BridgeCreator.BridgeContractsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateTemplates(_newTemplates: BridgeCreator.BridgeContractsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        createBridge(adminProxy: string, rollup: string, nativeToken: string, maxTimeVariation: ISequencerInbox.MaxTimeVariationStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        erc20BasedTemplates(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ethBasedTemplates(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateERC20Templates(_newTemplates: BridgeCreator.BridgeContractsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateTemplates(_newTemplates: BridgeCreator.BridgeContractsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
