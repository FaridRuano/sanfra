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
          card.style.opacity = 1 - Math.min((scrollTop - 818) / fadeOut, 1)
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
      </section>
      <section className="second-ta">

      </section>
    </>
  )
}

export default Cards