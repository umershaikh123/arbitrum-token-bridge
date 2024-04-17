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

import {
  darkTheme,
  lightTheme,
  RainbowKitProvider,
  Theme,
  useConnectModal
} from '@rainbow-me/rainbowkit'

import { useNetworks } from '../../hooks/useNetworks'
import { useNetworksRelationship } from '../../hooks/useNetworksRelationship'
import { useAccountIsBlocked } from '../../hooks/useAccountIsBlocked'
import useLocalStorage from '@rehooks/local-storage'
import {
  ArbTokenBridgeStoreSyncWrapper,
  getWalletName
} from '../../components/App/App'
import { TOS_LOCALSTORAGE_KEY } from '../../constants'
import { ProviderName, trackEvent } from '../../util/AnalyticsUtils'
import { TokenListSyncer } from '../../components/syncers/TokenListSyncer'
import { BalanceUpdater } from '../../components/syncers/BalanceUpdater'
import { ArbTokenBridgeStoreSync } from '../../components/syncers/ArbTokenBridgeStoreSync'
const rainbowkitTheme = merge(lightTheme(), {
  colors: {
    accentColor: 'var(--blue-link)'
  },
  fonts: {
    body: 'Roboto, sans-serif'
  }
} as Theme)

export default function WithdrawPage() {
  const { address, isConnected, connector } = useAccount()
  const [overmind] = useState<Overmind<typeof StateConfig>>(
    createOvermind(StateConfig)
  )

  const { openConnectModal } = useConnectModal()

  useEffect(() => {
    if (!isConnected) {
      openConnectModal?.()
    }
  }, [isConnected, openConnectModal])

  const { wagmiConfigProps, rainbowKitProviderProps } = getProps('mainnet')

  return (
    <Provider value={overmind}>
      <ArbQueryParamProvider>
        <WagmiConfig {...wagmiConfigProps}>
          <RainbowKitProvider
            theme={rainbowkitTheme}
            {...rainbowKitProviderProps}
          >
            <div className="    flex  min-h-[80vh]   w-full  flex-col justify-center  p-16">
              <>
                <h1 className="text-xl">Withdraw Flow</h1>
              </>
            </div>
          </RainbowKitProvider>
        </WagmiConfig>
      </ArbQueryParamProvider>
    </Provider>
  )
}
