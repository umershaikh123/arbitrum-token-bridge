import { BigNumber, Wallet, constants, utils } from 'ethers'
import { defineConfig } from 'cypress'
import { StaticJsonRpcProvider } from '@ethersproject/providers'
import synpressPlugins from '@synthetixio/synpress/plugins'
import { TestWETH9__factory } from '@arbitrum/sdk/dist/lib/abi/factories/TestWETH9__factory'
import { TestERC20__factory } from '@arbitrum/sdk/dist/lib/abi/factories/TestERC20__factory'
import { Erc20Bridger } from '@arbitrum/sdk'
import { getL2ERC20Address } from './src/util/TokenUtils'
import { MULTICALL_TESTNET_ADDRESS } from './src/constants'
import specFiles from './tests/e2e/specfiles.json'

import {
  NetworkName,
  l1WethGateway,
  wethTokenAddressL1,
  wethTokenAddressL2,
  getInitialERC20Balance
} from './tests/support/common'

import { registerLocalNetwork } from './src/util/networks'
import { CommonAddress } from './src/util/CommonAddressUtils'
import { ERC20__factory } from '@arbitrum/sdk/dist/lib/abi/factories/ERC20__factory'

const tests = process.env.TEST_FILE
  ? [process.env.TEST_FILE]
  : specFiles.map(file => file.file)

export default defineConfig({
  userAgent: 'synpress',
  retries: 2,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  video: false,
  screenshotOnRunFailure: true,
  chromeWebSecurity: true,
  modifyObstructiveCode: false,
  scrollBehavior: false,
  viewportWidth: 1366,
  viewportHeight: 850,
  env: {
    coverage: false
  },
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  requestTimeout: 30000,
  e2e: {
    // @ts-ignore
    async setupNodeEvents(on, config) {
      registerLocalNetwork()

      if (!ethRpcUrl) {
        throw new Error('NEXT_PUBLIC_LOCAL_ETHEREUM_RPC_URL variable missing.')
      }
      if (!arbRpcUrl) {
        throw new Error('NEXT_PUBLIC_LOCAL_ARBITRUM_RPC_URL variable missing.')
      }
      if (!goerliRpcUrl) {
        throw new Error(
          'process.env.NEXT_PUBLIC_GOERLI_RPC_URL variable missing.'
        )
      }

      const userWalletAddress = await userWallet.getAddress()

      // Fund the userWallet with USDC.

      await Promise.all([fundUserUsdc('L1'), fundUserUsdc('L2')])

      // Deploy ERC-20 token to L1
      const l1ERC20Token = await deployERC20ToL1()

      // Deploy ERC-20 token to L2
      await deployERC20ToL2(l1ERC20Token.address)

      // Mint ERC-20 token
      // We need this to test token approval
      // WETH is pre-approved so we need a new token
      const mintedL1Erc20Token = await l1ERC20Token.mint()
      await mintedL1Erc20Token.wait()

      // Send minted ERC-20 to the test userWallet
      await l1ERC20Token
        .connect(localWallet.connect(ethProvider))
        .transfer(userWalletAddress, BigNumber.from(50000000))

      // Fund the userWallet. We do this to run tests on a small amount of ETH.
      await Promise.all([fundUserWalletEth('L1'), fundUserWalletEth('L2')])

      // Wrap ETH to test ERC-20 transactions
      await Promise.all([wrapEth('L1'), wrapEth('L2')])

      // Approve WETH
      await approveWeth()

      // Set Cypress variables
      config.env.ETH_RPC_URL = ethRpcUrl
      config.env.ARB_RPC_URL = arbRpcUrl
      config.env.ETH_GOERLI_RPC_URL = goerliRpcUrl
      config.env.ARB_GOERLI_RPC_URL =
        'https://arb-goerli.g.alchemy.com/v2/YYCNZzRm6nq-HhkNi9i7cUkPaVBRF4AM'
      config.env.ADDRESS = userWalletAddress
      config.env.PRIVATE_KEY = userWallet.privateKey
      config.env.INFURA_KEY = process.env.NEXT_PUBLIC_INFURA_KEY
      config.env.ERC20_TOKEN_ADDRESS_L1 = l1ERC20Token.address

      config.env.ERC20_TOKEN_ADDRESS_L2 = await getL2ERC20Address({
        erc20L1Address: l1ERC20Token.address,
        l1Provider: ethProvider,
        l2Provider: arbProvider
      })

      synpressPlugins(on, config)
      setupCypressTasks(on)
      return config
    },
    baseUrl: 'http://localhost:3000',
    specPattern: tests,
    supportFile: 'tests/support/index.ts'
  }
})

const ethRpcUrl = process.env.NEXT_PUBLIC_LOCAL_ETHEREUM_RPC_URL
const arbRpcUrl = process.env.NEXT_PUBLIC_LOCAL_ARBITRUM_RPC_URL
const goerliRpcUrl = process.env.NEXT_PUBLIC_GOERLI_RPC_URL
const arbGoerliRpcUrl = 'https://api.zan.top/node/v1/arb/goerli/public'

