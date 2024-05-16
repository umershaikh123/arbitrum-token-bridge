import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AdminFallbackProxy, AdminFallbackProxyInterface } from "../AdminFallbackProxy";
type AdminFallbackProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AdminFallbackProxy__factory extends ContractFactory {
    constructor(...args: AdminFallbackProxyConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AdminFallbackProxy>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AdminFallbackProxy;
    connect(signer: Signer): AdminFallbackProxy__factory;
    static readonly contractName: "AdminFallbackProxy";
    readonly contractName: "AdminFallbackProxy";
    static readonly bytecode = "0x608060405234801561001057600080fd5b506101cf806100206000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610029565b6100f2565b565b6000600436101561006f5760405162461bcd60e51b815260206004820152600b60248201526a4e4f5f46554e435f53494760a81b60448201526064015b60405180910390fd5b60003361007a610116565b6001600160a01b0316141561009657610091610149565b61009e565b61009e610171565b90506001600160a01b0381163b6100ed5760405162461bcd60e51b815260206004820152601360248201527215105491d15517d393d517d0d3d395149050d5606a1b6044820152606401610066565b919050565b3660008037600080366000845af43d6000803e808015610111573d6000f35b3d6000fd5b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b546001600160a01b0316919050565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc61013a565b60007f2b1dbce74324248c222f0ec2d5ed7bd323cfc425b336f0253c5ccfda7265546d61013a56fea26469706673582212201903f8011eaea0afb60eecdae460623dc2140618a9a31302eb25eaa6bc8db0f964736f6c63430008090033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
    } | {
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        inputs?: undefined;
        name?: undefined;
    })[];
    static createInterface(): AdminFallbackProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AdminFallbackProxy;
}
export {};
