'use client'

import Image from 'next/image'
import React from 'react'
import Check from "@public/images/form/check-icon.png"

const CheckBox = ({check, handleCheck}) => {

  return (
    <div className='checkbox-f'>
        <div className='check' onClick={()=>handleCheck()}>
            {
                check && (
                    <Image src={Check} width={15} height={'auto'} alt='Check'/>
                )
            }
        </div>
        <span>
            Acepto los <a href="/docs/Politica_Proteccion_Datos.pdf" target='_blank'>Términos y Condiciones</a>
        </span>
    </div>
  )
}

export default CheckBox