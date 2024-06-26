import { Chain } from '@wagmi/core/chains';
import WalletConnectProvider from '@walletconnect/legacy-provider';
import { providers } from 'ethers';
import { C as Connector } from './base-84a689bb.js';
import '@wagmi/core';
import 'eventemitter3';

type WalletConnectOptions = ConstructorParameters<typeof WalletConnectProvider>[0];
type WalletConnectSigner = providers.JsonRpcSigner;
declare class WalletConnectLegacyConnector extends Connector<WalletConnectProvider, WalletConnectOptions, WalletConnectSigner> {
    #private;
    readonly id = "walletConnectLegacy";
    readonly name = "WalletConnectLegacy";
    readonly ready = true;
    constructor(config: {
        chains?: Chain[];
        options: WalletConnectOptions;
    });
    connect({ chainId }?: {
        chainId?: number;
    }): Promise<{
        account: `0x${string}`;
        chain: {
            id: number;
            unsupported: boolean;
        };
        provider: providers.Web3Provider;
    }>;
    disconnect(): Promise<void>;
    getAccount(): Promise<`0x${string}`>;
    getChainId(): Promise<number>;
    getProvider({ chainId, create, }?: {
        chainId?: number;
        create?: boolean;
    }): Promise<WalletConnectProvider>;
    getSigner({ chainId }?: {
        chainId?: number;
    }): Promise<providers.JsonRpcSigner>;
    isAuthorized(): Promise<boolean>;
    protected onAccountsChanged: (accounts: string[]) => void;
    protected onChainChanged: (chainId: number | string) => void;
    protected onDisconnect: () => void;
}

export { WalletConnectLegacyConnector };
