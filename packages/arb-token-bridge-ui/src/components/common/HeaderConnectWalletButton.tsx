import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { twMerge } from 'tailwind-merge'

export function HeaderConnectWalletButton() {
  return (
    <ConnectButton.Custom>
      {({ openConnectModal }) => (
        <div className="w-full px-4 sm:px-0">
          <button
            onClick={openConnectModal}
            type="button"
            className={twMerge(
              ' rounded-xl bg-blue-500 px-4 py-2 text-base font-semibold text-white '
            )}
          >
            Connect Wallet
          </button>
        </div>
      )}
    </ConnectButton.Custom>
  )
}