const ethProvider = new StaticJsonRpcProvider(ethRpcUrl)
const arbProvider = new StaticJsonRpcProvider(arbRpcUrl)
const goerliProvider = new StaticJsonRpcProvider(goerliRpcUrl)
const arbGoerliProvider = new StaticJsonRpcProvider(arbGoerliRpcUrl)

if (!process.env.PRIVATE_KEY_CUSTOM) {
  throw new Error('PRIVATE_KEY_CUSTOM variable missing.')
}
if (!process.env.PRIVATE_KEY_USER) {
  throw new Error('PRIVATE_KEY_USER variable missing.')
}

const localWallet = new Wallet(process.env.PRIVATE_KEY_CUSTOM)
const userWallet = new Wallet(process.env.PRIVATE_KEY_USER)

async function deployERC20ToL1() {
  console.log('Deploying ERC20 to L1...')
  const contract = new TestERC20__factory().connect(
    localWallet.connect(ethProvider)
  )
  const token = await contract.deploy()
  await token.deployed()

  return token
}

async function deployERC20ToL2(erc20L1Address: string) {
  console.log('Deploying ERC20 to L2...')
  const bridger = await Erc20Bridger.fromProvider(arbProvider)
  const deploy = await bridger.deposit({
    amount: BigNumber.from(0),
    erc20L1Address,
    l1Signer: localWallet.connect(ethProvider),
    l2Provider: arbProvider
  })
  await deploy.wait()
}

async function fundUserWalletEth(networkType: 'L1' | 'L2') {
  console.log(`Funding ETH to user wallet: ${networkType}...`)
  const address = await userWallet.getAddress()
  const provider = networkType === 'L1' ? ethProvider : arbProvider
  const balance = await provider.getBalance(address)
  // Fund only if the balance is less than 2 eth
  if (balance.lt(utils.parseEther('2'))) {
    const tx = await localWallet.connect(provider).sendTransaction({
      to: address,
      value: utils.parseEther('2')
    })
    await tx.wait()
  }
}

async function fundUserUsdc(networkType: 'L1' | 'L2') {
  console.log(`Funding USDC to user wallet: ${networkType}...`)
  const address = await userWallet.getAddress()
  const usdcContractAddress =
    networkType === 'L1'
      ? CommonAddress.Goerli.USDC
      : CommonAddress.ArbitrumGoerli.USDC

  const usdcBalance = await getInitialERC20Balance({
    address,
    rpcURL: networkType === 'L1' ? goerliRpcUrl! : arbGoerliRpcUrl!,
    tokenAddress: usdcContractAddress,
    multiCallerAddress: MULTICALL_TESTNET_ADDRESS
  })

  // Fund only if the balance is less than 0.5 USDC
  if (usdcBalance.lt(utils.parseUnits('0.5', 6))) {
    console.log('Adding USDC to user wallet...')
    const provider = networkType === 'L1' ? goerliProvider : arbGoerliProvider
    const contract = new ERC20__factory().connect(localWallet.connect(provider))
    const token = contract.attach(usdcContractAddress)
    await token.deployed()
    const tx = await token.transfer(address, utils.parseUnits('1', 6))
    await tx.wait()
  }
}

function getWethContract(
  provider: StaticJsonRpcProvider,
  tokenAddress: string
) {
  return TestWETH9__factory.connect(tokenAddress, userWallet.connect(provider))
}

async function wrapEth(networkType: 'L1' | 'L2') {
  console.log(`Wrapping ETH: ${networkType}...`)
  const amount = networkType === 'L1' ? '0.2' : '0.1'
  const address = networkType === 'L1' ? wethTokenAddressL1 : wethTokenAddressL2
  const provider = networkType === 'L1' ? ethProvider : arbProvider
  const tx = await getWethContract(provider, address).deposit({
    value: utils.parseEther(amount)
  })
  await tx.wait()
}

async function approveWeth() {
  console.log('Approving WETH...')
  const tx = await getWethContract(ethProvider, wethTokenAddressL1).approve(
    // L1 WETH gateway
    l1WethGateway,
    constants.MaxInt256
  )
  await tx.wait()
}

function setupCypressTasks(on: Cypress.PluginEvents) {
  let currentNetworkName: NetworkName | null = null
  let networkSetupComplete = false
  let walletConnectedToDapp = false

  on('task', {
    setCurrentNetworkName: (networkName: NetworkName) => {
      currentNetworkName = networkName
      return null
    },
    getCurrentNetworkName: () => {
      return currentNetworkName
    },
    setNetworkSetupComplete: () => {
      networkSetupComplete = true
      return null
    },
    getNetworkSetupComplete: () => {
      return networkSetupComplete
    },
    setWalletConnectedToDapp: () => {
      walletConnectedToDapp = true
      return null
    },
    getWalletConnectedToDapp: () => {
      return walletConnectedToDapp
    }
  })
}
