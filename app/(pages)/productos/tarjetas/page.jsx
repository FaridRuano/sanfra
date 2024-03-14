'use client'
import Image from "next/image"
import FrSdCard from "@public/images/frside-card.png"
import { useEffect } from "react"

const Cards = () => {

  useEffect(()=>{
    window.addEventListener('scroll', function () {
      let card = document.getElementById('card-3d')

      let scrollTop = window.scrollY
      console.log(scrollTop)

      let fadeOut = 458
      let cardLimit = 818
      let cardGone = 1276
      
      if(scrollTop > cardLimit){
        card.classList.add("zoom")
        if(scrollTop > cardGone){
          card.style.opacity = 0
        }else{
          if(scrollTop < cardLimit){
            card.style.opacity = 1
          }else{
          }
        }
        card.classList.add("default")
      }else{
        card.classList.remove("zoom")
      }
      
    })
  },[])
  return (
    <>
      <section className="main-ta">
        <Image id="card-3d" className="card-frsd" src={FrSdCard} width={800} height={'auto'}/>
        {/* <Image  className="card-frsd zoom" src={FrSdCard} width={800} height={'auto'}/> */}
        <div className="main-info">
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