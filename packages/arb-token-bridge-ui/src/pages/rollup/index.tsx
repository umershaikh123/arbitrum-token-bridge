'use client'

import Image from 'next/image'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { HeaderAccountPopover } from '../../components/common/HeaderAccountPopover'
import { HeaderConnectWalletButton } from '../../components/common/HeaderConnectWalletButton'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Header } from '../../components/common/Header'
import { AssetTable } from '../../components/common/Assets'
import metaMaskLogo from '@/icons/MetamaskLogo.svg'
import * as Sentry from '@sentry/react'
import merge from 'lodash-es/merge'
import { useAccount, useNetwork, WagmiConfig } from 'wagmi'
import { Provider } from 'overmind-react'
import { createOvermind, Overmind } from 'overmind'

import { config as StateConfig } from '../../state'
import { ArbQueryParamProvider } from '../../hooks/useArbQueryParams'
import { getProps } from '../../util/wagmi/setup'
import { WelcomeDialog } from '../../components/App/WelcomeDialog'
import {
  darkTheme,
  lightTheme,
  RainbowKitProvider,
  Theme,
  useConnectModal
} from '@rainbow-me/rainbowkit'
const rainbowkitTheme = merge(lightTheme(), {
  colors: {
    accentColor: 'var(--blue-link)'
  },
  fonts: {
    body: 'Roboto, sans-serif'
  }
} as Theme)

export default function RollupDashboardPage() {
  const { address, isConnected, connector } = useAccount()
  const [overmind] = useState<Overmind<typeof StateConfig>>(
    createOvermind(StateConfig)
  )
  const { wagmiConfigProps, rainbowKitProviderProps } = getProps('sepolia')

  return (
    <Provider value={overmind}>
      <ArbQueryParamProvider>
        <WagmiConfig {...wagmiConfigProps}>
          <RainbowKitProvider
            theme={rainbowkitTheme}
            {...rainbowKitProviderProps}
          >
            <div className="    flex  min-h-[80vh]   w-full  flex-col justify-center  px-16 py-2">
              <>
                {/* <div className="flex "> */}
                <div className="mt-4 flex  flex-row items-center justify-around ">
                  <div className="  text-wrap h-full w-[20rem] rounded-2xl border-2 bg-blue-500  px-4 py-6 text-center text-xl font-semibold text-white">
                    <h1>52</h1>
                    <h1>Staking Earned Returns</h1>
                  </div>
                  <div className="  text-wrap h-full w-[20rem] rounded-2xl border-2 bg-blue-500  px-4 py-6 text-center text-xl font-semibold text-white">
                    <h1>1000</h1>
                    <h1>Total ETH bridged</h1>
                  </div>

                  <div className="  text-wrap h-full w-[20rem] rounded-2xl border-2 bg-blue-500  px-4 py-6 text-center text-xl font-semibold text-white">
                    <h1>52,000</h1>
                    <h1>transactions processed</h1>
                  </div>
                </div>

                <div className="mt-8 flex  flex-col space-y-4">
                  <h1 className="text-5xl  font-semibold text-black">
                    Bridging Assets
                  </h1>

                  <h1 className="text-md  font-medium text-gray-500">
                    ETH associated assets in native bridge
                  </h1>
                </div>

                <AssetTable />
              </>

              {/* {isConnected === false ? (
                <>
                  <div className="  mt-12 flex w-full flex-col items-center justify-center">
                    <h1 className="text-[2.5rem] font-black  ">Get Started</h1>
                    <h1 className="mt-4 text-lg font-light ">
                      connect your wallet to get started{' '}
                    </h1>
                    <div>
                      <Image
                        src={metaMaskLogo}
                        width={200}
                        height={200}
                        alt="metamask logo"
                        className=""
                      />
                    </div>
                    <div className="mt-2">
                      <HeaderConnectWalletButton />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className=" absolute right-5 top-5 ">
                    <HeaderAccountPopover />
                  </div>

                  {/* <div className="flex ">  
                  <div className="mt-4 flex  flex-row items-center justify-around ">
                    <div className="  text-wrap h-full w-[20rem] rounded-2xl border-2 bg-blue-500  px-4 py-6 text-center text-xl font-semibold text-white">
                      <h1>52</h1>
                      <h1>Staking Earned Returns</h1>
                    </div>
                    <div className="  text-wrap h-full w-[20rem] rounded-2xl border-2 bg-blue-500  px-4 py-6 text-center text-xl font-semibold text-white">
                      <h1>1000</h1>
                      <h1>Total ETH bridged</h1>
                    </div>

                    <div className="  text-wrap h-full w-[20rem] rounded-2xl border-2 bg-blue-500  px-4 py-6 text-center text-xl font-semibold text-white">
                      <h1>52,000</h1>
                      <h1>transactions processed</h1>
                    </div>
                  </div>

                  <div className="mt-8 flex  flex-col space-y-4">
                    <h1 className="text-5xl  font-semibold text-black">
                      Bridging Assets
                    </h1>

                    <h1 className="text-md  font-medium text-gray-500">
                      ETH associated assets in native bridge
                    </h1>
                  </div>

                  <AssetTable />
                </>
              )} */}
            </div>
          </RainbowKitProvider>
        </WagmiConfig>
      </ArbQueryParamProvider>
    </Provider>
  )
}
