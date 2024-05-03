
import { Chain } from "wagmi";
//  declare const holeskyChainType: {
//   readonly id: 17000;
//   readonly network: "holesky";
//   readonly name: "Holesky";
//   readonly nativeCurrency: {
//       readonly name: "Ether";
//       readonly symbol: "ETH";
//       readonly decimals: 18;
//   };
//   readonly rpcUrls: {

//       readonly default: {
//           readonly http: readonly ["https://ethereum-holesky-rpc.publicnode.com"];
//       };
//       readonly public: {
//           readonly http: readonly ["https://ethereum-holesky-rpc.publicnode.com"];
//       };
//   };
//   readonly blockExplorers: {
//       readonly etherscan: {
//           readonly name: "Etherscan";
//           readonly url: "https://holesky.etherscan.io/";
//       };
//       readonly default: {
//           readonly name: "Etherscan";
//           readonly url: "https://holesky.etherscan.io/";
//       };
//   };
//   readonly contracts: {
//       readonly multicall3: {
//           readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
//           readonly blockCreated: 1448852;
//       };
//   };
//   readonly testnet: true;
// };

//   declare const nexusOrbitChainType: {
//   readonly id: 13331370;
//   readonly network: "nexus-orbit";
//   readonly name: "NexusOrbit";
//   readonly nativeCurrency: {
//       readonly name: "Ether";
//       readonly symbol: "ETH";
//       readonly decimals: 18;
//   };
//   readonly rpcUrls: {

//       readonly default: {
//           readonly http: readonly ["http://54.151.152.20:8449"];
//       };
//       readonly public: {
//           readonly http: readonly ["http://54.151.152.20:8449"];
//       };
//   };
//   readonly blockExplorers: {

//       readonly default: {
//           readonly name: "Etherscan";
//           readonly url: "http://54.151.152.20:3000/";
//       };
//   };
//   readonly contracts: {
//       readonly multicall3: {
//           readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
//           readonly blockCreated: 15;
//       };
//   };
//   readonly testnet: true;
// };

export var holeskyChain:Chain = {
    id: 17000,
    network: "holesky",
    name: "Holesky",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      default: {
        http: ["https://ethereum-holesky-rpc.publicnode.com"]
      },
      public: {
        http: ["https://ethereum-holesky-rpc.publicnode.com"]
      }
    },
    blockExplorers: {
      etherscan: {
        name: "Etherscan",
        url: "https://holesky.etherscan.io/"
      },
      default: {
        name: "Etherscan",
        url: "https://holesky.etherscan.io/"
      }
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 1448852
      }
    },
    testnet: true
  };
  
  export var nexusOrbitChain:Chain = {
    id: 13331370,
    network: "nexus-orbit-chain",
    name: "Nexus Orbit Chain",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      default: {
        http: ["http://54.151.152.20:8449"],
        // ws : ["ws://54.151.152.20:8449"]
      },
      public: {
        http: ["http://54.151.152.20:8449"],
        // ws : ["ws://54.151.152.20:8449"]
      }
    },
    blockExplorers: {
      blockscout: {
        name: "blockscout",
        url: "http://54.151.152.20:3000/"
      },
      default: {
        name: "blockscout",
        url: "http://54.151.152.20:3000/"
      }
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 15
      }
    },
    testnet: true
  };