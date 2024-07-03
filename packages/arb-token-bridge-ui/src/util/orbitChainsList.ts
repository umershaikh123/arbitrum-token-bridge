import { constants } from '@arbitrum/sdk'
import { NativeCurrencyBase } from '../hooks/useNativeCurrency'
import { ChainWithRpcUrl } from './networks'

export type NetworkType =
  | 'Ethereum'
  | 'Rollup'
  | 'AnyTrust'
  | 'Ethereum Testnet'
  | 'Arbitrum Testnet'

export type BridgeUiConfig = {
  color: `#${string}`
  network: {
    name: string
    logo: string
    description?: string
  }
  nativeTokenData?: NativeCurrencyBase
}

type OrbitChainConfig = ChainWithRpcUrl & { bridgeUiConfig: BridgeUiConfig }

export const orbitMainnets: {
  [key: number]: OrbitChainConfig
} = {
  660279: {
    chainID: 660279,
    confirmPeriodBlocks: 45818,
    ethBridge: {
      bridge: '0x7dd8A76bdAeBE3BBBaCD7Aa87f1D4FDa1E60f94f',
      inbox: '0xaE21fDA3de92dE2FDAF606233b2863782Ba046F9',
      outbox: '0x1E400568AD4840dbE50FB32f306B842e9ddeF726',
      rollup: '0xC47DacFbAa80Bd9D8112F4e8069482c2A3221336',
      sequencerInbox: '0x995a9d3ca121D48d21087eDE20bc8acb2398c8B1'
    },
    nativeToken: '0x4Cb9a7AE498CEDcBb5EAe9f25736aE7d428C9D66',
    explorerUrl: 'https://explorer.xai-chain.net',
    rpcUrl: 'https://xai-chain.net/rpc',
    isArbitrum: true,
    isCustom: true,
    name: 'Xai',
    slug: 'xai',
    partnerChainID: 42161,
    partnerChainIDs: [],
    retryableLifetimeSeconds: 604800,
    tokenBridge: {
      l1CustomGateway: '0xb15A0826d65bE4c2fDd961b72636168ee70Af030',
      l1ERC20Gateway: '0xb591cE747CF19cF30e11d656EB94134F523A9e77',
      l1GatewayRouter: '0x22CCA5Dc96a4Ac1EC32c9c7C5ad4D66254a24C35',
      l1MultiCall: '0x90B02D9F861017844F30dFbdF725b6aa84E63822',
      l1ProxyAdmin: '0x041f85dd87c46b941dc9b15c6628b19ee5358485',
      l1Weth: '0x0000000000000000000000000000000000000000',
      l1WethGateway: '0x0000000000000000000000000000000000000000',
      l2CustomGateway: '0x96551194230725c72ACF8E9573B1382CCBC70635',
      l2ERC20Gateway: '0x0c71417917D24F4A6A6A55559B98c5cCEcb33F7a',
      l2GatewayRouter: '0xd096e8dE90D34de758B0E0bA4a796eA2e1e272cF',
      l2Multicall: '0xEEC168551A85911Ec3A905e0561b656979f3ea67',
      l2ProxyAdmin: '0x56800fDCFbE19Ea3EE9d115dAC30d95d6459c44E',
      l2Weth: '0x0000000000000000000000000000000000000000',
      l2WethGateway: '0x0000000000000000000000000000000000000000'
    },
    nitroGenesisBlock: 0,
    nitroGenesisL1Block: 0,
    depositTimeout: 1800000,
    blockTime: constants.ARB_MINIMUM_BLOCK_TIME_IN_SECONDS,
    bridgeUiConfig: {
      color: '#F30019',
      network: {
        name: 'Xai',
        logo: '/images/XaiLogo.svg',
        description:
          'A chain for Web2 and Web3 gamers to play blockchain games.'
      },
      nativeTokenData: {
        name: 'Xai',
        symbol: 'XAI',
        decimals: 18,
        logoUrl: '/images/XaiLogo.svg'
      }
    }
  },
  1380012617: {
    chainID: 1380012617,
    confirmPeriodBlocks: 45818,
    ethBridge: {
      bridge: '0x255f80Ef2F09FCE0944faBb292b8510F01316Cf0',
      inbox: '0x37e60F80d921dc5E7f501a7130F31f6548dBa564',
      outbox: '0x91591BB66075BCfF94AA128B003134165C3Ab83a',
      rollup: '0x2e988Ea0873C9d712628F0bf38DAFdE754927C89',
      sequencerInbox: '0xA436f1867adD490BF1530c636f2FB090758bB6B3'
    },
    explorerUrl: 'https://mainnet.explorer.rarichain.org',
    rpcUrl: 'https://mainnet.rpc.rarichain.org/http',
    isArbitrum: true,
    isCustom: true,
    name: 'RARI Mainnet',
    slug: 'rari-mainnet',
    partnerChainID: 42161,
    partnerChainIDs: [],
    retryableLifetimeSeconds: 604800,
    tokenBridge: {
      l1CustomGateway: '0x8bE956aB42274056ef4471BEb211b33e258b7324',
      l1ERC20Gateway: '0x46406c88285AD9BE2fB23D9aD96Cb578d824cAb6',
      l1GatewayRouter: '0x2623C144B4d167f70893f6A8968B98c89a6C5F97',
      l1MultiCall: '0x90B02D9F861017844F30dFbdF725b6aa84E63822',
      l1ProxyAdmin: '0x003e70b041abb993006c03e56c8515622a02928c',
      l1Weth: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      l1WethGateway: '0x8DF47DAe3313663C80f5E94A893190710A719224',
      l2CustomGateway: '0x90E43f5d772e50B01B3F9596f65AD5653467d010',
      l2ERC20Gateway: '0x0CA4c24079a191e08F659699292e5C75274EF253',
      l2GatewayRouter: '0x9a2859B2a83148b8DE25d26643B5407555D219E1',
      l2Multicall: '0x4c753F58Ee9E83B38170abAbBEa8B47976C7ee1b',
      l2ProxyAdmin: '0x18AB1fE7CBeB5F40d2eAf8A3906A966d59E79767',
      l2Weth: '0xf037540e51D71b2D2B1120e8432bA49F29EDFBD0',
      l2WethGateway: '0xd0C21F7960ea9835E7B2E636548f4deDD9E2309C'
    },
    nitroGenesisBlock: 0,
    nitroGenesisL1Block: 0,
    depositTimeout: 1800000,
    blockTime: constants.ARB_MINIMUM_BLOCK_TIME_IN_SECONDS,
    bridgeUiConfig: {
      color: '#B16EFF',
      network: {
        name: 'RARI Mainnet',
        description:
          'A chain designed specifically for NFT royalties and creator empowerment.',
        logo: '/images/RARIMainnetLogo.svg'
      }
    }
  },
  4078: {
    chainID: 4078,
    confirmPeriodBlocks: 7200,
    ethBridge: {
      bridge: '0xB0EC3C1368AF7d9C2CAE6B7f8E022Cc14d59D2b1',
      inbox: '0x18BB8310E3a3DF4EFcCb6B3E9AeCB8bE6d4af07f',
      outbox: '0xD17550876106645988051ffDd31dFc3cDaA29F9c',
      rollup: '0x73CA76d9B04661604fF950fB8DBc9f18F1B853f1',
      sequencerInbox: '0xfb27e42E964F3364630F76D62EB295ae792BD4FA'
    },
    explorerUrl: 'https://muster-explorer.alt.technology',
    rpcUrl: 'https://muster.alt.technology',
    isArbitrum: true,
    isCustom: true,
    name: 'Muster',
    slug: 'muster',
    partnerChainID: 42161,
    partnerChainIDs: [],
    retryableLifetimeSeconds: 604800,
    tokenBridge: {
      l1CustomGateway: '0x6085B32d97be137cC2D6447DcB3BF684C0835D2F',
      l1ERC20Gateway: '0x6551eF99126253B7a838Cf46340030C8eD5342c2',
      l1GatewayRouter: '0x5040981c42fD61219cc567e255129166A840938e',
      l1MultiCall: '0x90B02D9F861017844F30dFbdF725b6aa84E63822',
      l1ProxyAdmin: '0x37119EAcFBc1c83DDAf80F6705b6B19630C101C4',
      l1Weth: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      l1WethGateway: '0x5e833dd255e2aafFcfB32E874F5e2dFA17A109Ee',
      l2CustomGateway: '0x9FcC7aC2c40eFD0443D8B641e482F04310F113f6',
      l2ERC20Gateway: '0xFdEb5b89bb8FCA61BF77f205B9F89aC3C5fA5dB8',
      l2GatewayRouter: '0xDcF4964Dbb526e91CD6354ac3d1247Ce93C21fc4',
      l2Multicall: '0xaA6669a609862871ce72c91a93E70F1ef7590271',
      l2ProxyAdmin: '0xf10D50B24eDd74ECF3B6Bc22aE74b7F9843e0fDD',
      l2Weth: '0x869Bf8814d77106323745758135b999D34C79a87',
      l2WethGateway: '0xB6145BFd3fA9D270871037238003c66B984787f4'
    },
    nitroGenesisBlock: 0,
    nitroGenesisL1Block: 0,
    depositTimeout: 1800000,
    blockTime: constants.ARB_MINIMUM_BLOCK_TIME_IN_SECONDS,
    bridgeUiConfig: {
      color: '#DF62DD',
      network: {
        name: 'Muster Network',
        description: 'A gaming chain with cheap fees and account abstraction.',
        logo: '/images/MusterLogo.svg'
      }
    }
  },
  70700: {
    chainID: 70700,
    confirmPeriodBlocks: 40320,
    ethBridge: {
      bridge: '0x074fFD20C6D8865752C997f4980Cf70F2a3Fbac6',
      inbox: '0xC3874bE54E3f25BBC6B4fB582654fd9294f485a1',
      outbox: '0x0cD85675897B7020d7121e63AB250d3F47ff3Ff2',
      rollup: '0x65AD139061B3f6DDb16170a07b925337ddf42407',
      sequencerInbox: '0xa58F38102579dAE7C584850780dDA55744f67DF1'
    },
    explorerUrl: 'https://explorer.apex.proofofplay.com',
    rpcUrl: 'https://rpc.apex.proofofplay.com',
    isArbitrum: true,
    isCustom: true,
    name: 'Proof of Play Apex',
    slug: 'pop-apex',
    partnerChainID: 42161,
    partnerChainIDs: [],
    retryableLifetimeSeconds: 604800,
    tokenBridge: {
      l1CustomGateway: '0x653f8D34a86207569069164d45a031eE552A4729',
      l1ERC20Gateway: '0x298eb8d9f2F046AC60c01535fad40320CCdeB7c0',
      l1GatewayRouter: '0x2f883c5997Cf60B4d52a2fD4039918E1f9D1147c',
      l1MultiCall: '0x90B02D9F861017844F30dFbdF725b6aa84E63822',
      l1ProxyAdmin: '0xCC6f49cff395c4d160C61112522700dcB007c41d',
      l1Weth: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      l1WethGateway: '0xEB2Ae03709f63CEa9E5eC6ab25C1838c4A5634BA',
      l2CustomGateway: '0x1a4ba648Ddc0E726085A847178eBff204411EB1A',
      l2ERC20Gateway: '0x7aEdD5a2F3bBd4841711D017Edf90d611aD96a9e',
      l2GatewayRouter: '0x33e59640CD7E5C5E8D43fd46d995efDdDd0Fc930',
      l2Multicall: '0xEB4150a4F26Cf3563B3a86965E269C8873D48527',
      l2ProxyAdmin: '0x518e5FA773118b779a6231303f5593A10D3B3c84',
      l2Weth: '0x77684A04145a5924eFCE0D92A7c4a2A2E8C359de',
      l2WethGateway: '0x6e965dd667cb08f09DE8285317f012Ac889507b4'
    },
    nitroGenesisBlock: 0,
    nitroGenesisL1Block: 0,
    depositTimeout: 1800000,
    blockTime: constants.ARB_MINIMUM_BLOCK_TIME_IN_SECONDS,
    bridgeUiConfig: {
      color: '#3E63DD',
      network: {
        name: 'Proof of Play Apex',
        description:
          "Apex is the first chain in Proof of Play's Multichain, powering the popular Pirate Nation game.",
        logo: '/images/PopApexLogo.svg'
      }
    }
  },
  42001: {
    chainID: 42001,
    confirmPeriodBlocks: 7200,
    ethBridge: {
      bridge: '0x10B25719f4c0fA1BFF22431438E6b6315059548A',
      inbox: '0x1285D6cE3604D341b29ccfF300d043af1CDb57e3',
      outbox: '0x32005e1Ca72cDaAADc2BCFb5E37cc8B2bdb30c60',
      rollup: '0x5c6f7a6CC67F35d8d9A02521E69B80915DA13748',
      sequencerInbox: '0x58b38152Dc53Aab5F6c41f33AA543E224a7FF709'
    },
    nativeToken: '0xBC9B77acA82f6BE43927076D71cd453b625165B8',
    explorerUrl: 'https://explorer.pmon.xyz',
    rpcUrl: 'https://rpc.pmon.xyz',
    isArbitrum: true,
    isCustom: true,
    name: 'PMON Chain',
    slug: 'pmon-chain',
    partnerChainID: 42161,
    partnerChainIDs: [],
    retryableLifetimeSeconds: 604800,
    tokenBridge: {
      l1CustomGateway: '0x38727FfD8aFAdaeF60687D1E623Fd28B58A2B8a8',
      l1ERC20Gateway: '0x341F7f035f1CBA1E879Df40117f797F88aC703ea',
      l1GatewayRouter: '0xAE4BAD578fff3377FC5Ebfd4d52d3fdd7FAB3017',
      l1MultiCall: '0x90B02D9F861017844F30dFbdF725b6aa84E63822',
      l1ProxyAdmin: '0x50AD12758e5e6320d658B358C731AF6C7FE2b853',
      l1Weth: '0x0000000000000000000000000000000000000000',
      l1WethGateway: '0x0000000000000000000000000000000000000000',
      l2CustomGateway: '0xed609532adB4B24cd580d042A05ef15d914Bb7b0',
      l2ERC20Gateway: '0x8624C8046AA1E619528adA4Fa894E431b7CCE139',
      l2GatewayRouter: '0x1d55e424757817CBd27caD7169FE462d6703c57d',
      l2Multicall: '0xB019E8B9448138251a9C58af34FcCd276cE733f6',
      l2ProxyAdmin: '0x8699E41Ed6246708035f7B2E1bf194D9C6Fb7d32',
      l2Weth: '0x0000000000000000000000000000000000000000',
      l2WethGateway: '0x0000000000000000000000000000000000000000'
    },
    nitroGenesisBlock: 0,
    nitroGenesisL1Block: 0,
    depositTimeout: 1800000,
    blockTime: constants.ARB_MINIMUM_BLOCK_TIME_IN_SECONDS,
    bridgeUiConfig: {
      color: '#FF3369',
      network: {
        name: 'PMON Chain',
        description:
          'Bridge to PMON Chain for strategic, fully on-chain monster battles and start building your ultimate NFT collection.',
        logo: '/images/PolychainMonstersLogo.png'
      },
      nativeTokenData: {
        name: 'Polkamon',
        symbol: 'PMON',
        decimals: 18,
        logoUrl: '/images/PolychainMonstersLogo.png'
      }
    }
  }
}

