'use client'

import Image from "next/image"
import sfLogo from '@public/icons/sanfra-logo.png'
import navsIco from '@public/icons/nav-menus.png'
import { useState } from "react"
import { useRouter } from "next/navigation";

const Nav = () => {

    const router = useRouter()

    const [navActive, setNavActive] = useState('0')
    const [isActive, setActive] = useState(true)

    const activateNav = (menu, link) => {
        setNavActive(menu)
        setActive(true)
        router.push(link)
    }

    const classMenu = (menu) => {
        let clna = "underline pointer "
        if(navActive === menu){
            clna = clna + "active"
        }
        return clna
    }
  return (
    <nav className="nav-div">
        <div className="nav-warp row">
            <div className="nav-one">
                <div className="sf-logo-div">
                    <Image className="sf-logo pointer" src={sfLogo} width={67} height={35} alt="San Francisco" onClick={()=>activateNav(0, '/')}/>
                </div>
                <div className={isActive ? "nav-menu" : "nav-menu hidden"}>
                    <span className={classMenu(1)} onClick={()=>activateNav(1, '/nosotros')}>
                        Nosotros
                    </span>
                    <span className={classMenu(2)} onClick={()=>{activateNav(2, '/productos')
                        localStorage.setItem("activeMenu", '1')
                    }}>
                        Productos
                    </span>
                    <span className={classMenu(3)} onClick={()=>activateNav(3, '/servicios')}>
                        Servicios
                    </span>
                    <span className={classMenu(4)} onClick={()=>activateNav(4, '/encuentranos')}>
                        Encuéntranos
                    </span>
                    <span className={classMenu(5)} onClick={()=>activateNav(5, '/contactanos')}>
                        Contáctanos
                    </span>
                </div>       
                <Image className={isActive?"navs-ico pointer":"navs-ico pointer closed"} src={navsIco} width={21} height={39} alt="Menú" onClick={()=>setActive(!isActive)}/>
            </div>
            <div className="nav-sanfra-warp">
                <span className="underline pointer" onClick={()=>activateNav(0, '/login')}>
                    SANFRA WEB
                </span>
                <div className="nav-onHover">
                    <div className="onHover-warp">
                        <a href="https://sanfraweb.csf.ec/Identity/Account/Login" target="_blank">
                            <div className="onhover-option">
                                <span>
                                        Personas
                                </span>
                            </div>
                        </a>
                        <a href="https://sanfraempresas.csf.ec" target="_blank">
                            <div className="onhover-option">
                                <span>
                                    Empresas
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>        
    </nav>
  )
}

export default Nav