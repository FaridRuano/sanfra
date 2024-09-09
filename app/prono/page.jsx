'use client'
import React, { useEffect, useState } from 'react'
import Menu from "@public/icons/prono/menu-icon.png"
import Prono from "@public/icons/prono/prono-logo.png"
import User from "@public/icons/prono/user-icon.png"
import LigaPro from "@public/icons/prono/logos/ligapro.png"
import Liga from "@public/icons/prono/logos/ligaquito.png"
import Indep from "@public/icons/prono/logos/indep.png"




import Image from 'next/image'

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

const NavBar = ({isLogged, setLogged}) => {

    /* Window */

    const size = useWindowSize()

    if(size.width > 1000){
        return (
            <>
                <nav className='navbar'>
                    <div className="nav-warp">
                        <div className="nav-item">
                            <Image src={Menu} width={35} height={'auto'} alt='Menu'/>
                        </div>
                        <div className="nav-item">
                            <Image src={Prono} width={'auto'} height={50} alt='Pronósticos Sanfra'/>
                        </div>
                    </div>
                    <div className="nav-warp">
                            {
                                isLogged ? (
                                    <>
                                        <div className="nav-item">
                                            <div className="user-data" onClick={()=>setLogged(false)}>
                                                <span>Bienvenido</span>
                                                <h4>Farid Ruano</h4>
                                            </div>
                                        </div>
                                        <div className="nav-item">
                                            <Image src={User} width={40} height={'auto'} alt='Usuario'/>
                                        </div>
                                    </>
                                ):(
                                    <>
                                        <div className="nav-item">
                                            <div className="nav-btn" onClick={()=>setLogged(true)}>
                                                <button type='button'>EMPEZAR A JUGAR</button>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        
                    </div>
                </nav>
            </>
          )
    }else{
        return (
            <>
            </>
          )
    }
}

const Pronosticos = () => {

    /* User */

    const [user, setUser] = useState(false)

    

  return (
    <>
        <NavBar isLogged={user} setLogged={setUser}/>
        <div className='body'>
            <div className="content-warp">
                <div className="wolf-warp">
                    Wolf
                </div>
                <div className="card-warp">
                    <div className="principle-card-warp">
                        <div className="principle-card">
                            <div className="card-content">
                                <div className="games-header">
                                    <ul>
                                        <li>
                                            Local
                                        </li>
                                        <li>
                                            VS
                                        </li>
                                        <li>
                                            Visitante
                                        </li>
                                        <li>
                                            Fecha
                                        </li>
                                        <li className='options'>
                                            <div className="option">
                                                L
                                            </div>
                                            <div className="option">
                                                E
                                            </div>
                                            <div className="option">
                                                V
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                                <div className="games-body">
                                    <div className="game">
                                        <div className="game-header">
                                            <Image src={LigaPro} width={40} height={'auto'} alt='Liga Pro Ecuador'/>
                                            <h1>
                                                Liga Pro Ecuador
                                            </h1>
                                        </div>
                                        <div className="game-body">
                                            <div className="g-row">
                                                <div className="team">
                                                    <Image src={Liga} width={40} height={'auto'} alt='Team Logo'/>
                                                    <div>
                                                        Liga de Quito
                                                    </div>
                                                </div>
                                                <div className='vs'>
                                                    VS
                                                </div>
                                                <div className="team">
                                                    <Image src={Indep} width={40} height={'auto'} alt='Team Logo'/>
                                                    <div>
                                                        Independiente del Valle
                                                    </div>
                                                </div>
                                                <div className='date'>
                                                    27/09/24 | 18h00
                                                </div>
                                                <div className="options">
                                                    <div className="option"/>
                                                    <div className="option"/>
                                                    <div className="option"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-warp">
                    Info
                </div>
            </div>
            <div className="bg-img"/>
            
        </div>
    </>
  )
}

export default Pronosticos