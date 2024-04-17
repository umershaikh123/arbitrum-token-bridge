import React from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import ArbitrumLogoSmall from '@/images/ArbitrumLogo.svg'
import { useAccount } from 'wagmi'
import { isNetwork } from '../../util/networks'
import { useNetworks } from '../../hooks/useNetworks'
 
import { SidebarMenu } from '../Sidebar/SidebarMenu'
import { SidebarFooter } from '../Sidebar/SidebarFooter'
import warningIcon from '@/icons/Warning.svg'
function onMobileMenuOpen() {
  document.body.classList.add('overflow-hidden', 'menu-open')
}
function onMobileMenuClose() {
  document.body.classList.remove('overflow-hidden', 'menu-open')
}
 

export function Header({ children }: { children?: React.ReactNode }) {
  const [{ sourceChain }] = useNetworks()
  const { isTestnet } = isNetwork(sourceChain.id)
  const { address, isDisconnected, isConnected } = useAccount()

  return (
    <header
      className={twMerge(
        'sticky top-0 z-10 flex h-12 w-full justify-center bg-transparent px-4 backdrop-blur sm:relative sm:h-16 sm:px-6 sm:backdrop-blur-none [body.menu-open_&]:fixed'
      )}
    >
      <div className="flex w-full items-center justify-end gap-2 text-black">
        <Image
          className="mr-auto h-6 w-6 sm:hidden"
          src={ArbitrumLogoSmall}
          alt="Arbitrum"
        />
        {isTestnet && isConnected && (
          <>
            <div className="flex  grow items-center  space-x-1   font-medium">
              <Image src={warningIcon} alt="warning Icon" />
              <h1>TESTNET MODE</h1>
            </div>
          </>
        )}
        <div className="hidden sm:flex">{children}</div>
      </div>
      <AppMobileSidebar />
    </header>
  )
}
