'use client'
import { headers } from '@next.config';
import { CldImage, CldVideoPlayer } from 'next-cloudinary';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { Award, BarChart, Check, Slack, TrendingUp, Volume2, VolumeX } from 'react-feather';

const AboutUs = () => {
  
  useEffect(()=>{
    const obv = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if(entry.isIntersecting){
            entry.target.classList.remove('focus')
          }else{
            entry.target.classList.add('focus')
          }
      })
    },{
        root: null,
        rootMargin: '-50% 0px',
    })

    const usVid = document.getElementById('us-vid')

    obv.observe(usVid)

    // Function to check viewport width and add/remove the "hidden" class
    function handleViewportWidth() {
      var phone = document.getElementById('timeline-phone');
      var web = document.getElementById('timeline-web');


      if (window.innerWidth <= 700) { // You can adjust the threshold (480 in this example) based on your needs
        phone.classList.remove('hidden');
        web.classList.add('hidden')
      } else {
        web.classList.remove('hidden');
        phone.classList.add('hidden')
      }
    }

    // Initial check on page load
    handleViewportWidth();

    // Listen for window resize events to update the class
    window.addEventListener('resize', handleViewportWidth);

    const obvLong = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if(entry.isIntersecting){
              entry.target.classList.add('show')
          }
      })
    },{
        root: null, 
        rootMargin: '-40% 0px', 
    })

    const razonTit = document.getElementById('razon-tit')

    obvLong.observe(razonTit)

    const visionTit = document.getElementById('vision-tit')

    obvLong.observe(visionTit)

    const differentTit = document.getElementById('different-tit')

    obvLong.observe(differentTit)

  },[])
  return (
    <> 
      <Script src='/utils/unmute-video.js'/>
      <section className='main-us'>
        <h1>
          Familia San Francisco
        </h1>
        <div className='vid-container' id="us-vid">
          <CldVideoPlayer className='cl-player' id='rewind-vid' src='sanfra/us/REWINDSANFRA2023' controlBar={false} bigPlayButton={false} muted={true} autoplay={true} loop={true}/>
          <div className='vid-overlay'/>
        </div>
      </section>
      <section className='second-us'>
        <div className='title-timeline'>
          <h1>Grandes Logros</h1>
          <span>
            Junto a ti
          </span>
        </div>
        <div className="timeline hidden" id="timeline-web">
          <div className="timeline-side">
            <div className="time-event">
              <div className="img-container">
                <div className='holder'>
                  <BarChart className='icon'/>
                </div>
              </div>
              <div className="text-container">
                <p>
                  Pasa a ser controlada por la
                  Superintendencia de Bancos y
                  Seguros del Ecuador.
                </p>
                <h2>
                  SEP
                </h2>
                <h1>
                  1985
                </h1>
              </div>
            </div>
            <div className="time-event">
              <div className="img-container">
                <div className='holder'>
                  <Award className='icon'/>
                </div>
              </div>
              <div className="text-container">
                <p>
                  Empresa ecuatoriana del
                  año.
                </p>
                <h2>
                  Reconocimiento
                </h2>
                <h1>
                  2015
                </h1>
              </div>
            </div>
          </div>
          <div className="timeline-side">
            <div className="time-event down">
              <div className="img-container">
                <div className='holder'>
                  <Slack className='icon'/>
                </div>
              </div>
              <div className="text-container">
                <h1>
                  1963
                </h1>
                <h2>
                  Nace San Francisco Ltda
                </h2>
                <p>
                  Con un total de 286 socios y
                  un capital de 38.490 sucres.
                </p>
              </div>
            </div>
            <div className="time-event down">
              <div className="img-container">
                <div className='holder'>
                  <TrendingUp className='icon'/>
                </div>
              </div>
              <div className="text-container">
                <h1>
                  2001
                </h1>
                <h2>
                  Top 10
                </h2>
                <p>
                  Rankeada en el top 10 de las
                  cooperativas más grandes del
                  segmento 1.
                </p>
              </div>
            </div>
            <div className="time-event down">
              <div className="img-container">
                <div className='holder'>
                  <Check className='icon'/>
                </div>
              </div>
              <div className="text-container">
                <h1>
                  2020
                </h1>
                <h2>
                  Resultados
                </h2>
                <p>
                  La 2da empresa más rentable
                  del país.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline hidden" id='timeline-phone'>
          <div className="timeline-side">
            <div className="time-event down">
              <div className="img-container">
                <div className='holder'>
                  <Slack className='icon'/>
                </div>
              </div>
              <div className="text-container">
                <h1>
                  1963
                </h1>
                <h2>
                  Nace San Francisco Ltda
                </h2>
                <p>
                  Con un total de 286 socios y
                  un capital de 38.490 sucres.
                </p>
              </div>
            </div>
            <div className="time-event down">
              <div className="img-container">
                <div className='holder'>
                  <BarChart className='icon'/>
                </div>
              </div>
              <div className="text-container">
                <h1>
                  1985
                </h1>
                <h2>
                  SEP
                </h2>
                <p>
                  Pasa a ser controlada por la
                  Superintendencia de Bancos y
                  Seguros del Ecuador.
                </p>
              </div>
            </div>
            <div className="time-event down">
              <div className="img-container">
                <div className='holder'>
                  <TrendingUp className='icon'/>
                </div>
              </div>
              <div className="text-container">
                <h1>
                  2001
                </h1>
                <h2>
                  Top 10
                </h2>
                <p>
                  Rankeada en el top 10 de las
                  cooperativas más grandes del
                  segmento 1.
                </p>
              </div>
            </div>
            <div className="time-event down">
              <div className="img-container">
                <div className='holder'>
                  <Award className='icon'/>
                </div>
              </div>
              <div className="text-container">
                <h1>
                  2015
                </h1>
                <h2>
                  Reconocimiento
                </h2>
                <p>
                  Empresa ecuatoriana del
                  año.
                </p>
              </div>
            </div>
            <div className="time-event down">
              <div className="img-container">
                <div className='holder'>
                  <Check className='icon'/>
                </div>
              </div>
              <div className="text-container">
                <h1>
                  2020
                </h1>
                <h2>
                  Resultados
                </h2>
                <p>
                  La 2da empresa más rentable
                  del país.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="third-us">
        <div className="text-warp" id="razon-tit">
          <h1>
            Nuestra razón de ser
          </h1>
          <p>
            Somos una empresa cimentada en principios cooperativos,
            orientada a ofrecer servicios financieros, ejecutados con
            calidad para contribuir al bienestar de nuestros socios,
            clientes y la sociedad.
          </p>
        </div>
        <div className="text-warp" id="vision-tit">
          <h1>
            Visión estratégica
          </h1>
          <p>
            Ser el mejor aliado de nuestros socios generando soluciones
            financieras integrales de calidad basadas en prácticas éticas,
            transparentes y rentables.
          </p>
        </div>
      </section>
      <section className="fourth-us" id="different-tit">
        <div className="text-warp">
          <h1>
            Lo que nos hace diferentes
          </h1>
          <div className="span-warp">
            <span>
              Responsabilidad Social
            </span>
            <span>
              Ética
            </span>
            <span>
              Confianza
            </span>
            <span>
              Transparencia
            </span>
            <span>
              Amabilidad
            </span>
            <span>
              Compromiso
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs