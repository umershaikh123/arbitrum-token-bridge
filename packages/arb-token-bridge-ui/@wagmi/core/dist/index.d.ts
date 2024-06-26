import * as _wagmi_chains from '@wagmi/chains';
import { Chain } from '@wagmi/chains';
export { Chain, goerli, mainnet, sepolia } from '@wagmi/chains';
import { Mutate, StoreApi } from 'zustand/vanilla';
import { Connector, ConnectorData } from '@wagmi/connectors';
export { Connector, ConnectorData, ConnectorEvents, Ethereum } from '@wagmi/connectors';
import { P as Provider, W as WebSocketProvider, U as Unit, S as Signer, H as Hash, C as ChainProviderFn, a as ProviderWithFallbackConfig } from './index-35b6525c.js';
export { C as ChainProviderFn, F as FallbackProviderConfig, H as Hash, P as Provider, a as ProviderWithFallbackConfig, S as Signer, U as Unit, W as WebSocketProvider, u as units } from './index-35b6525c.js';
import { Address, ResolvedConfig, TypedData, TypedDataToPrimitiveTypes, TypedDataDomain, Narrow, Abi, ExtractAbiFunction, ExtractAbiEventNames, AbiEvent, ExtractAbiEvent, AbiParametersToPrimitiveTypes, ExtractAbiFunctionNames } from 'abitype';
export { Address } from 'abitype';
import { PopulatedTransaction, providers, Transaction, ContractInterface } from 'ethers';
import { G as GetConfig, a as GetOverridesForAbiStateMutability, C as Contract, b as ContractsConfig, c as ContractsResult, d as GetReturnType, e as GetFunctionName, f as GetArgs } from './getContract-2443b222.js';
export { h as GetContractArgs, i as GetContractResult, g as getContract } from './getContract-2443b222.js';
import { TransactionResponse } from '@ethersproject/providers';
export { InjectedConnector, InjectedConnectorOptions } from '@wagmi/connectors/injected';
import * as abitype_dist_abi_78346466 from 'abitype/dist/abi-78346466';

type BaseStorage = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
type ClientStorage = {
    getItem<T>(key: string, defaultState?: T | null): T | null;
    setItem<T>(key: string, value: T | null): void;
    removeItem(key: string): void;
};
declare const noopStorage: BaseStorage;
declare function createStorage({ deserialize, key: prefix, serialize, storage, }: {
    deserialize?: <T>(value: string) => T;
    key?: string;
    serialize?: <T>(value: T) => string;
    storage: BaseStorage;
}): ClientStorage;

/**
 * [ERC-20 Token Standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-20)
 */
declare const erc20ABI: readonly [{
    readonly type: "event";
    readonly name: "Approval";
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "value";
        readonly type: "uint256";
    }];
}, {
    readonly type: "event";
    readonly name: "Transfer";
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "value";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "allowance";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "approve";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
}, {
    readonly type: "function";
    readonly name: "balanceOf";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "decimals";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint8";
    }];
}, {
    readonly type: "function";
    readonly name: "name";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
    }];
}, {
    readonly type: "function";
    readonly name: "symbol";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
    }];
}, {
    readonly type: "function";
    readonly name: "totalSupply";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "transfer";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
}, {
    readonly type: "function";
    readonly name: "transferFrom";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
}];
/**
 * [ERC-721 Non-Fungible Token Standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-721)
 */
declare const erc721ABI: readonly [{
    readonly type: "event";
    readonly name: "Approval";
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
}, {
    readonly type: "event";
    readonly name: "ApprovalForAll";
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "operator";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "approved";
        readonly type: "bool";
    }];
}, {
    readonly type: "event";
    readonly name: "Transfer";
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "approve";
    readonly stateMutability: "payable";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [];
}, {
    readonly type: "function";
    readonly name: "balanceOf";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "getApproved";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
    }];
}, {
    readonly type: "function";
    readonly name: "isApprovedForAll";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "operator";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
}, {
    readonly type: "function";
    readonly name: "name";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
    }];
}, {
    readonly type: "function";
    readonly name: "ownerOf";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }];
}, {
    readonly type: "function";
    readonly name: "safeTransferFrom";
    readonly stateMutability: "payable";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [];
}, {
    readonly type: "function";
    readonly name: "safeTransferFrom";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly name: "id";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly outputs: readonly [];
}, {
    readonly type: "function";
    readonly name: "setApprovalForAll";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly type: "bool";
    }];
    readonly outputs: readonly [];
}, {
    readonly type: "function";
    readonly name: "symbol";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
    }];
}, {
    readonly type: "function";
    readonly name: "tokenByIndex";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "tokenByIndex";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "tokenURI";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
    }];
}, {
    readonly type: "function";
    readonly name: "totalSupply";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "transferFrom";
    readonly stateMutability: "payable";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "tokeId";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [];
}];
/**
 * [ERC-4626 Tokenized Vaults Standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-4626)
 */
