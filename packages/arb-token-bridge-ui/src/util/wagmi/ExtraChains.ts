
import { Chain } from "wagmi";
 

export var holeskyChain:Chain = {
    id: 17000,
    network: "holesky",
    name: "holesky",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      default: {
        http: ["https://holesky.infura.io/v3/fffc0af392524e46b05ebe5666152690"]
      },
      public: {
        http: ["https://holesky.infura.io/v3/fffc0af392524e46b05ebe5666152690"]
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
        http: ["https://rpc.nexusnetwork.co.in"],
        // ws : ["ws://54.151.152.20:8449"]
      },
      public: {
        http: ["https://rpc.nexusnetwork.co.in"],
        // ws : ["ws://54.151.152.20:8449"]
      }
    },
    blockExplorers: {
      blockscout: {
        name: "blockscout",
        url: "https://explorer.nexusnetwork.co.in/"
      },
      default: {
        name: "blockscout",
        url: "https://explorer.nexusnetwork.co.in/"
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