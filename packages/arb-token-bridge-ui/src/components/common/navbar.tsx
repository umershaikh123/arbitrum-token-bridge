"use client"

import * as React from "react"

import { Box, Toolbar, IconButton, Menu, Button, MenuItem } from "@mui/material"

import MenuIcon from "@mui/icons-material/Menu"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import logo from "/public/images/nexus/nexusLogoUncompressed.svg"
import { usePathname } from 'next/navigation'
 import { HeaderAccountPopover } from "./HeaderAccountPopover"

function ResponsiveAppBar() {
  const openCalendly = () => {
    window.open("https://calendly.com/mnkrj500/30min", "_blank")
    return false
  }

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

 
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

 
   
 

 

  return (
 
    <div className="flex justify-center    z-30 mb-24" >
 
            <nav
        className=" backdrop-blur-lg   border-b-2 border-gray-900   text-white sm:px-8 px-0 w-full    fixed mx-auto  md:max-w-[85vw]     "
        aria-labelledby="menu-button"
      
 
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
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
              display: { xs: "flex", md: "none" },
              color: "white",
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                mt: "1px",

                backdropFilter: "blur(5px)",
                "& .MuiMenu-paper": {
                  backgroundColor: "var(--mobile-menu-bg)",
                  borderRadius: "8px",
                },
              }}
            >
 

              <Link href="/?destinationChain=nexus-orbit-chain&sourceChain=holesky" >
              
                <MenuItem
                  sx={{
                    width: { sm: "80vw", xs: "90vw" },

                    color: "white",
                    py: "8px",
                    backdropFilter: "blur(5px)",
                    borderRadius: "8px",

                    transition: "background 0.3s ease-in-out",

                    ":hover": {
                      background: "var(--nav-link-hover)",
                    },
                  }}
                >
                  Deposit
                </MenuItem>
                </Link>
           
                  <Link href="/rollup" >
                <MenuItem
                  sx={{
                    width: { sm: "80vw", xs: "90vw" },

                    color: "white",
                    py: "8px",
                    backdropFilter: "blur(5px)",
                    borderRadius: "8px",

                    transition: "background 0.3s ease-in-out",

                    ":hover": {
                      background: "var(--nav-link-hover)",
                    },
                  }}
                >
                  Dashboard
                </MenuItem>
                </Link>
 

              <Link href="https://docs.nexusnetwork.live/" target="_blank">
                <MenuItem
                  sx={{
                    width: { sm: "80vw", xs: "90vw" },

                    color: "white",
                    py: "8px",
                    backdropFilter: "blur(5px)",
                    borderRadius: "8px",

                    transition: "background 0.3s ease-in-out",

                    ":hover": {
                      background: "var(--nav-link-hover)",
                    },
                  }}
                >
                  Docs
                </MenuItem>
              </Link>


              <Link href="https://www.nexusnetwork.live/" target="_blank">
                <MenuItem
                  sx={{
                    width: { sm: "80vw", xs: "90vw" },

                    color: "white",
                    py: "8px",
                    backdropFilter: "blur(5px)",
                    borderRadius: "8px",

                    transition: "background 0.3s ease-in-out",

                    ":hover": {
                      background: "var(--nav-link-hover)",
                    },
                  }}
                >
                  Website
                </MenuItem>
              </Link>
 
              
            </Menu>
          </Box>

          {/* Mobile menu end */}

          {/* web/mobile button and links */}

          <Box
            sx={{
              display: { xs: "flex", md: "none", flexGrow: 1, mr: 2 },
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
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <button className="my-2 mx-5 capitalize  font-normal  block   hover:text-[var(--nav-link-hover)]  duration-300  transition-all  ease-in-out">
            <Link href="/?destinationChain=nexus-orbit-chain&sourceChain=holesky"  >
                Deposit
             </Link>
            </button>

            <button className="my-2 mx-5 capitalize  font-normal  block   hover:text-[var(--nav-link-hover)]  duration-300  transition-all  ease-in-out">
            <Link href="/rollup"  >
                Dashboard
            </Link>
            </button>

            <button className="my-2 mx-5 capitalize  font-normal  block   hover:text-[var(--nav-link-hover)]  duration-300  transition-all  ease-in-out">
              <Link href="https://docs.nexusnetwork.live/" target="_blank">
                Docs
              </Link>
            </button>
 

            <button className="my-2 mx-5 capitalize  font-normal  block   hover:text-[var(--nav-link-hover)]  duration-300  transition-all  ease-in-out">
              <Link href="https://www.nexusnetwork.live/" target="_blank">
                Website
              </Link>
            </button>

          </Box>

          <Box>
            <HeaderAccountPopover />
          </Box>
 
        </Toolbar>
      </nav>
    </div>
  )
}
export default ResponsiveAppBar
