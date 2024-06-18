import { InformationCircleIcon } from '@heroicons/react/24/outline'

import { GET_HELP_LINK } from '../../constants'
import { ExternalLink } from '../common/ExternalLink'
import metamaskLogo from '@/icons/MetamaskLogo.svg'
import Image from 'next/image'


function WalletConnectWarning() {
  return (
    <>
      <div className="mt-8  flex w-full text-white flex-col items-center justify-center">
        <h1 className="text-[2.5rem] font-black  ">Get Started</h1>

        <div>
          <Image
            src={metamaskLogo}
            width={200}
            height={200}
            alt="metamask logo"
            className=" "
          />
        </div>
        <h1 className="mt-4 text-lg font-light ">
          connect your wallet to get started{' '}
        </h1>
      </div>
    </>
  )
}
export function AppConnectionFallbackContainer({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col pt-4">
      <WalletConnectWarning />
    </div>
  )
}
