import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface UUPSNotUpgradeableInterface extends utils.Interface {
    contractName: "UUPSNotUpgradeable";
    functions: {
        "proxiableUUID()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "Upgraded(address)": EventFragment;
        "UpgradedSecondary(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpgradedSecondary"): EventFragment;
}
export type AdminChangedEvent = TypedEvent<[
    string,
    string
], {
    previousAdmin: string;
    newAdmin: string;
}>;
export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export type BeaconUpgradedEvent = TypedEvent<[string], {
    beacon: string;
}>;
export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export type UpgradedEvent = TypedEvent<[string], {
    implementation: string;
}>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export type UpgradedSecondaryEvent = TypedEvent<[
    string
], {
    implementation: string;
}>;
export type UpgradedSecondaryEventFilter = TypedEventFilter<UpgradedSecondaryEvent>;
export interface UUPSNotUpgradeable extends BaseContract {
    contractName: "UUPSNotUpgradeable";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UUPSNotUpgradeableInterface;
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
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
    };
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: string | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;
        "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
        Upgraded(implementation?: string | null): UpgradedEventFilter;
        "UpgradedSecondary(address)"(implementation?: string | null): UpgradedSecondaryEventFilter;
        UpgradedSecondary(implementation?: string | null): UpgradedSecondaryEventFilter;
    };
    estimateGas: {
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
