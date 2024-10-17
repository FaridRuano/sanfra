'use client'

import HomeSearchBar from '@public/components/public/HomeSearchBar'
import React, { useEffect, useState } from 'react'
import HomeAsset1 from '@public/assets/imgs/home-asset-1.webp'
import HomeAsset2 from '@public/assets/imgs/home-asset-2.webp'
import ArrowRight from '@public/assets/icons/arrow-right.webp'
import ArrowRightP from '@public/assets/icons/arrow-right-p.webp'
import ArrowTopRight from '@public/assets/icons/arrow-topright.webp'
import UserIcon from '@public/assets/icons/user.webp'
import PigIcon from '@public/assets/icons/pig.webp'
import CardIcon from '@public/assets/icons/card.webp'
import CalcIcon from '@public/assets/icons/calc.webp'
import DollarPIcon from '@public/assets/icons/dollar-p.webp'
import Cosede from '@public/assets/icons/cosede-logo.webp'
import Educa from '@public/assets/icons/educa-logo.webp'
import StatsIcon from '@public/assets/icons/stats.webp'
import DollarIcon from '@public/assets/icons/dollar.webp'
import CardAsset from '@public/assets/icons/card-slider-asset.webp'
import Event1 from '@public/assets/imgs/events/event-1.webp'
import Event2 from '@public/assets/imgs/events/event-2.webp'
import Event3 from '@public/assets/imgs/events/event-3.webp'
import Partner1 from '@public/assets/imgs/partners/partner-1.webp'
import Partner2 from '@public/assets/imgs/partners/partner-2.webp'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Home = () => {

    /* Router */

    const router = useRouter()

    /* Card Slider */

    const [activeCard, setActiveCard] = useState(2)

    const handleActiveCard = (card) => {
        setActiveCard(card)
    }

    const activeSlider = () => {
        if(activeCard === 1){
            return 'slider prev'
        }
        if(activeCard === 2){
            return 'slider'
        }
        if(activeCard === 3){
            return 'slider next'
        }
    }

    const cycleCards = () => {
        setActiveCard((prevCard) => {
          if (prevCard === 3) {
            return 1
          }
          return prevCard + 1
        })
    }

    useEffect(() => {
        const interval = setInterval(() => {
          cycleCards()
        }, 7000)
    
        return () => clearInterval(interval)
    }, [])

    /* Event Slider */

    const [activeEvent, setActiveEvent] = useState(1)

    const handleActiveEvent = (eve) => {
        setActiveEvent(eve)
    }

    /* Cosede Slider */

    const [activeCosede, setActiveCosede] = useState(false)

    useEffect(() => {
        const intervalCosede = setInterval(() => {
          setActiveCosede(current => !current)
        }, 10000)
    
        return () => clearInterval(intervalCosede)
    }, [])

  return (
    <>
        <HomeSearchBar/>
        <section className='home-sec1'>
            <Image className='home-asset' src={HomeAsset1} width={400} height={'auto'} alt='Sanfra Movil' id='ast-h1'/>
            <Image className='home-asset' src={HomeAsset2} width={1000} height={'auto'} alt='Sanfra Movil' id='ast-h2'/>
            <div className='home-radialgradient' id='gradi-1'/>
            <div className='home-radialgradient' id='gradi-2'/>
            <div className="home-items">
                <div className="home-info">
                    <p>
                    Empieza hoy a transformar
                    tus finanzas con una institución
                    <b> sólida y confiable.</b>
                    </p>
                    <p>
                    Adémas disfruta de todos
                    nuestros <b>beneficios, tarjetas
                    y servicios digitales.</b>
                    </p>
                </div>
                <div className="home-options">
                    <span className='op-title'>Soluciones en línea</span>
                    <div className='options-container'>
                        <div className="option">
                            <div className="icon">
                                <Image src={UserIcon} width={12} height={'auto'} alt='User'/>
                            </div>
                            <span>
                                Cuenta Personal
                            </span>
                            <div className="arrow">
                                <Image src={ArrowRight} width={7} height={'auto'} alt='Arrow right'/>
                            </div>
                        </div>
                        <div className="option">
                            <div className="icon">
                                <Image src={DollarIcon} width={10} height={'auto'} alt='User'/>
                            </div>
                            <span>
                                Cotizar un Crédito
                            </span>
                            <div className="arrow">
                                <Image src={ArrowRight} width={7} height={'auto'} alt='Arrow right'/>
                            </div>
                        </div>
                        <div className="option">
                            <div className="icon">
                                <Image src={StatsIcon} width={15} height={'auto'} alt='User'/>
                            </div>
                            <span>
                                Inversiones
                            </span>
                            <div className="arrow">
                                <Image src={ArrowRight} width={7} height={'auto'} alt='Arrow right'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='card-slider'>
            <div className={activeSlider()}>
                <div className="card cp-hs" onClick={()=>handleActiveCard(1)}>
                    <div className="card-header">
                        <span>
                            Una <b>cuenta</b> que te acompaña en cada
                        </span>
                        <h2>
                            Momento
                        </h2>
                    </div>
                    <div className="card-footer">
                        <h2>
                            Cuenta <b>Ahorros</b>
                        </h2>
                        <div className="more cp-hs">
                            <span>
                                Conoce más
                            </span>
                            <Image src={ArrowRight} width={9} height={'auto'} alt='Arrow right'/>
                        </div>
                    </div>
                </div>
                <div className="card cp-hs" onClick={()=>handleActiveCard(2)}>
                    <div className="card-header">
                        <span>
                            Una <b>cuenta</b> que va con tu
                        </span>
                        <h2>
                            Personalidad
                        </h2>
                    </div>
                    <div className="card-footer">
                        <h2>
                            Cuenta <b>Chill</b>
                        </h2>
                        <div className="more cp-hs">
                            <span>
                                Conoce más
                            </span>
                            <Image src={ArrowRight} width={9} height={'auto'} alt='Arrow right'/>
                        </div>
                    </div>
                    <Image src={CardAsset} width={800} height={'auto'} alt='Card asset' id='chill-asset'/>
                </div>
                <div className="card cp-hs" onClick={()=>handleActiveCard(3)}>
                    <div className="card-header">
                        <span>
                            Una <b>cuenta</b> que respalda tu
                        </span>
                        <h2>
                            Visión
                        </h2>
                    </div>
                    <div className="card-footer">
                        <h2>
                            Cuenta <b>Business</b>
                        </h2>
                        <div className="more cp-hs">
                            <span>
                                Conoce más
                            </span>
                            <Image src={ArrowRight} width={9} height={'auto'} alt='Arrow right'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider-controller">
                <div className={`control ${activeCard === 1 ? "active":""}`} onClick={()=>handleActiveCard(1)}/>
                <div className={`control ${activeCard === 2 ? "active":""}`} onClick={()=>handleActiveCard(2)}/>
                <div className={`control ${activeCard === 3 ? "active":""}`} onClick={()=>handleActiveCard(3)}/>
            </div>
        </section>
        <section className='events'>
            <div className="header">
                <h2>
                    Sanfra Events
                </h2>
                <p>
                    Descubre todos nuestros próximos eventos en los que somos participantes y nuestros
                    <b> Socios Sanfra</b> tienen acceso a beneficios, descuentos y promociones.
                </p>
            </div>
            <div className="eve-body">
                <div className="events">
                    <div className={`event ${activeEvent === 1 ? 'active':''}`} onClick={()=>handleActiveEvent(1)}>
                        <div className="topic">
                            <h2>PAPAYA DADA CONCERT</h2>
                            <p>Lov Music Club - 18 Oct 2024</p>
                            <div className="more cp-hs">
                                <span>Conoce más</span>
                                <Image src={ArrowRight} width={9} height={'auto'} alt='Arrow right'/>
                            </div>
                        </div>
                        <Image className='photo' src={Event1} width={'auto'} height={300} alt='Event 1'/>
                    </div>
                    <div className={`event ${activeEvent === 2 ? 'active':''}`} onClick={()=>handleActiveEvent(2)}>
                        <div className="topic">
                            <h2>L.D.U VS T.U</h2>
                            <p>Estadio Bellavista - 19 Oct 2024</p>
                            <div className="more cp-hs">
                                <span>Conoce más</span>
                                <Image src={ArrowRight} width={9} height={'auto'} alt='Arrow right'/>
                            </div>
                        </div>
                        <Image className='photo' src={Event2} width={'auto'} height={300} alt='Event 1'/>
                    </div>
                    <div className={`event ${activeEvent === 3 ? 'active':''}`} onClick={()=>handleActiveEvent(3)}>
                        <div className="topic">
                            <h2>Trick or Drink</h2>
                            <p>Samanga - 26 Nov 2024</p>
                            <div className="more cp-hs">
                                <span>Conoce más</span>
                                <Image src={ArrowRight} width={9} height={'auto'} alt='Arrow right'/>
                            </div>
                        </div>
                        <Image className='photo' src={Event3} width={'auto'} height={300} alt='Event 1'/>
                    </div>
                </div>
            </div>
            <div className="eve-footer">
                <span onClick={()=>router.push('/events')}>
                    Ver todos los próximos eventos
                </span>
            </div>
        </section>
        <section className='partners'>
            <div className="header">
                <h2>
                    Sanfra Partners
                </h2>
                <p>
                Con Sanfra la diversión no termina, consulta todas nuestras promociones activas con
                nuestros <b>Partners.</b>
                </p>
            </div>
            <div className="par-body">
                <div className="partner">
                    <div className="photo">
                        <h2>
                            Aurum
                        </h2>
                        <Image className='ph' src={Partner1} width={250} height={'auto'} alt='Partner'/>
                    </div>
                    <div className="topic">
                        <h3>
                            15%
                        </h3>
                        <p>
                            de descuento en
                            todos los servicios.
                        </p>
                    </div>
                    <div className="more cp-hs">
                        Conoce más
                    </div>
                </div>
                <div className="partner">
                    <div className="photo">
                        <h2>
                            Doble Filo
                        </h2>
                        <Image className='ph' src={Partner2} width={250} height={'auto'} alt='Partner'/>
                    </div>
                    <div className="topic">
                        <p>
                            Menú especial y promociones 
                            todos los días.
                        </p>
                    </div>
                    <div className="more cp-hs">
                        Conoce más
                    </div>
                </div>
                <div className="partner-more cp-hs">
                    Ver Todos
                </div>
            </div>
        </section>
        <section className='shortcuts'>
            <span>
                Accesos <b>Rápidos</b>
            </span>
            <div className="container">
                <div className="shortcut cp-hs">
                    <div className="arrow">
                        <Image src={ArrowTopRight} width={12} height={'auto'} alt='Arrow top right'/>
                    </div>
                    <div className="icon">
                        <Image src={PigIcon} width={20} height={'auto'} alt='Savings'/>
                    </div>
                    <h2>
                        Planes de
                        <b> Ahorro</b>
                    </h2>
                </div>
                <div className="shortcut cp-hs">
                    <div className="arrow">
                        <Image src={ArrowTopRight} width={12} height={'auto'} alt='Arrow top right'/>
                    </div>
                    <div className="icon">
                        <Image src={CalcIcon} width={17} height={'auto'} alt='Savings'/>
                    </div>
                    <h2>
                        Calcula tu
                        <b> Inversión</b>
                    </h2>
                </div>
                <div className="shortcut cp-hs">
                    <div className="arrow">
                        <Image src={ArrowTopRight} width={12} height={'auto'} alt='Arrow top right'/>
                    </div>
                    <div className="icon">
                        <Image src={DollarPIcon} width={11} height={'auto'} alt='Savings'/>
                    </div>
                    <h2>
                        Simula tu
                        <b> Crédito</b>
                    </h2>
                </div>
                <div className="shortcut cp-hs">
                    <div className="arrow">
                        <Image src={ArrowTopRight} width={12} height={'auto'} alt='Arrow top right'/>
                    </div>
                    <div className="icon">
                        <Image src={CardIcon} width={18} height={'auto'} alt='Savings'/>
                    </div>
                    <h2>
                        Tarjetas de
                        <b> Débito</b>
                    </h2>
                </div>
            </div>
        </section>
        <section className="cosede-slider">
            <div className={`slider ${activeCosede?"next":""}`}>
                <div className="cosede" onClick={()=>setActiveCosede(false)}>
                    <div className="photo">
                        <Image src={Cosede} width={'auto'} height={80} alt='Cosede'/>
                    </div>
                    <div className="info">
                        <h3>
                            Tus depósitos están protegidos
                        </h3>
                        <p>
                            Conoce el monto de cobertura del Seguro de Depositos de tu banco.
                        </p>
                        <div className="more cp-hs">
                            <span>Conoce más</span>
                            <Image src={ArrowRightP} width={9} height={'auto'} alt='Arrow right'/>
                        </div>
                    </div>
                </div>
                <div className="cosede" onClick={()=>setActiveCosede(true)}>
                    <div className="photo">
                        <Image src={Educa} width={'auto'} height={100} alt='Cosede'/>
                    </div>
                    <div className="info">
                        <h3>
                            Plataforma Edúcate
                        </h3>
                        <p>
                            Encuentra material educativo en la plataforma virtual de COSEDE.
                        </p>
                        <div className="more cp-hs">
                            <span>Conoce más</span>
                            <Image src={ArrowRightP} width={9} height={'auto'} alt='Arrow right'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider-controller">
                <div className={`control ${activeCosede?"":"active"}`} onClick={()=>setActiveCosede(false)}/>
                <div className={`control ${activeCosede?"active":""}`} onClick={()=>setActiveCosede(true)}/>
            </div>
        </section>
    </>
  )
}

export default Home