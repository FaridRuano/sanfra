'use client'

import Image from "next/image"
import debitCard from "@public/images/3d-card.png"
import cardBg from "@public/images/3d-card-bg.svg"
import prSave from "@public/icons/cohete-ico.png"
import wolfito from "@public/icons/wolfito-ico.png"
import invIco from "@public/icons/invest-ico.png"
import debitIco from "@public/icons/debit-ico.png"
import girlSmile from "@public/images/girl-smiling.png"
import girlBg from "@public/images/girl-bg.png"
import webMovilW from "@public/icons/web-movil-ico.png"
import sanfraFriend from "@public/icons/sanfra-friend.png"
import arrowRight from "@public/icons/arrow-right.png"
import sanfrApp from "@public/images/sanfrapp-1.png"
import chrome from "@public/icons/chrome-ico.png"
import appStore from "@public/icons/app-store.png"
import gogPlay from "@public/icons/gplay-ico.png"
import copColon from "@public/images/colon-suc.jpg"
import Atm from "@public/icons/atm-suc.png"
import sanfraFriend2 from "@public/icons/sanfra-friend-2.png"
import sucIco from "@public/icons/suc-ico.png"
import PronosSanfra from "@public/icons/prono-logo.png"
import PronoPhone from "@public/images/prono-phone.png"
import SecreSmiling from "@public/images/secre-smiling.png"
import EducateLogo  from "@public/icons/educate-logo.png"
import SecreBG from "@public/images/secre-bg.png"
import { useRouter } from "next/navigation";
import { useEffect } from "react"

