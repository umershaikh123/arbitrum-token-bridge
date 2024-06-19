'use client'

import * as React from 'react'

import { Box, Toolbar, IconButton, Menu, Button, MenuItem } from '@mui/material'
import XIcon from '@mui/icons-material/X';
import ArticleIcon from '@mui/icons-material/Article';
import discordIcon from "@/icons/Discord.svg"
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import logo from '/public/images/nexus/nexusLogoUncompressed.svg'
import { usePathname } from 'next/navigation'
import { HeaderAccountPopover } from './HeaderAccountPopover'
import { Header } from './Header'
import { addNexusChain , addHoleskyChain } from '../../util/metamask'

import {  useNetworks } from '../../hooks/useNetworks'
import { useNetworksRelationship } from '../../hooks/useNetworksRelationship'
import { isNetwork  } from '../../util/networks'
interface ResponsiveAppBarProps {
  wallet: Boolean

  marginBelow: string
}

function ResponsiveAppBar({ wallet, marginBelow }: ResponsiveAppBarProps) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const [networks] = useNetworks()
  const { parentChain, childChain } = useNetworksRelationship(networks)
 
  
  
  const {
    isArbitrum: isConnectedToArbitrum,
    isOrbitChain: isConnectedToOrbitChain
  } = isNetwork(networks.sourceChain.id)
  const isParentChainEthereum = isNetwork(
    parentChain.id
  ).isEthereumMainnetOrTestnet

  return (
    <div className={`z-30 ${marginBelow}  flex justify-center`}>
      <nav
        className=" fixed   mx-auto w-full   border-b-2 border-gray-900 px-0 text-white    backdrop-blur-lg sm:px-8  md:max-w-[85vw]     "
        aria-labelledby="menu-button"
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' }
            }}
          >
            <Image
              src={logo}
              width={130}
              height={130}
              alt="web nexus logo"
              className="sm:mr-16"
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              color: 'white'
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* Mobile Links */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                mt: '1px',

                backdropFilter: 'blur(5px)',
                '& .MuiMenu-paper': {
                  backgroundColor: 'var(--mobile-menu-bg)',
                  borderRadius: '8px'
                }
              }}
            >
              <MenuItem
                sx={{
                  transition: 'background 0.3s ease-in-out'
                }}
              >
                <HeaderAccountPopover />
              </MenuItem>
              <Link href="/?destinationChain=nexus-orbit-chain&sourceChain=holesky">
                <MenuItem
                  sx={{
                    width: { sm: '80vw', xs: '90vw' },

                    color: 'white',
                    py: '8px',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '8px',

                    transition: 'background 0.3s ease-in-out',

                    ':hover': {
                      background: '#003F69'
                    }
                  }}
                >
                  Deposit
                </MenuItem>
              </Link>

              <Link href="/rollup">
                <MenuItem
                  sx={{
                    width: { sm: '80vw', xs: '90vw' },

                    color: 'white',
                    py: '8px',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '8px',

                    transition: 'background 0.3s ease-in-out',

                    ':hover': {
                      background: '#003F69'
                    }
                  }}
                >
                  Dashboard
                </MenuItem>
              </Link>

              <Link href="https://docs.nexusnetwork.live/" target="_blank">
                <MenuItem
                  sx={{
                    width: { sm: '80vw', xs: '90vw' },

                    color: 'white',
                    py: '8px',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '8px',

                    transition: 'background 0.3s ease-in-out',

                    ':hover': {
                      background: '#003F69'
                    }
                  }}
                >
                  Docs
                </MenuItem>
              </Link>

              <Link href="https://www.nexusnetwork.live/" target="_blank">
                <MenuItem
                  sx={{
                    width: { sm: '80vw', xs: '90vw' },

                    color: 'white',
                    py: '8px',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '8px',

                    transition: 'background 0.3s ease-in-out',

                    ':hover': {
                      background: '#003F69'
                    }
                  }}
                >
                  Website
                </MenuItem>
              </Link>

              <MenuItem
                  sx={{
                    width: { sm: '80vw', xs: '90vw' },

                    transition: 'background 0.3s ease-in-out',
 
                  }}
                >
                      <div className="flex  justify-center w-full    items-center   "> 


              {isParentChainEthereum && isConnectedToArbitrum  ||
      isConnectedToOrbitChain ? (
        <Button
        className="   rounded-lg    text-sm font-medium   border-2 hover:border-2       "
        onClick={addHoleskyChain}
        variant="outlined"
        sx={{ color : "#1377BB"}}
        title='add testnet holesky chain to your metamask'
        >
              Add Holesky Chain
            </Button>
        ) : (
          <Button
          className="   rounded-lg    text-sm font-medium   border-2 hover:border-2       "
          onClick={addNexusChain}
          variant="outlined"
          sx={{ color : "#1377BB"}}
          title='add testnet nexus network chain to your metamask'
          >
          Add Nexus Chain
        </Button>
        )
      }
      </div>
        </MenuItem>


        <MenuItem
                  sx={{
                    width: { sm: '80vw', xs: '90vw' },

                   
                  }}
                >
                   <div  className='text-white w-full flex justify-center items-center p-2 mt-1'>
 
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
       </MenuItem>
            </Menu>
          </Box>

          {/* Mobile menu end */}

          {/* web/mobile button and links */}

          <Box
            sx={{
              display: { xs: 'flex', md: 'none', flexGrow: 1, mr: 2 }
            }}
          >
            <Image
              src={logo}
              width={130}
              height={130}
              alt="mobile nexus logo"
              className=" -ml-12 "
            />
          </Box>

          {/* Web Links */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <button className="mx-5 my-2 block  font-normal  capitalize   transition-all  duration-300  ease-in-out  hover:text-[#1377BB]">
              <Link href="/?destinationChain=nexus-orbit-chain&sourceChain=holesky">
                Deposit
              </Link>
            </button>

            <button className="mx-5 my-2 block  font-normal  capitalize   transition-all  duration-300  ease-in-out  hover:text-[#1377BB]">
              <Link href="/rollup">Dashboard</Link>
            </button>

            <button className="mx-5 my-2 block  font-normal  capitalize   transition-all  duration-300  ease-in-out  hover:text-[#1377BB]">
              <Link href="https://docs.nexusnetwork.live/" target="_blank">
                Docs
              </Link>
            </button>

            <button className="mx-5 my-2 block  font-normal  capitalize   transition-all  duration-300  ease-in-out  hover:text-[#1377BB]">
              <Link href="https://www.nexusnetwork.live/" target="_blank">
                Website
              </Link>
            </button>
          </Box>

          {wallet && (
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <HeaderAccountPopover />
            </Box>
          )}
        </Toolbar>
      </nav>
    </div>
  )
}
export default ResponsiveAppBar
