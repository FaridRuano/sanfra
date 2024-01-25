'use client'
import { headers } from '@next.config';
import { CldImage, CldVideoPlayer } from 'next-cloudinary';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'react-feather';

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
                <div className='holder'/>
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
                <div className='holder'/>
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
                <div className='holder'/>
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
                <div className='holder'/>
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
                <div className='holder'/>
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
                <div className='holder'/>
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
                <div className='holder'/>
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
                <div className='holder'/>
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
                <div className='holder'/>
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
                <div className='holder'/>
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
      <div style={{height: '1000px'}}/>
    </>
  )
}

export default AboutUs