const Home = () => {
    const route  = useRouter()
    useEffect(()=>{
        /* MAIN PAGE */
        
        const obv = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add('show')

                }
            })
        },{
            root: null,
            rootMargin: '-30% 0px',
        })

        const obvLong = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add('show')
                }
            })
        },{
            root: null, 
            rootMargin: '-50% 0px', 
        })

        const mainSec = document.getElementById('mp-main')

        obv.observe(mainSec)

        const secondSec = document.getElementById('mp-second')

        obv.observe(secondSec)

        const thirdSec = document.getElementById('mp-third')

        obvLong.observe(thirdSec)

        const fourthSec = document.getElementById('mp-fourth')

        obv.observe(fourthSec)

        const fifthSec = document.getElementById('mp-fifth')

        obv.observe(fifthSec)

        const sixSec = document.getElementById('mp-sixth')

        obvLong.observe(sixSec)

        const seventSec = document.getElementById('mp-seventh')

        obv.observe(seventSec)

        /* FOOTER */

        const obvSmall = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add('show')
                    entry.target.classList.remove('hidden')

                }
            })
        },{
            root: null, 
            rootMargin: '-5% 0px', 
        });

        const footer = document.getElementById('footer')

        obvSmall.observe(footer)

    },[route])
  return (
    <>
        <section className="main-home" id="mp-main">
            <div className="main-titles">
                <span className="title-01">#TenloTodo</span>
                <span className="title-02">Con la <span>NUEVA</span></span>
                <span className="title-03">SANFRA <span>DEBIT.</span></span>
                <div className="titles-btns">
                    <a href="https://online.coac-sanfra.com/cuentafacil/1" target="_blank">
                        <span className="tit-btn pointer">
                            Abre tu cuenta
                        </span>
                    </a>
                    <span className="tit-btn pointer">
                        Pídela hoy!
                    </span>
                </div>
            </div>
            <div className="main-3dcard">
                <Image className="dcard" src={debitCard} width={747} height={747} alt="Sanfra Debit"/>            
                <Image className="dbg" src={cardBg} width={967} height={748} alt="Sanfra Debit"/>            
            </div>
        </section>
        <section className="second-home" id="mp-second">
            <div className="second-title center-div row">
                <h1>Tenemos <span>TODO</span> para ti</h1>
            </div>
            <div className="second-icons row">
                <div className="icon-named">
                    <span>
                        Ahorro programado
                    </span>
                    <Image className="ico-img" src={prSave} width={113} height={108} alt="Ahorro programado"/>
                </div>      
                <div className="icon-named">
                    <span>
                        Sanfra Kids
                    </span>
                    <Image className="ico-img" src={wolfito} width={105} height={132} alt="Sanfra Kids"/>
                </div>  
                <div className="icon-named">
                    <span>
                        Inversiones
                    </span>
                    <Image className="ico-img" src={invIco} width={137} height={111} alt="Inversiones"/>
                </div>  
                <div className="icon-named">
                    <span>
                        Tarjeta Débito
                    </span>
                    <Image className="ico-img" src={debitIco} width={143} height={108} alt="Tarjeta Débito"/>
                </div>            
            </div>
        </section>
        <section className="third-home" id="mp-third">
            <div className="third-img">
                <Image className="img" src={girlSmile} width={940} height={556} alt="Disfruta con Sanfra!"/>
                <Image className="bg" src={girlBg} width={622} height={403} alt="Disfruta con Sanfra!"/>
                
            </div>
            <div className="third-title">
                <h2>Págalo <span>TODO</span> con San Francisco</h2>
                <div className="title-ico">
                    <div className="img">
                        <Image src={webMovilW} width={90} height={60} alt="Sanfra Web y Móvil"/>
                    </div>
                    <span>Desde tus dispositivos</span>
                </div>
                <div className="title-ico">
                    <div className="img" >
                        <Image src={sanfraFriend} width={85} height={64} alt="Amigo Sanfra"/>
                    </div>
                    <span>O amigo sanfra</span>
                </div>
                <div className="parr">
                    Realiza los pagos de impuestos, tarjetas, SRI/RISE, pensiones, servicios básicos y más,
                    adémas puedes utilizar <span>Pago ágil</span> y <span>Facilito</span> con tu cuenta Sanfra.
                    <div className="findmore">
                        <span>Conóce más</span>
                        <Image className="img" src={arrowRight} width={13} height={16} alt="Conóce más!"/>
                    </div>
                </div>
            </div>
        </section>
        <section className="fourth-home" id="mp-fourth">
            <div className="fourth-titles">
                <span className="tenlo">Tenlo <span>todo</span> con la</span>
                <span className="sanfra">SANFRA</span>
                <span className="web">Web / Móvil</span>
                <div className="download">
                    <p>Empieza a usarla hoy!</p>
                    <div>
                        <Image className="ico-download" src={chrome} width={51} height={'auto'} alt="Chrome"/>
                        <Image className="ico-download" src={appStore} width={51} height={'auto'} alt="App Store"/>
                        <Image className="ico-download" src={gogPlay} width={51} height={'auto'} alt="Google Play"/>
                    </div>
                </div>
            </div>
            <div className="fourth-img">
                <Image src={sanfrApp} width={678} height={'auto'} alt="Sanfra Web y Móvil"/>
            </div>
        </section>
        <section className="fifth-home" id="mp-fifth">
            <div className="fifth-titles">
                <div className="title">
                    <span>Todo</span> a tu alcance
                </div>
                <div className="icons-info">
                    <div className="div-icon">
                        <div className="div-image">
                            <Image src={sucIco} width={63} height={'auto'} alt="Sanfra Suc"/>
                        </div>
                        <div>
                            <span>32</span> Agencias
                        </div>
                    </div>
                    <div className="div-icon">
                        <div className="div-image">
                            <Image src={Atm} width={41} height={'auto'} alt="Sanfra ATM"/>
                        </div>
                        <div>
                            <span>64</span> ATM
                        </div>
                    </div>
                    <div className="div-icon">
                        <div className="div-image">
                            <Image src={sanfraFriend2} width={80} height={'auto'} alt="Sanfra Friend"/>
                        </div>
                        <div>
                            <span>108</span> Amigo Sanfra
                        </div>
                    </div>
                </div>
            </div>
            <div className="fifth-img">
                <Image src={copColon} width={417} height={'auto'} alt="Agencia Colón"/>
            </div>
        </section>
        <section className="sixth-home" id="mp-sixth">
            <div className="sixth-img">
                <Image src={PronoPhone} width={728} height={'auto'} alt="Prono Screen"/>
            </div>
            <div className="sixth-titles">
                <Image className="img" src={PronosSanfra} width={415} height={'auto'} alt="Prono Logo"/>
                <span className="title">Regístrate, participa y <span>GANA.</span></span>
                <a href="https://online.coac-sanfra.com:8088" target="_blank">
                    <div className="sixth-btn">
                        JUEGA AQUÍ
                    </div>
                </a>
            </div>
        </section>
        <section className="seventh-home" id="mp-seventh">
            <div className="seventh-titles">
                <h2>Tus depósitos están</h2>
                <h1>PROTEGIDOS</h1>
                <p>
                    Conoce la cobertura del Seguro de Depósitos<br/>
                    de tu entidad finaniera en:
                </p>
                <span><a href="https://www.cosede.gob.ec" target="_blank">www.cosede.gob.ec</a></span>
            </div>
            <div className="seventh-img">
                <Image className="secre" src={SecreSmiling} width={967} height={'auto'} alt="Secre Person"/>
                <Image className="edulogo" src={EducateLogo} width={257} height={'auto'} alt="Educate Logo"/>
                <Image className="secbg" src={SecreBG} width={900} height={'auto'} alt="Secre Bg"/>
            </div>
        </section>        
    </>
  )
}

export default Home