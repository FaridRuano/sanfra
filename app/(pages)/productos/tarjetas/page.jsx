'use client'
import Image from "next/image"
import FrSdCard from "@public/images/frside-card.png"
import { useEffect } from "react"

const Cards = () => {

  useEffect(()=>{
    window.addEventListener('scroll', function () {
      let card = document.getElementById('card-3d')
      let info1 = document.getElementById('info-1')

      

      let scrollTop = window.scrollY
      console.log(scrollTop)
      
      /* Card */
      let fadeOut = 458
      let cardLimit = 818
      let cardGone = 1276
      
      if(scrollTop > cardLimit){
        card.classList.add("zoom")
        if(scrollTop > cardGone){
          card.style.opacity = 0
        }else{
          card.style.opacity = 1 - Math.min((scrollTop - 817) / fadeOut, 1)
        }
        card.classList.add("default")
      }else{
        card.style.opacity = 1
        card.classList.remove("zoom")
      }

      /* Main Info */
      if(scrollTop > 300){
        info1.style.opacity=0
      }else{
        info1.style.opacity=1
      }
    })
  },[])
  return (
    <>
      <section className="main-ta">
        <Image id="card-3d" className="card-frsd" src={FrSdCard} width={800} height={'auto'} alt="Sanfra Debit"/>
        {/* <Image  className="card-frsd zoom" src={FrSdCard} width={800} height={'auto'}/> */}
        <div className="main-info" id="info-1">
          <div className="intro">
            <span>
              Solícita <b>NUEVA</b> Sanfra
            </span>
            <h1>
              DEBIT
            </h1>
            <p>Inbreibles beneficios esperan por ti!</p>
          </div>
        </div>
      </section>
      <section className="second-ta">

      </section>
    </>
  )
}

export default Cards