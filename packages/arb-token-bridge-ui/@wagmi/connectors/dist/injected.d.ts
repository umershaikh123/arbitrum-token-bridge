import { Address } from '@wagmi/core';
import { Chain } from '@wagmi/core/chains';
import { providers } from 'ethers';
import { C as Connector } from './base-84a689bb.js';
import { E as Ethereum } from './types-82d07ee0.js';
import 'eventemitter3';
import 'abitype';

type InjectedConnectorOptions = {
    /** Name of connector */
    name?: string | ((detectedName: string | string[]) => string);
    /**
     * [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) Ethereum Provider to target
     *
     * @default
     * () => typeof window !== 'undefined' ? window.ethereum : undefined
     */
    getProvider?: () => Ethereum | undefined;
    /**
     * MetaMask and other injected providers do not support programmatic disconnect.
     * This flag simulates the disconnect behavior by keeping track of connection status in storage. See [GitHub issue](https://github.com/MetaMask/metamask-extension/issues/10353) for more info.
     * @default true
     */
    shimDisconnect?: boolean;
};
type ConnectorOptions = InjectedConnectorOptions & Required<Pick<InjectedConnectorOptions, 'getProvider'>>;
declare class InjectedConnector extends Connector<Ethereum | undefined, ConnectorOptions, providers.JsonRpcSigner> {
    #private;
    readonly id: string;
    readonly name: string;
    readonly ready: boolean;
    protected shimDisconnectKey: string;
    constructor({ chains, options: options_, }?: {
        chains?: Chain[];
        options?: InjectedConnectorOptions;
    });
    connect({ chainId }?: {
        chainId?: number;
    }): Promise<{
        account: `0x${string}`;
        chain: {
            id: number;
            unsupported: boolean;
        };
        provider: Ethereum;
    }>;
    disconnect(): Promise<void>;
    getAccount(): Promise<`0x${string}`>;
    getChainId(): Promise<number>;
    getProvider(): Promise<Ethereum | undefined>;
    getSigner({ chainId }?: {
        chainId?: number;
    }): Promise<providers.JsonRpcSigner>;
    isAuthorized(): Promise<boolean>;
    switchChain(chainId: number): Promise<Chain>;
    watchAsset({ address, decimals, image, symbol, }: {
        address: Address;
        decimals?: number;
        image?: string;
        symbol: string;
    }): Promise<boolean>;
    protected onAccountsChanged: (accounts: string[]) => void;
    protected onChainChanged: (chainId: number | string) => void;
    protected onDisconnect: (error: Error) => Promise<void>;
    protected isUserRejectedRequestError(error: unknown): boolean;
}

export { InjectedConnector, InjectedConnectorOptions };