declare const erc4626ABI: readonly [{
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Approval";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "receiver";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "assets";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly name: "Deposit";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Transfer";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "receiver";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "assets";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly name: "Withdraw";
    readonly type: "event";
}, {
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "asset";
    readonly outputs: readonly [{
        readonly name: "assetTokenAddress";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly name: "convertToAssets";
    readonly outputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly name: "convertToShares";
    readonly outputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }, {
        readonly name: "receiver";
        readonly type: "address";
    }];
    readonly name: "deposit";
    readonly outputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "caller";
        readonly type: "address";
    }];
    readonly name: "maxDeposit";
    readonly outputs: readonly [{
        readonly name: "maxAssets";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "caller";
        readonly type: "address";
    }];
    readonly name: "maxMint";
    readonly outputs: readonly [{
        readonly name: "maxShares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "maxRedeem";
    readonly outputs: readonly [{
        readonly name: "maxShares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "maxWithdraw";
    readonly outputs: readonly [{
        readonly name: "maxAssets";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }, {
        readonly name: "receiver";
        readonly type: "address";
    }];
    readonly name: "mint";
    readonly outputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly name: "previewDeposit";
    readonly outputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly name: "previewMint";
    readonly outputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly name: "previewRedeem";
    readonly outputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly name: "previewWithdraw";
    readonly outputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }, {
        readonly name: "receiver";
        readonly type: "address";
    }, {
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "redeem";
    readonly outputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalAssets";
    readonly outputs: readonly [{
        readonly name: "totalManagedAssets";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }, {
        readonly name: "receiver";
        readonly type: "address";
    }, {
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "withdraw";
    readonly outputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];

type ClientConfig<TProvider extends Provider = Provider, TWebSocketProvider extends WebSocketProvider = WebSocketProvider> = {
    /** Enables reconnecting to last used connector on init */
    autoConnect?: boolean;
    /**
     * Connectors used for linking accounts
     * @default [new InjectedConnector()]
     */
    connectors?: (() => Connector[]) | Connector[];
    /** Custom logger */
    logger?: {
        warn: typeof console.warn | null;
    };
    /** Interface for connecting to network */
    provider: ((config: {
        chainId?: number;
    }) => TProvider) | TProvider;
    /**
     * Custom storage for data persistance
     * @default window.localStorage
     */
    storage?: ClientStorage;
    /** WebSocket interface for connecting to network */
    webSocketProvider?: ((config: {
        chainId?: number;
    }) => TWebSocketProvider | undefined) | TWebSocketProvider;
};
type Data$1<TProvider extends Provider> = ConnectorData<TProvider>;
type State<TProvider extends Provider = Provider, TWebSocketProvider extends WebSocketProvider = WebSocketProvider> = {
    chains?: Connector['chains'];
    connector?: Connector;
    connectors: Connector[];
    data?: Data$1<TProvider>;
    error?: Error;
    provider: TProvider;
    status: 'connected' | 'connecting' | 'reconnecting' | 'disconnected';
    webSocketProvider?: TWebSocketProvider;
};
declare class Client<TProvider extends Provider = Provider, TWebSocketProvider extends WebSocketProvider = WebSocketProvider> {
    #private;
    config: ClientConfig<TProvider, TWebSocketProvider>;
    providers: Map<number, TProvider | undefined>;
    storage: ClientStorage;
    store: Mutate<StoreApi<State<TProvider, TWebSocketProvider>>, [
        [
            'zustand/subscribeWithSelector',
            never
        ],
        [
            'zustand/persist',
            Partial<State<TProvider, TWebSocketProvider>>
        ]
    ]>;
    webSocketProviders: Map<number, TWebSocketProvider | undefined>;
    constructor({ autoConnect, connectors, provider, storage, logger, webSocketProvider, }: ClientConfig<TProvider, TWebSocketProvider>);
    get chains(): _wagmi_chains.Chain[] | undefined;
    get connectors(): Connector<any, any, any>[];
    get connector(): Connector<any, any, any> | undefined;
    get data(): Data$1<TProvider> | undefined;
    get error(): Error | undefined;
    get lastUsedChainId(): number | undefined;
    get provider(): TProvider;
    get status(): "connecting" | "connected" | "reconnecting" | "disconnected";
    get subscribe(): {
        (listener: (selectedState: State<TProvider, TWebSocketProvider>, previousSelectedState: State<TProvider, TWebSocketProvider>) => void): () => void;
        <U>(selector: (state: State<TProvider, TWebSocketProvider>) => U, listener: (selectedState: U, previousSelectedState: U) => void, options?: {
            equalityFn?: ((a: U, b: U) => boolean) | undefined;
            /**
             * Custom storage for data persistance
             * @default window.localStorage
             */
            fireImmediately?: boolean | undefined;
        } | undefined): () => void;
    };
    get webSocketProvider(): TWebSocketProvider | undefined;
    setState(updater: State<TProvider, TWebSocketProvider> | ((state: State<TProvider, TWebSocketProvider>) => State<TProvider, TWebSocketProvider>)): void;
    clearState(): void;
    destroy(): Promise<void>;
    autoConnect(): Promise<Data$1<TProvider> | undefined>;
    getProvider({ bust, chainId }?: {
        bust?: boolean;
        chainId?: number;
    }): TProvider;
    getWebSocketProvider({ bust, chainId, }?: {
        bust?: boolean;
        chainId?: number;
    }): TWebSocketProvider | undefined;
    setLastUsedConnector(lastUsedConnector?: string | null): void;
}
declare function createClient<TProvider extends Provider = Provider, TWebSocketProvider extends WebSocketProvider = WebSocketProvider>(config: ClientConfig<TProvider, TWebSocketProvider>): Client<TProvider, TWebSocketProvider>;
declare function getClient<TProvider extends Provider = Provider, TWebSocketProvider extends WebSocketProvider = WebSocketProvider>(): Client<TProvider, TWebSocketProvider>;

type ConnectArgs = {
    /** Chain ID to connect to */
    chainId?: number;
    /** Connector to connect */
    connector: Connector;
};
type Data<TProvider extends Provider = Provider> = Required<ConnectorData<TProvider>>;
type ConnectResult<TProvider extends Provider = Provider> = {
    account: Data<TProvider>['account'];
    chain: Data<TProvider>['chain'];
    connector: Client<TProvider>['connector'];
    provider: Data<TProvider>['provider'];
};
declare function connect<TProvider extends Provider = Provider>({ chainId, connector, }: ConnectArgs): Promise<ConnectResult<TProvider>>;

declare function disconnect(): Promise<void>;

type FetchBalanceArgs = {
    /** Address of balance to check */
    address: Address;
    /** Chain id to use for provider */
    chainId?: number;
    /** Units for formatting output */
    formatUnits?: Unit | number;
    /** ERC-20 address */
    token?: Address;
};
type FetchBalanceResult = {
    decimals: ResolvedConfig['IntType'];
    formatted: string;
    symbol: string;
    value: ResolvedConfig['BigIntType'];
};
declare function fetchBalance({ address, chainId, formatUnits: unit, token, }: FetchBalanceArgs): Promise<FetchBalanceResult>;

type FetchSignerArgs = {
    /** Chain ID to use for signer */
    chainId?: number;
};
type FetchSignerResult<TSigner extends Signer = Signer> = TSigner | null;
declare function fetchSigner<TSigner extends Signer = Signer>({ chainId, }?: FetchSignerArgs): Promise<FetchSignerResult<TSigner>>;

type GetAccountResult<TProvider extends Provider = Provider> = {
    address: NonNullable<Data$1<TProvider>['account']>;
    connector: NonNullable<Client<TProvider>['connector']>;
    isConnected: true;
    isConnecting: false;
    isDisconnected: false;
    isReconnecting: false;
    status: 'connected';
} | {
    address: Data$1<TProvider>['account'];
    connector: Client<TProvider>['connector'];
    isConnected: boolean;
    isConnecting: false;
    isDisconnected: false;
    isReconnecting: true;
    status: 'reconnecting';
} | {
    address: Data$1<TProvider>['account'];
    connector: Client<TProvider>['connector'];
    isConnected: false;
    isReconnecting: false;
    isConnecting: true;
    isDisconnected: false;
    status: 'connecting';
} | {
    address: undefined;
    connector: undefined;
    isConnected: false;
    isReconnecting: false;
    isConnecting: false;
    isDisconnected: true;
    status: 'disconnected';
};
declare function getAccount<TProvider extends Provider>(): GetAccountResult<TProvider>;

type GetNetworkResult = {
    chain?: Chain & {
        unsupported?: boolean;
    };
    chains: Chain[];
};
declare function getNetwork(): GetNetworkResult;

type SignMessageArgs = {
    /** Message to sign with wallet */
    message: string | Uint8Array;
};
type SignMessageResult = ResolvedConfig['BytesType'];
declare function signMessage(args: SignMessageArgs): Promise<SignMessageResult>;

type SignTypedDataArgs<TTypedData extends TypedData | {
    [key: string]: unknown;
} = TypedData, TSchema = TTypedData extends TypedData ? TypedDataToPrimitiveTypes<TTypedData> : {
    [key: string]: any;
}, TValue = TSchema[keyof TSchema]> = {
    /** Domain or domain signature for origin or contract */
    domain: TypedDataDomain;
    /** Named list of all type definitions */
    types: Narrow<TTypedData>;
} & ({
    [key: string]: any;
} extends TValue ? {
    /**
     * Data to sign
     *
     * Use a [const assertion](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions) on {@link types} for type inference.
     */
    value: {
        [key: string]: unknown;
    };
} : {
    /** Data to sign */
    value: TValue;
});
type SignTypedDataResult = string;
declare function signTypedData<TTypedData extends TypedData>({ domain, types, value, }: SignTypedDataArgs<TTypedData>): Promise<SignTypedDataResult>;

type SwitchNetworkArgs = {
    chainId: number;
};
type SwitchNetworkResult = Chain;
declare function switchNetwork({ chainId, }: SwitchNetworkArgs): Promise<SwitchNetworkResult>;

type WatchAccountCallback<TProvider extends Provider = Provider> = (data: GetAccountResult<TProvider>) => void;
type WatchAccountConfig = {
    selector?({ address, connector, status, }: {
        address?: string;
        connector?: Connector;
        status: GetAccountResult['status'];
    }): any;
};
declare function watchAccount<TProvider extends Provider>(callback: WatchAccountCallback<TProvider>, { selector }?: WatchAccountConfig): () => void;

type WatchNetworkCallback = (data: GetNetworkResult) => void;
type WatchNetworkConfig = {
    selector?({ chainId, chains }: {
        chainId?: number;
        chains?: Chain[];
    }): any;
};
declare function watchNetwork(callback: WatchNetworkCallback, { selector }?: WatchNetworkConfig): () => void;

type WatchSignerArgs = FetchSignerArgs;
type WatchSignerCallback<TSigner extends Signer = Signer> = (data: FetchSignerResult<TSigner>) => void;
declare function watchSigner<TSigner extends Signer = Signer>({ chainId }: WatchSignerArgs, callback: WatchSignerCallback<TSigner>): () => void;

type FetchTokenArgs = {
    /** Address of ERC-20 token */
    address: Address;
    /** Chain id to use for provider */
    chainId?: number;
    /** Units for formatting output */
    formatUnits?: Unit | number;
};
type FetchTokenResult = {
    address: Address;
    decimals: ResolvedConfig['IntType'];
    name: string;
    symbol: string;
    totalSupply: {
        formatted: string;
        value: ResolvedConfig['BigIntType'];
    };
};
declare function fetchToken({ address, chainId, formatUnits: units, }: FetchTokenArgs): Promise<FetchTokenResult>;

type StateMutability$1 = 'nonpayable' | 'payable';
type PrepareWriteContractConfig<TAbi extends Abi | readonly unknown[] = Abi, TFunctionName extends string = string, TChainId extends number = number, TSigner extends Signer = Signer> = GetConfig<TAbi, TFunctionName, StateMutability$1> & {
    /** Chain id to use for provider */
    chainId?: TChainId | number;
    /** Overrides */
    overrides?: GetOverridesForAbiStateMutability<[
        TAbi,
        TFunctionName
    ] extends [
        infer TAbi_ extends Abi,
        infer TFunctionName_ extends string
    ] ? ExtractAbiFunction<TAbi_, TFunctionName_>['stateMutability'] : StateMutability$1>;
    /** Custom signer */
    signer?: TSigner | null;
};
type Request$1 = PopulatedTransaction & {
    to: Address;
    gasLimit: NonNullable<PopulatedTransaction['gasLimit']>;
};
type PrepareWriteContractResult<TAbi extends Abi | readonly unknown[] = Abi, TFunctionName extends string = string, TChainId extends number = number> = {
    abi: TAbi extends Abi ? [ExtractAbiFunction<TAbi, TFunctionName>] : TAbi;
    address: Address;
    chainId?: TChainId;
    functionName: TFunctionName;
    mode: 'prepared';
    request: Request$1;
};
/**
 * @description Prepares the parameters required for a contract write transaction.
 *
 * Returns config to be passed through to `writeContract`.
 *
 * @example
 * import { prepareWriteContract, writeContract } from '@wagmi/core'
 *
 * const config = await prepareWriteContract({
 *  address: '0x...',
 *  abi: wagmiAbi,
 *  functionName: 'mint',
 * })
 * const result = await writeContract(config)
 */
declare function prepareWriteContract<TAbi extends Abi | readonly unknown[], TFunctionName extends string, TChainId extends number, TSigner extends Signer = Signer>({ abi, address, chainId, functionName, overrides, signer: signer_, ...config }: PrepareWriteContractConfig<TAbi, TFunctionName, TChainId, TSigner>): Promise<PrepareWriteContractResult<TAbi, TFunctionName, TChainId>>;

type MulticallConfig<TContracts extends Contract[]> = {
    /** Failures in the multicall will fail silently */
    allowFailure?: boolean;
    /** Chain id to use for provider */
    chainId?: number;
    /** Contracts to query */
    contracts: readonly [...ContractsConfig<TContracts>];
    /** Call overrides */
    overrides?: GetOverridesForAbiStateMutability<'pure' | 'view'>;
};
type MulticallResult<TContracts extends Contract[]> = ContractsResult<TContracts>;
declare function multicall<TAbi extends Abi | readonly unknown[], TFunctionName extends string, TContracts extends {
    abi: TAbi;
    functionName: TFunctionName;
}[]>({ allowFailure, chainId: chainIdOverride, contracts, overrides, }: MulticallConfig<TContracts>): Promise<MulticallResult<TContracts>>;

type StateMutability = 'pure' | 'view';
type ReadContractConfig<TAbi extends Abi | readonly unknown[] = Abi, TFunctionName extends string = string> = GetConfig<TAbi, TFunctionName, StateMutability> & {
    /** Chain id to use for provider */
    chainId?: number;
    /** Call overrides */
    overrides?: GetOverridesForAbiStateMutability<StateMutability>;
};
type ReadContractResult<TAbi extends Abi | readonly unknown[] = Abi, TFunctionName extends string = string> = GetReturnType<TAbi, TFunctionName>;
declare function readContract<TAbi extends Abi | readonly unknown[], TFunctionName extends string>({ address, chainId, abi, functionName, overrides, ...config }: ReadContractConfig<TAbi, TFunctionName>): Promise<ReadContractResult<TAbi, TFunctionName>>;

type ReadContractsConfig<TContracts extends Contract[]> = {
    /** Failures in the multicall will fail silently */
    allowFailure?: boolean;
    /** Contracts to query */
    contracts: readonly [
        ...ContractsConfig<TContracts, {
            /** Chain id to use for provider */
            chainId?: number;
        }>
    ];
    /** Call overrides */
    overrides?: GetOverridesForAbiStateMutability<'pure' | 'view'>;
};
type ReadContractsResult<TContracts extends Contract[]> = ContractsResult<TContracts>;
declare function readContracts<TAbi extends Abi | readonly unknown[], TFunctionName extends string, TContracts extends {
    abi: TAbi;
    functionName: TFunctionName;
}[]>({ allowFailure, contracts, overrides, }: ReadContractsConfig<TContracts>): Promise<ReadContractsResult<TContracts>>;

type WatchContractEventConfig<TAbi extends Abi | readonly unknown[] = Abi, TEventName extends string = string> = {
    /** Contract ABI */
    abi: Narrow<TAbi>;
    /** Contract address */
    address: Address;
    /** Chain id to use for provider */
    chainId?: number;
    /** Name of the event to listen to on the contract */
    eventName: GetEventName<TAbi, TEventName>;
    /** Receive only a single event */
    once?: boolean;
};
type WatchContractEventCallback<TAbi extends Abi | readonly unknown[] = Abi, TEventName extends string = string> = GetListener<TAbi, TEventName>;
declare function watchContractEvent<TAbi extends Abi | readonly unknown[], TEventName extends string>({ address, abi, chainId, eventName, once, }: WatchContractEventConfig<TAbi, TEventName>, callback: WatchContractEventCallback<TAbi, TEventName>): () => void;
type GetEventName<TAbi extends Abi | readonly unknown[] = Abi, TEventName extends string = string> = TAbi extends Abi ? ExtractAbiEventNames<TAbi> extends infer AbiEventNames ? AbiEventNames | (TEventName extends AbiEventNames ? TEventName : never) | (Abi extends TAbi ? string : never) : never : TEventName;
type GetListener<TAbi extends Abi | readonly unknown[], TEventName extends string, TAbiEvent extends AbiEvent = TAbi extends Abi ? ExtractAbiEvent<TAbi, TEventName> : AbiEvent, TArgs = AbiParametersToPrimitiveTypes<TAbiEvent['inputs']>, FailedToParseArgs = ([TArgs] extends [never] ? true : false) | (readonly unknown[] extends TArgs ? true : false)> = true extends FailedToParseArgs ? (...args: readonly unknown[]) => void : (...args: TArgs extends readonly unknown[] ? TArgs : readonly unknown[]) => void;

type WatchMulticallConfig<TContracts extends Contract[]> = MulticallConfig<TContracts> & {
    listenToBlock?: boolean;
};
type WatchMulticallCallback<TContracts extends Contract[]> = (results: MulticallResult<TContracts>) => void;
declare function watchMulticall<TAbi extends Abi | readonly unknown[], TFunctionName extends string, TContracts extends {
    abi: TAbi;
    functionName: TFunctionName;
}[]>(config: WatchMulticallConfig<TContracts>, callback: WatchMulticallCallback<TContracts>): () => void;

type WatchReadContractConfig<TAbi extends Abi | readonly unknown[] = Abi, TFunctionName extends string = string> = ReadContractConfig<TAbi, TFunctionName> & {
    listenToBlock?: boolean;
};
type WatchReadContractCallback<TAbi extends Abi | readonly unknown[], TFunctionName extends string> = (result: ReadContractResult<TAbi, TFunctionName>) => void;
declare function watchReadContract<TAbi extends Abi | readonly unknown[], TFunctionName extends TAbi extends Abi ? ExtractAbiFunctionNames<TAbi, 'view' | 'pure'> : string>(config: WatchReadContractConfig<TAbi, TFunctionName>, callback: WatchReadContractCallback<TAbi, TFunctionName>): () => void;

type WatchReadContractsConfig<TContracts extends Contract[]> = ReadContractsConfig<TContracts> & {
    listenToBlock?: boolean;
};
type WatchReadContractsCallback<TContracts extends Contract[]> = (results: ReadContractsResult<TContracts>) => void;
declare function watchReadContracts<TAbi extends Abi | readonly unknown[], TFunctionName extends string, TContracts extends {
    abi: TAbi;
    functionName: TFunctionName;
}[]>(config: WatchReadContractsConfig<TContracts>, callback: WatchReadContractsCallback<TContracts>): () => void;

type FetchTransactionArgs = {
    /** Chain ID used to validate if the signer is connected to the target chain */
    chainId?: number;
    /** Transaction hash */
    hash: Hash;
};
type FetchTransactionResult = providers.TransactionResponse;
/**
 * @description Fetches transaction for hash
 *
 * @example
 * import { fetchTransaction } from '@wagmi/core'
 *
 * const transaction = await fetchTransaction({
 *  chainId: 1,
 *  hash: '0x...',
 * })
 */
declare function fetchTransaction({ chainId, hash, }: FetchTransactionArgs): Promise<FetchTransactionResult>;

type PrepareSendTransactionArgs<TSigner extends Signer = Signer> = {
    /** Chain ID used to validate if the signer is connected to the target chain */
    chainId?: number;
    /** Request data to prepare the transaction */
    request: providers.TransactionRequest & {
        to: NonNullable<providers.TransactionRequest['to']>;
    };
    signer?: TSigner | null;
};
type PrepareSendTransactionResult = {
    chainId?: number;
    request: providers.TransactionRequest & {
        to: Address;
        gasLimit: NonNullable<providers.TransactionRequest['gasLimit']>;
    };
    mode: 'prepared';
};
/**
 * @description Prepares the parameters required for sending a transaction.
 *
 * Returns config to be passed through to `sendTransaction`.
 *
 * @example
 * import { prepareSendTransaction, sendTransaction } from '@wagmi/core'
 *
 * const config = await prepareSendTransaction({
 *  request: {
 *    to: 'moxey.eth',
 *    value: parseEther('1'),
 *  }
 * })
 * const result = await sendTransaction(config)
 */
declare function prepareSendTransaction({ chainId, request, signer: signer_, }: PrepareSendTransactionArgs): Promise<PrepareSendTransactionResult>;

type SendTransactionPreparedRequest = {
    /**
     * `recklesslyUnprepared`: Allow to pass through an unprepared `request`. Note: This has
     * [UX pitfalls](/docs/prepare-hooks#ux-pitfalls-without-prepare-hooks), it is highly recommended
     * to not use this and instead prepare the request upfront using the `prepareSendTransaction` function.
     *
     * `prepared`: The request has been prepared with parameters required for sending a transaction
     * via the `prepareSendTransaction` function
     * */
    mode: 'prepared';
    /** The prepared request for sending a transaction. */
    request: providers.TransactionRequest & {
        to: Address;
        gasLimit: NonNullable<providers.TransactionRequest['gasLimit']>;
    };
};
type SendTransactionUnpreparedRequest = {
    mode: 'recklesslyUnprepared';
    /** The unprepared request for sending a transaction. */
    request: providers.TransactionRequest;
};
type SendTransactionArgs = {
    /** Chain ID used to validate if the signer is connected to the target chain */
    chainId?: number;
} & (SendTransactionPreparedRequest | SendTransactionUnpreparedRequest);
type SendTransactionResult = {
    hash: Hash;
    wait: providers.TransactionResponse['wait'];
};
/**
 * @description Function to send a transaction.
 *
 * It is recommended to pair this with the `prepareSendTransaction` function to avoid
 * [UX pitfalls](https://wagmi.sh/react/prepare-hooks#ux-pitfalls-without-prepare-hooks).
 *
 * @example
 * import { prepareSendTransaction, sendTransaction } from '@wagmi/core'
 *
 * const config = await prepareSendTransaction({
 *  to: 'moxey.eth',
 *  value: parseEther('1'),
 * })
 * const result = await sendTransaction(config)
 */
declare function sendTransaction({ chainId, mode, request, }: SendTransactionArgs): Promise<SendTransactionResult>;

type WaitForTransactionArgs = {
    /** Chain id to use for provider */
    chainId?: number;
    /**
     * Number of blocks to wait for after transaction is mined
     * @default 1
     */
    confirmations?: number;
    /** Transaction hash to monitor */
    hash: Hash;
    /** Callback to invoke when the transaction has been sped up. */
    onSpeedUp?: (transaction: TransactionResponse) => void;
    timeout?: number;
};
type WaitForTransactionResult = providers.TransactionReceipt;
declare function waitForTransaction({ chainId, confirmations, hash, onSpeedUp, timeout, }: WaitForTransactionArgs): Promise<WaitForTransactionResult>;

type WatchPendingTransactionsResult = Transaction;
type WatchPendingTransactionsArgs = {
    chainId?: number;
};
type WatchPendingTransactionsCallback = (transaction: WatchPendingTransactionsResult) => void;
declare function watchPendingTransactions(args: WatchPendingTransactionsArgs, callback: WatchPendingTransactionsCallback): () => void;

type WriteContractMode = 'prepared' | 'recklesslyUnprepared';
type Request = PopulatedTransaction & {
    to: Address;
    gasLimit: NonNullable<PopulatedTransaction['gasLimit']>;
};
type WriteContractPreparedArgs<TAbi extends Abi | readonly unknown[], TFunctionName extends string> = {
    /**
     * `recklesslyUnprepared`: Allow to pass through unprepared config. Note: This has
     * [UX pitfalls](https://wagmi.sh/react/prepare-hooks#ux-pitfalls-without-prepare-hooks),
     * it is highly recommended to not use this and instead prepare the request upfront
     * using the {@link prepareWriteContract} function.
     *
     * `prepared`: The request has been prepared with parameters required for sending a transaction
     * via the {@link prepareWriteContract} function
     * */
    mode: 'prepared';
    /** Chain id to use for provider */
    chainId?: number;
    /** Request to submit transaction for */
    request: Request;
    /** Contract ABI */
    abi: Narrow<TAbi>;
    /** Contract address */
    address: Address;
    /** Function to invoke on the contract */
    functionName: GetFunctionName<TAbi, TFunctionName, 'nonpayable' | 'payable'>;
};
type WriteContractUnpreparedArgs<TAbi extends Abi | readonly unknown[], TFunctionName extends string> = {
    /**
     * `recklesslyUnprepared`: Allow to pass through unprepared config. Note: This has
     * [UX pitfalls](https://wagmi.sh/react/prepare-hooks#ux-pitfalls-without-prepare-hooks),
     * it is highly recommended to not use this and instead prepare the request upfront
     * using the {@link prepareWriteContract} function.
     *
     * `prepared`: The request has been prepared with parameters required for sending a transaction
     * via the {@link prepareWriteContract} function
     * */
    mode: 'recklesslyUnprepared';
    /** Chain id to use for provider */
    chainId?: number;
    /** Call overrides */
    overrides?: GetOverridesForAbiStateMutability<[
        TAbi,
        TFunctionName
    ] extends [
        infer TAbi_ extends Abi,
        infer TFunctionName_ extends string
    ] ? ExtractAbiFunction<TAbi_, TFunctionName_>['stateMutability'] : 'nonpayable' | 'payable'>;
    /** Contract ABI */
    abi: Narrow<TAbi>;
    /** Contract address */
    address: Address;
    /** Function to invoke on the contract */
    functionName: GetFunctionName<TAbi, TFunctionName, 'nonpayable' | 'payable'>;
} & GetArgs<TAbi, TFunctionName>;
type WriteContractArgs<TAbi extends Abi | readonly unknown[], TFunctionName extends string> = WriteContractPreparedArgs<TAbi, TFunctionName> | WriteContractUnpreparedArgs<TAbi, TFunctionName>;
type WriteContractResult = SendTransactionResult;
/**
 * @description Function to call a contract write method.
 *
 * It is recommended to pair this with the {@link prepareWriteContract} function
 * to avoid [UX pitfalls](https://wagmi.sh/react/prepare-hooks#ux-pitfalls-without-prepare-hooks).
 *
 * @example
 * import { prepareWriteContract, writeContract } from '@wagmi/core'
 *
 * const config = await prepareWriteContract({
 *   address: '0x...',
 *   abi: wagmiAbi,
 *   functionName: 'mint',
 * })
 * const result = await writeContract(config)
 */
declare function writeContract<TAbi extends Abi | readonly unknown[], TFunctionName extends string, TSigner extends Signer = Signer>(config: WriteContractUnpreparedArgs<TAbi, TFunctionName> | WriteContractPreparedArgs<TAbi, TFunctionName>): Promise<WriteContractResult>;

type FetchEnsAddressArgs = {
    /** Chain id to use for provider */
    chainId?: number;
    /** ENS name to resolve */
    name: string;
};
type FetchEnsAddressResult = Address | null;
declare function fetchEnsAddress({ chainId, name, }: FetchEnsAddressArgs): Promise<FetchEnsAddressResult>;

type FetchEnsAvatarArgs = {
    /** Address or ENS name */
    address: Address;
    /** Chain id to use for provider */
    chainId?: number;
};
type FetchEnsAvatarResult = string | null;
declare function fetchEnsAvatar({ address, chainId, }: FetchEnsAvatarArgs): Promise<FetchEnsAvatarResult>;

type FetchEnsNameArgs = {
    /** Address to lookup */
    address: Address;
    /** Chain id to use for provider */
    chainId?: number;
};
type FetchEnsNameResult = string | null;
declare function fetchEnsName({ address, chainId, }: FetchEnsNameArgs): Promise<FetchEnsNameResult>;

type FetchEnsResolverArgs = {
    /** Chain id to use for provider */
    chainId?: number;
    /** ENS name to resolve */
    name: string;
};
type FetchEnsResolverResult = providers.Resolver | null;
declare function fetchEnsResolver({ chainId, name, }: FetchEnsResolverArgs): Promise<FetchEnsResolverResult>;

type FetchBlockNumberArgs = {
    chainId?: number;
};
type FetchBlockNumberResult = number;
declare function fetchBlockNumber({ chainId, }?: FetchBlockNumberArgs): Promise<FetchBlockNumberResult>;

type FetchFeeDataArgs = {
    /** Units for formatting output */
    formatUnits?: Unit | number;
    /** Chain id to use for provider */
    chainId?: number;
};
type FetchFeeDataResult = providers.FeeData & {
    formatted: {
        gasPrice: string | null;
        maxFeePerGas: string | null;
        maxPriorityFeePerGas: string | null;
    };
};
declare function fetchFeeData({ chainId, formatUnits: units, }?: FetchFeeDataArgs): Promise<FetchFeeDataResult>;

type WatchBlockNumberArgs = {
    chainId?: number;
    listen: boolean;
};
type WatchBlockNumberCallback = (blockNumber: FetchBlockNumberResult) => void;
declare function watchBlockNumber(args: WatchBlockNumberArgs, callback: WatchBlockNumberCallback): () => void;

type GetProviderArgs = {
    /** Chain id to use for provider */
    chainId?: number;
};
type GetProviderResult<TProvider extends Provider = Provider> = TProvider;
declare function getProvider<TProvider extends Provider = Provider>({ chainId, }?: GetProviderArgs): GetProviderResult<TProvider>;

type GetWebSocketProviderArgs = {
    /** Chain id to use for provider */
    chainId?: number;
};
type GetWebSocketProviderResult<TWebSocketProvider extends WebSocketProvider = WebSocketProvider> = TWebSocketProvider | undefined;
declare function getWebSocketProvider<TWebSocketProvider extends WebSocketProvider = WebSocketProvider>({ chainId, }?: GetWebSocketProviderArgs): GetWebSocketProviderResult<TWebSocketProvider>;

type WatchProviderCallback<TProvider extends Provider = Provider> = (provider: GetProviderResult<TProvider>) => void;
declare function watchProvider<TProvider extends Provider = Provider>(args: GetProviderArgs, callback: WatchProviderCallback<TProvider>): () => void;

type WatchWebSocketProviderCallback<TWebSocketProvider extends WebSocketProvider = WebSocketProvider> = (webSocketProvider: GetWebSocketProviderResult<TWebSocketProvider>) => void;
declare function watchWebSocketProvider<TWebSocketProvider extends WebSocketProvider = WebSocketProvider>(args: GetWebSocketProviderArgs, callback: WatchWebSocketProviderCallback<TWebSocketProvider>): () => void;

/**
 * Error subclass implementing JSON RPC 2.0 errors and Ethereum RPC errors per EIP-1474.
 * @see https://eips.ethereum.org/EIPS/eip-1474
 */
declare class RpcError<T = undefined> extends Error {
    readonly cause: unknown;
    readonly code: number;
    readonly data?: T;
    constructor(
    /** Human-readable string */
    message: string, options: {
        cause?: unknown;
        /** Number error code */
        code: number;
        /** Other useful information about error */
        data?: T;
    });
}
/**
 * Error subclass implementing Ethereum Provider errors per EIP-1193.
 * @see https://eips.ethereum.org/EIPS/eip-1193
 */
declare class ProviderRpcError<T = undefined> extends RpcError<T> {
    /**
     * Create an Ethereum Provider JSON-RPC error.
     * `code` must be an integer in the 1000 <= 4999 range.
     */
    constructor(
    /** Human-readable string */
    message: string, options: {
        cause?: unknown;
        /**
         * Number error code
         * @see https://eips.ethereum.org/EIPS/eip-1193#error-standards
         */
        code: 4001 | 4100 | 4200 | 4900 | 4901 | 4902;
        /** Other useful information about error */
        data?: T;
    });
}
declare class AddChainError extends Error {
    name: string;
    message: string;
}
declare class ChainDoesNotSupportMulticallError extends Error {
    name: string;
    constructor({ blockNumber, chain }: {
        blockNumber?: number;
        chain: Chain;
    });
}
declare class ChainMismatchError extends Error {
    name: string;
    constructor({ activeChain, targetChain, }: {
        activeChain: string;
        targetChain: string;
    });
}
declare class ChainNotConfiguredError extends Error {
    name: string;
    constructor({ chainId, connectorId, }: {
        chainId: number;
        connectorId?: string;
    });
}
declare class ConnectorAlreadyConnectedError extends Error {
    name: string;
    message: string;
}
declare class ConnectorNotFoundError extends Error {
    name: string;
    message: string;
}
declare class ContractMethodDoesNotExistError extends Error {
    name: string;
    constructor({ address, chainId, functionName, }: {
        address: string;
        chainId?: number;
        functionName: string;
    });
}
declare class ContractMethodNoResultError extends Error {
    name: string;
    constructor({ address, args, chainId, functionName, }: {
        address: string;
        args: any;
        chainId: number;
        functionName: string;
    });
}
declare class ContractMethodRevertedError extends Error {
    name: string;
    constructor({ address, args, chainId, functionName, errorMessage, }: {
        address: string;
        args: any;
        chainId: number;
        functionName: string;
        errorMessage: string;
    });
}
declare class ContractResultDecodeError extends Error {
    name: string;
    constructor({ address, args, chainId, functionName, errorMessage, }: {
        address: string;
        args: any;
        chainId: number;
        functionName: string;
        errorMessage: string;
    });
}
declare class ProviderChainsNotFound extends Error {
    name: string;
    message: string;
}
declare class ResourceUnavailableError extends RpcError {
    name: string;
    constructor(cause: unknown);
}
declare class SwitchChainError extends ProviderRpcError {
    name: string;
    constructor(cause: unknown);
}
declare class SwitchChainNotSupportedError extends Error {
    name: string;
    constructor({ connector }: {
        connector: Connector;
    });
}
declare class UserRejectedRequestError extends ProviderRpcError {
    name: string;
    constructor(cause: unknown);
}

type ConfigureChainsConfig = {
    pollingInterval?: number;
    stallTimeout?: number;
} & ({
    targetQuorum?: number;
    minQuorum?: never;
} | {
    targetQuorum: number;
    minQuorum?: number;
});
declare function configureChains<TChain extends Chain = Chain, TProvider extends Provider = Provider, TWebSocketProvider extends WebSocketProvider = WebSocketProvider>(defaultChains: TChain[], providers: ChainProviderFn<TChain, TProvider, TWebSocketProvider>[], { minQuorum, pollingInterval, targetQuorum, stallTimeout, }?: ConfigureChainsConfig): {
    readonly chains: TChain[];
    readonly provider: ({ chainId }: {
        chainId?: number | undefined;
    }) => (ProviderWithFallbackConfig<TProvider> | providers.FallbackProvider) & {
        chains: TChain[];
        pollingInterval: number;
    };
    readonly webSocketProvider: ({ chainId }: {
        chainId?: number | undefined;
    }) => (TWebSocketProvider & {
        chains: TChain[];
    }) | undefined;
};

/** Forked from https://github.com/epoberezkin/fast-deep-equal */
declare function deepEqual(a: any, b: any): boolean;

declare function deserialize(cachedString: string): any;

declare function minimizeContractInterface<TAbi extends Abi | readonly unknown[]>(config: {
    abi: TAbi;
    functionName: TAbi extends Abi ? ExtractAbiFunctionNames<TAbi> : string;
}): string[] | (abitype_dist_abi_78346466.q | abitype_dist_abi_78346466.p | abitype_dist_abi_78346466.o)[];

declare function normalizeChainId(chainId: string | number | bigint): number;

declare function parseContractResult({ abi, data, functionName, }: {
    abi: ContractInterface | Abi | readonly unknown[];
    data: any;
    functionName: string;
}): any;

type StandardReplacer = (key: string, value: any) => any;
type CircularReplacer = (key: string, value: any, referenceKey: string) => any;
/**
 * @function stringify
 *
 * @description
 * stringifier that handles circular values
 * Forked from https://github.com/planttheidea/fast-stringify
 *
 * @param value to stringify
 * @param [replacer] a custom replacer function for handling standard values
 * @param [indent] the number of spaces to indent the output by
 * @param [circularReplacer] a custom replacer function for handling circular values
 * @returns the stringified output
 */
declare function serialize(value: any, replacer?: StandardReplacer | null | undefined, indent?: number | null | undefined, circularReplacer?: CircularReplacer | null | undefined): string;

export { AddChainError, ChainDoesNotSupportMulticallError, ChainMismatchError, ChainNotConfiguredError, Client, ClientConfig, ConfigureChainsConfig, ConnectArgs, ConnectResult, ConnectorAlreadyConnectedError, ConnectorNotFoundError, ContractMethodDoesNotExistError, ContractMethodNoResultError, ContractMethodRevertedError, ContractResultDecodeError, FetchBalanceArgs, FetchBalanceResult, FetchBlockNumberArgs, FetchBlockNumberResult, FetchEnsAddressArgs, FetchEnsAddressResult, FetchEnsAvatarArgs, FetchEnsAvatarResult, FetchEnsNameArgs, FetchEnsNameResult, FetchEnsResolverArgs, FetchEnsResolverResult, FetchFeeDataArgs, FetchFeeDataResult, FetchSignerArgs, FetchSignerResult, FetchTokenArgs, FetchTokenResult, FetchTransactionArgs, FetchTransactionResult, GetAccountResult, GetNetworkResult, GetProviderArgs, GetProviderResult, GetWebSocketProviderArgs, GetWebSocketProviderResult, MulticallConfig, MulticallResult, PrepareSendTransactionArgs, PrepareSendTransactionResult, PrepareWriteContractConfig, PrepareWriteContractResult, ProviderChainsNotFound, ProviderRpcError, ReadContractConfig, ReadContractResult, ReadContractsConfig, ReadContractsResult, ResourceUnavailableError, RpcError, SendTransactionArgs, SendTransactionPreparedRequest, SendTransactionResult, SendTransactionUnpreparedRequest, SignMessageArgs, SignMessageResult, SignTypedDataArgs, SignTypedDataResult, ClientStorage as Storage, SwitchChainError, SwitchChainNotSupportedError, SwitchNetworkArgs, SwitchNetworkResult, UserRejectedRequestError, WaitForTransactionArgs, WaitForTransactionResult, WatchAccountCallback, WatchBlockNumberArgs, WatchBlockNumberCallback, WatchContractEventCallback, WatchContractEventConfig, WatchMulticallCallback, WatchMulticallConfig, WatchNetworkCallback, WatchPendingTransactionsArgs, WatchPendingTransactionsCallback, WatchPendingTransactionsResult, WatchProviderCallback, WatchReadContractCallback, WatchReadContractConfig, WatchReadContractsCallback, WatchReadContractsConfig, WatchSignerCallback, WatchWebSocketProviderCallback, WriteContractArgs, WriteContractMode, WriteContractPreparedArgs, WriteContractResult, WriteContractUnpreparedArgs, configureChains, connect, createClient, createStorage, deepEqual, deserialize, disconnect, erc20ABI, erc4626ABI, erc721ABI, fetchBalance, fetchBlockNumber, fetchEnsAddress, fetchEnsAvatar, fetchEnsName, fetchEnsResolver, fetchFeeData, fetchSigner, fetchToken, fetchTransaction, getAccount, getClient, getNetwork, getProvider, getWebSocketProvider, minimizeContractInterface, multicall, noopStorage, normalizeChainId, parseContractResult, prepareSendTransaction, prepareWriteContract, readContract, readContracts, sendTransaction, serialize, signMessage, signTypedData, switchNetwork, waitForTransaction, watchAccount, watchBlockNumber, watchContractEvent, watchMulticall, watchNetwork, watchPendingTransactions, watchProvider, watchReadContract, watchReadContracts, watchSigner, watchWebSocketProvider, writeContract };
