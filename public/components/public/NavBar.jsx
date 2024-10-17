'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import NavLogo from '@public/assets/icons/logo-navbar.webp'
import NavMenu from '@public/assets/icons/menu-navbar.webp'
import NavClose from '@public/assets/icons/close-navbar.webp'
import { useRouter } from 'next/navigation'

const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    })
  
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
  
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    }, [])
  
    return windowSize
}

const NavBar = () => {

    const router = useRouter()

    const size = useWindowSize()

    const [isMenu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(current => !current)
    }

    if(size.width === undefined){
        return(
            <>

            </>
        )
    }

    if(size.width > 900) {
        return (
            <nav className='public-navbar'>
                <div className="nav-logo cp-hs" onClick={()=>router.push('/')}>
                    <Image src={NavLogo} width={79} height={'auto'} alt='Sanfra'/>
                </div>
                <div className="nav-links">
                    <span>Nosotros</span>
                    <span>Productos & Servicios</span>
                    <span>Novedades</span>
                </div>
                <div className="nav-options">
                    <span>Únete hoy</span>
                    <div className='sbtn pr-gr cp-hs'>
                        Acceder
                    </div>
                </div>
            </nav>
          )
    }else{
        return (
            <nav className={isMenu ? 'public-navbar-mobile show':'public-navbar-mobile'}>
                <div className="abtn cp-hs" onClick={() => handleMenu()}>
                    {
                        isMenu ? (
                            <Image src={NavClose} width={26} height={'auto'} alt='Close Menu' id='close-menu'/>
                        ):(
                            <Image src={NavMenu} width={26} height={'auto'} alt='Menu'/>
                        )
                    }
                </div>
                <div className="nav-logo cp-hs">
                    <Image src={NavLogo} width={79} height={'auto'} alt='Sanfra'/>
                </div>
                <div className="sep-line"/>
                <div className="nav-links">
                    <span>Nosotros</span>
                    <span>Productos & Servicios</span>
                    <span>Novedades</span>
                </div>
                <div className="sep-line"/>
                <div className="nav-options">
                    <span>Únete hoy</span>
                    <div className='sbtn pr-gr cp-hs'>
                        Acceder
                    </div>
                </div>
            </nav>
          )
    }
}

export default NavBar