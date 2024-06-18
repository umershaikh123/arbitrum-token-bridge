import React from 'react'
import Link from 'next/link'
import XIcon from '@mui/icons-material/X';
import ArticleIcon from '@mui/icons-material/Article';
import discordIcon from "@/icons/Discord.svg"
import Image from 'next/image';
export const Footer = () => {
  return (
    <div  className='text-white w-full flex justify-center items-center p-2 mt-1'>

        <div className='flex sm:flex-row flex-col justify-between items-center     w-1/2 max-w-[600px]'>

            <div>
            © 2024 Nexus Network, Inc.
            </div>

            <div className='flex justify-between  items-center space-x-5 '>
            <Link
                href={"https://twitter.com/NexusNetwork_0x"}
                target="_blank"
                className="sm:text-lg text-sm mb-2 hover:scale-110 duration-300  transition-all  ease-in-out"
                  title='Twitter'
              >
                <XIcon/>
              </Link>
              <Link
                href={
                  "https://nexusnetwork0x.substack.com/"
                }
                target="_blank"
                className="sm:text-lg text-sm mb-2 hover:scale-110 duration-300  transition-all  ease-in-out"
                title='Nexus Blog'
              >
                <ArticleIcon/>
              </Link>
 

              <Link
                href={
                  "https://discord.gg/kubuD7Mvf7"
                }
                target="_blank"
                className="sm:text-lg text-sm mb-2 hover:scale-110   duration-300  transition-all  ease-in-out"
                 title='Discord Server'
              >
             <Image src={discordIcon} width={30} height={30} alt='discord icon' className='' />
              </Link>

       </div>
        </div>
        
        
        </div>
  )
}
