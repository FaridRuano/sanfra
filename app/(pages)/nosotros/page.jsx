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
      <div style={{height: '1000px'}}/>
    </>
  )
}

export default AboutUs