export const orbitTestnets: { [key in number]: OrbitChainConfig } = {
  37714555429: {
    chainID: 37714555429,
    confirmPeriodBlocks: 150,
    ethBridge: {
      bridge: '0x6c7FAC4edC72E86B3388B48979eF37Ecca5027e6',
      inbox: '0x6396825803B720bc6A43c63caa1DcD7B31EB4dd0',
      outbox: '0xc7491a559b416540427f9f112C5c98b1412c5d51',
      rollup: '0xeedE9367Df91913ab149e828BDd6bE336df2c892',
      sequencerInbox: '0x529a2061A1973be80D315770bA9469F3Da40D938'
    },
    nativeToken: '0x4e6f41acbfa8eb4a3b25e151834d9a14b49b69d2',
    explorerUrl: 'https://testnet-explorer-v2.xai-chain.net',
    rpcUrl: 'https://testnet-v2.xai-chain.net/rpc',
    isArbitrum: true,
    isCustom: true,
    name: 'Xai Testnet',
    slug: 'xai-testnet',
    partnerChainID: 421614,
    partnerChainIDs: [],
    retryableLifetimeSeconds: 604800,
    tokenBridge: {
      l1CustomGateway: '0x04e14E04949D49ae9c551ca8Cc3192310Ce65D88',
      l1ERC20Gateway: '0xCcB451C4Df22addCFe1447c58bC6b2f264Bb1256',
      l1GatewayRouter: '0x185b868DBBF41554465fcb99C6FAb9383E15f47A',
      l1MultiCall: '0xA115146782b7143fAdB3065D86eACB54c169d092',
      l1ProxyAdmin: '0x022c515aEAb29aaFf82e86A10950cE14eA89C9c5',
      l1Weth: '0x0000000000000000000000000000000000000000',
      l1WethGateway: '0x0000000000000000000000000000000000000000',
      l2CustomGateway: '0xea1ce1CC75C948488515A3058E10aa82da40cE8F',
      l2ERC20Gateway: '0xD840761a09609394FaFA3404bEEAb312059AC558',
      l2GatewayRouter: '0x3B8ba769a43f34cdD67a20aF60d08D54C9C8f1AD',
      l2Multicall: '0x5CBd60Ae5Af80A42FA8b0F20ADF95A8879844984',
      l2ProxyAdmin: '0x7C1BA251d812fb34aF5C2566040C3C30585aFed9',
      l2Weth: '0x0000000000000000000000000000000000000000',
      l2WethGateway: '0x0000000000000000000000000000000000000000'
    },
    nitroGenesisBlock: 0,
    nitroGenesisL1Block: 0,
    depositTimeout: 1800000,
    blockTime: constants.ARB_MINIMUM_BLOCK_TIME_IN_SECONDS,
    bridgeUiConfig: {
      color: '#F30019',
      network: {
        name: 'Xai Testnet',
        logo: '/images/XaiLogo.svg',
        description: 'The testnet for Xai’s gaming chain.'
      },
      nativeTokenData: {
        name: 'Xai',
        symbol: 'sXAI',
        decimals: 18,
        logoUrl: '/images/XaiLogo.svg'
      }
    }
  },
  451451234: {
    chainID: 451451234,
    confirmPeriodBlocks: 20,
    ethBridge: {
      bridge: '0xcF23aE50D42664981697cE8eCdB3820198425326',
      inbox: '0x8Fa699394c59613b0fA2725BE8c4AD5cb863a7f0',
      outbox: '0xCc736d1A9C5F1c21C3209af7C7f9876B5C03F5B3',
      rollup: '0xFc70B21D8b10091e34E21901002cc6b739b57a46',
      sequencerInbox: '0x24DCda9d06BcDF14e83bC2a3d23d75c91B49Ab86',
    },
    nativeToken: '0x0000000000000000000000000000000000000000',
    explorerUrl: `${process.env.NEXT_PUBLIC_L3_EXPLORER}`,
    rpcUrl: `${process.env.NEXT_PUBLIC_L3_RPC}`,
    isArbitrum: true,
    isCustom: true,
    name: 'complere-chain',
    slug: 'complere',
    partnerChainID: 84532,
    partnerChainIDs: [84532],
    retryableLifetimeSeconds: 604800,
    tokenBridge: {
      l1CustomGateway: '0x67f1dCf32f22583C24501ffD9a6DC657eEc27e62',
      l1ERC20Gateway: '0x363631e85fC470bb9AB038cBe14082A1601Adf9f', // standard gatway
      l1GatewayRouter: '0xD345845633b37B9D4241F7b134c62143bDbd3bB8', // router
      l1MultiCall: '0xE0753Df74d86D6B25aCd2d049389c7E52e2dd728',
      l1ProxyAdmin: '0x977dC362E64598Bea0c792E23240d4ff02F3D64B', // adminProxy 
      l1Weth: '0x1BDD24840e119DC2602dCC587Dd182812427A5Cc',
      l1WethGateway: '0xaa9218236820025eBB217103Af7a813fc3e5284A',

      l2CustomGateway: '0x0fec5B021B8e47c0c2B8d6Bd937aDe4bd68512aa',
      l2ERC20Gateway: '0x7abe445952B009B264b29777a57554b4CF8B9906', // standard
      l2GatewayRouter: '0x85E3d52733154c1538c167f519914fC50ac15AAf',
      l2Multicall: '0x7bf784D7C7081489cDe0227F9EfCA83844fbC979',
      l2ProxyAdmin: '0x766b6d02DCED9193552a98448Fe612e85a9f7D5F',
      l2Weth: '0x5499fA9Fa221B08FAb23E08c6F80Ddd52074Da48',
      l2WethGateway: '0xf9367E751324274fE0eA54140dbD60811f1CACe6'
    },
    nitroGenesisBlock: 0,
    nitroGenesisL1Block: 0,
    depositTimeout: 1800000,
    blockTime: constants.ARB_MINIMUM_BLOCK_TIME_IN_SECONDS,
    bridgeUiConfig: {
      color: '#000000',
      network: {
        name: 'complere-chain',
        logo: '/images/ArbitrumLogo.svg',
        description: 'complere-chain'
      },
      nativeTokenData: {
        name: 'Ether',
        symbol: 'Eth',
        decimals: 18,
        logoUrl: '/images/ArbitrumLogo.svg'
      }
    }
  }
  ,
  13331370: {
    chainID: 13331370,
    confirmPeriodBlocks: 150,
    ethBridge: {
      bridge: '0x85deaBEa8c6b45ff1f21C128b1f6Ed971bC122b3',
      inbox: '0x4cA0aF77F59949E338bcd878B809E01d50B96D00',
      outbox: '0x411A39A8EEC80E63F29A98882aDF17Eb4636a490',
      rollup: '0x1f36f44a377C0D48706F0726608724d1E884D5c7',
      sequencerInbox: '0x2813f740FF6A6c09839951855CaDfA814129B6A9'
    },
    nativeToken: '0x4e6f41acbfa8eb4a3b25e151834d9a14b49b69d2',
    explorerUrl: `${process.env.NEXT_PUBLIC_NEXUS_ORBIT_EXPLORER_URL}`,
    rpcUrl: `${process.env.NEXT_PUBLIC_NEXUS_ORBIT_RPC_URL}`,
    isArbitrum: true,
    isCustom: true,
    name: 'Nexus Orbit Chain',
    slug: 'nexus-orbit',
    partnerChainID: 1,
    partnerChainIDs: [1],
    retryableLifetimeSeconds: 604800,
    tokenBridge: {
      l1CustomGateway: '0x2fB2f4438E58Adf2317A8E01D7A9147c35E8B17C',
      l1ERC20Gateway: '0xf124911E6FEbB02e306594176B95Eebab6a2DB07', // standard gatway
      l1GatewayRouter: '0x49256233ea0e7f335b0709BeE166d7A7833697f0',
      l1MultiCall: '0xF3cA368BeF5252476E84de2A835167c90262D3C1',
      l1ProxyAdmin: '0x1633e1BFb0F2f4A1A13Cde3B815C8009d54B070c', // only l2 given
      l1Weth: '0x9E2433a112E8011FCA089eD97941dCb1bE913e48',
      l1WethGateway: '0x223395709C1299457374B8b54e911039fb896c38',

      l2CustomGateway: '0xeD558B2d34be97df05b63DbA53F19C5aD64bEFbB',
      l2ERC20Gateway: '0x7fFf8201D972BDCD8A0567842253919360481BD7', // standard
      l2GatewayRouter: '0x5Ce08541F5D77753b10af23c6ac1e416792d6617',
      l2Multicall: '0x38Ba7826Ef36bC41A964cAc620af0D396B47b84a',
      l2ProxyAdmin: '0x872DF1b8Fe95652335d919bbD6716E972dE143A2',
      l2Weth: '0x50104764A914Aa3a080a42d0D2E6E19E26312A2F',
      l2WethGateway: '0xEB3dAf274301fbBD120151BdfD99404b616d8E9A'
    },
    nitroGenesisBlock: 0,
    nitroGenesisL1Block: 0,
    depositTimeout: 1800000,
    blockTime: constants.ARB_MINIMUM_BLOCK_TIME_IN_SECONDS,
    bridgeUiConfig: {
      color: '#000000',
      network: {
        name: 'Nexus orbit',
        logo: '/images/nexus/nexusLogoCompressed.svg',
        description: 'Nexus orbit'
      },
      nativeTokenData: {
        name: 'Ether',
        symbol: 'Eth',
        decimals: 18,
        logoUrl: '/images/EthereumLogo.svg'
      }
    }
  }
}

export const orbitChains = { ...orbitMainnets, ...orbitTestnets }

export function getOrbitChains(
  {
    mainnet,
    testnet
  }: {
    mainnet: boolean
    testnet: boolean
  } = { mainnet: true, testnet: true }
): OrbitChainConfig[] {
  const mainnetChains = mainnet ? Object.values(orbitMainnets) : []
  const testnetChains = testnet ? Object.values(orbitTestnets) : []

  return [...mainnetChains, ...testnetChains]
}
