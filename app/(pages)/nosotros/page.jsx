'use client'
import { CldImage, CldVideoPlayer } from 'next-cloudinary';
import Script from 'next/script';
import { useEffect } from 'react';
import { Award, BarChart, Check, Slack, TrendingUp } from 'react-feather';
import sfLogo from '@public/icons/sanfra-logo.png'
import Image from "next/image"

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

    const fifthSec = document.getElementById('fifth-sec')

    obvLong.observe(fifthSec)

    const sixthSec = document.getElementById('sixth-sec')

    obvLong.observe(sixthSec)

    const seventhSec = document.getElementById('seventh-sec')

    obvLong.observe(seventhSec)

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
      <section className="fifth-us" id="fifth-sec">
        <div className='logo-warp'>
          <Image src={sfLogo} width={'auto'} heigth={'auto'} alt="Sanfra Logo"/>
        </div>
        <h1>
          Somos un Equipo
        </h1>
        <div className="row-warp">
          <h1>
            Gerente General
          </h1>
          <h2>
            Estuardo Riquelmen Parede López
          </h2>
        </div>
        <h2>
          Consejo de Administración
        </h2>
        <div className="row-warp">
          <h1>
            Presidente
          </h1>
          <h2>
            Cristina Proaño
          </h2>
        </div>
        <div className="row-warp">
          <h1>
            VicePresidente
          </h1>
          <h2>
            María Aguinda
          </h2>
        </div>
        <div className="row-warp">
          <h1>
            Secretario
          </h1>
          <h2>
            Guido Sánchez
          </h2>
        </div>
        <div className="row-warp">
          <h1>
            Principal
          </h1>
          <h2>
            Marisol Arias
          </h2>
        </div>
        <div className="row-warp alone">
          <h2>
            Walter Villacrés
          </h2>
        </div>
        <div className="row-warp alone">
          <h2>
            Jesenia Escalante
          </h2>
        </div>
        <div className="row-warp alone">
          <h2>
            Vinicio Freire
          </h2>
        </div>
        <div className="row-warp alone">
          <h2>
            Daniela López
          </h2>
        </div>
        <div className="row-warp alone">
          <h2>
            Orlando Bimbosa
          </h2>
        </div>
        <h2>
          Consejo de Vigilancia
        </h2>
        <div className="row-warp">
          <h1>
            Presidente
          </h1>
          <h2>
            Catalina Puente
          </h2>
        </div>
        <div className="row-warp">
          <h1>
            Secretario
          </h1>
          <h2>
            José Salazar
          </h2>
        </div>
        <div className="row-warp">
          <h1>
            Vocal
          </h1>
          <h2>
            Martiza Casco
          </h2>
        </div>
        <div className="row-warp alone">
          <h2>
            Mónica Estupiñan
          </h2>
        </div>
        <div className="row-warp alone">
          <h2>
            Diana Robles
          </h2>
        </div>
      </section>
      <section className="sixth-us" id="sixth-sec">
        <h1>
          Transparencia de la información
        </h1>
        <p>
          Sanfra en números
        </p>
      </section>
      <section className="seventh-us" id="seventh-sec">
        <h1>
          Transparencia de la información
        </h1>
        <div className="span-warp">
          <div className="col">
            <a href="/docs/Patrimonio_Tecnico.pdf" target='_blank'>
              Patrimonio Técnico
            </a>
            <a href="/docs/Balance_Social.pdf" target='_blank'>
              Balance Social
            </a>
            <a href="/docs/Calificacion_Riesgos.pdf" target='_blank'>
              Calificación de Riesgos
            </a>
          </div>
          <div className="col">
            <a>
              Historial de Balances
            </a>
            <a href="/docs/Balance_General.pdf" target='_blank'>
              Balance General
            </a>
            <a href="/docs/Estados_Financieros.pdf" target='_blank'>
              Estados Financieros
            </a>
          </div>
          <div className="col">
            <a href="/docs/Indicadores_Financieros.pdf" target='_blank'>
              Indicadores Financieros
            </a>
            <a href="/docs/Equidad_Genero.pdf" target='_blank'>
              Equidad de Género
            </a>
            <a href="/docs/Politicas_Ambientales.pdf" target='_blank'>
              SARAS
            </a>
          </div>
        </div>
        <h1>
          Costos por Servicios
        </h1>
        <div className="span-warp">
          <div className="col">
            <a href="/docs/Costos_Servicios.pdf" target='_blank'>
              Costos de Servicios
            </a>
          </div>
          <div className="col">
            <a href="/docs/Tasas_Vigentes.pdf" target='_blank'>
              Tasas vigentes, Costos Financieros y Operativos
            </a>
          </div>
        </div>
        <h1>
          Buen Gobierno
        </h1>
        <div className="span-warp">
          <div className="col">
            <a href="/docs/Mision_Vision.pdf" target='_blank'>
              Misión, Visión y Objetivos
            </a>
            <a href="/docs/Estatutos.pdf" target='_blank'>
              Estatutos
            </a>
            <a href="/docs/Distribucion_Exedentes.pdf" target='_blank'>
              Distribución de Exedentes
            </a>
            <a href="/docs/Comites_Comisiones.pdf" target='_blank'>
              Comites y Comisiones
            </a>
            <a>
              Contratos
            </a>
          </div>
          <div className="col">
            <a href="/docs/Código_Etica.pdf" target='_blank'>
              Código de Ética y Comportamiento
            </a>
            <a href="/docs/Reglamento_Normativa.pdf" target='_blank'>
              Reglamento de Elecciones
            </a>
            <a href="/docs/Socios.pdf" target='_blank'>
              Socios
            </a>
            <a href="/docs/Empleados.pdf" target='_blank'>
              Empleados
            </a>
            <a href="/docs/Politica_Ambiental.pdf" target='_blank'>
              Política Ambiental
            </a>
          </div>
          <div className="col">
            <a href="/docs/Asamblea.pdf" target='_blank'>
              Asamblea General
            </a>
            <a href="/docs/Consejos.pdf" target='_blank'>
              Administración y Vigilancia
            </a>
            <a href="/docs/Gerencias_Jefaturas.pdf" target='_blank'>
              Gerencias y Jefaturas
            </a>
            <a href="/docs/Quejas_Reclamos.pdf" target='_blank'>
              Quejas y Reclamos
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs