import { InformationCircleIcon } from '@heroicons/react/24/outline'

import { GET_HELP_LINK } from '../../constants'
import { ExternalLink } from '../common/ExternalLink'
import metamaskLogo from '@/icons/MetamaskLogo.svg'
import Image from 'next/image'


function WalletConnectWarning() {
  return (
    <>
 
      <div className="flex w-full text-white flex-col items-center justify-center ">
  
                   
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
        <h1 className="mt-2 text-lg font-light ">
          connect your wallet to get started{' '}
        </h1>
        
    
      </div>
    </>
  )
}
export function AppConnectionFallbackContainer({
  children
}: {
  children?: React.ReactNode
}) {
  return (
    <div className="flex flex-col justify-center w-full    items-center pt-4 ">

{/* <div
                  className={` px-4  h-full   min-h-[20vh] w-full max-w-[25rem]  shadow-innerC shadow-[#005792]   flex-col   py-4   bg-gradient-to-t from-[#00243D]  to-[#001321]    border-8 border-[#18364c] rounded-2xl    border-double flex justify-center items-center  `}
                > */}
{/* <div
                  className={` px-4  h-full   min-h-[20vh] w-full max-w-[25rem]  shadow-innerC shadow-black    flex-col   py-4   bg-gradient-to-t from-[var(--box-shadow-from)]  to-[var(--box-shadow-to)]    border-8 border-[var(--box-shadow-border)] rounded-2xl    border-double flex justify-center items-center  `}
                > */}
      <WalletConnectWarning />
      {children}
      {/* </div> */}
    </div>
  )
}
