"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClonableBeaconProxy__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "AdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address",
            },
        ],
        name: "BeaconUpgraded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        stateMutability: "payable",
        type: "fallback",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50336001600160a01b03166359659e906040518163ffffffff1660e01b8152600401602060405180830381865afa15801561004f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610073919061046c565b604051806020016040528060008152506100958282600061009c60201b60201c565b5050610508565b6100a583610167565b6040516001600160a01b038416907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e90600090a26000825111806100e65750805b1561016257610160836001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561012c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610150919061046c565b8361030a60201b6100291760201c565b505b505050565b61017a8161033660201b6100551760201c565b6101d95760405162461bcd60e51b815260206004820152602560248201527f455243313936373a206e657720626561636f6e206973206e6f74206120636f6e6044820152641d1c9858dd60da1b60648201526084015b60405180910390fd5b61024d816001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561021a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061023e919061046c565b61033660201b6100551760201c565b6102b25760405162461bcd60e51b815260206004820152603060248201527f455243313936373a20626561636f6e20696d706c656d656e746174696f6e206960448201526f1cc81b9bdd08184818dbdb9d1c9858dd60821b60648201526084016101d0565b806102e97fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5060001b61034560201b6100641760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b606061032f838360405180606001604052806027815260200161085a60279139610348565b9392505050565b6001600160a01b03163b151590565b90565b6060600080856001600160a01b03168560405161036591906104b9565b600060405180830381855af49150503d80600081146103a0576040519150601f19603f3d011682016040523d82523d6000602084013e6103a5565b606091505b5090925090506103b7868383876103c1565b9695505050505050565b60608315610430578251600003610429576001600160a01b0385163b6104295760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101d0565b508161043a565b61043a8383610442565b949350505050565b8151156104525781518083602001fd5b8060405162461bcd60e51b81526004016101d091906104d5565b60006020828403121561047e57600080fd5b81516001600160a01b038116811461032f57600080fd5b60005b838110156104b0578181015183820152602001610498565b50506000910152565b600082516104cb818460208701610495565b9190910192915050565b60208152600082518060208401526104f4816040850160208701610495565b601f01601f19169190910160400192915050565b610343806105176000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610067565b610100565b565b606061004e83836040518060600160405280602781526020016102e760279139610124565b9392505050565b6001600160a01b03163b151590565b90565b600061009a7fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50546001600160a01b031690565b6001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100fb919061024a565b905090565b3660008037600080366000845af43d6000803e80801561011f573d6000f35b3d6000fd5b6060600080856001600160a01b0316856040516101419190610297565b600060405180830381855af49150503d806000811461017c576040519150601f19603f3d011682016040523d82523d6000602084013e610181565b606091505b50915091506101928683838761019c565b9695505050505050565b6060831561020e578251600003610207576101b685610055565b6102075760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b5081610218565b6102188383610220565b949350505050565b8151156102305781518083602001fd5b8060405162461bcd60e51b81526004016101fe91906102b3565b60006020828403121561025c57600080fd5b81516001600160a01b038116811461004e57600080fd5b60005b8381101561028e578181015183820152602001610276565b50506000910152565b600082516102a9818460208701610273565b9190910192915050565b60208152600082518060208401526102d2816040850160208701610273565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220e9bed491ce4cc7495def60dc616a13f39ccd912637e0c8ba02d45400506de9c064736f6c63430008100033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";
const isSuperArgs = (xs) => xs.length > 1;
class ClonableBeaconProxy__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "ClonableBeaconProxy";
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ClonableBeaconProxy__factory = ClonableBeaconProxy__factory;
ClonableBeaconProxy__factory.bytecode = _bytecode;
ClonableBeaconProxy__factory.abi = _abi;
