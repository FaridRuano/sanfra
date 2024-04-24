'use client'

import React, { useState } from 'react'
import SanfraLogo from '@public/icons/sanfrancisco.png'
import Image from 'next/image'
import { Database, Home  } from 'react-feather'
import { useRouter } from "next/navigation";

const AdminSideBar = () => {

  const router = useRouter()

  const [navActive, setNavActive] = useState('0')
  const [isActive, setActive] = useState(true)


  const activateNav = (menu, link) => {
    setNavActive(menu)
    setActive(true)
    router.push(link)
  }

  const classMenu = (menu) => {
      let clna = "menu-item "
      if(navActive === menu){
          clna = clna + "active"
      }
      return clna
  }
  
  return (
    <div className="sidebar-container">
        <div className="sidebar-warp">
            <div className="sidebar-logo-container">
                <Image src={SanfraLogo} height={50} width={'auto'} alt='SanFra' priority/>
                <p>
                    Data Analysis Intern System
                </p>
            </div>
            <div className="sidebar-menu-warp">
              <div className="sidebar-menu">
                <div className={classMenu(1)} onClick={()=>activateNav(1, '/admin/home')}>
                  <div className="menu-icon">
                    <Home/>
                  </div>
                  <span className='menu-name'>
                    Inicio
                  </span>
                </div>
                <div className={classMenu(2)} onClick={()=>activateNav(2, '/admin/colections')}>
                  <div className="menu-icon">
                    <Database/>
                  </div>
                  <span className='menu-name'>
                    Colecciones
                  </span>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AdminSideBar