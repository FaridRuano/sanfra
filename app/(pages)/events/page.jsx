'use client'
import React, { useState } from 'react'
import View1 from '@public/assets/icons/event-view1.webp'
import View2 from '@public/assets/icons/event-view2.webp'
import RightB from '@public/assets/icons/arrow-right-b.webp'
import LeftB from '@public/assets/icons/arrow-left-b.webp'
import Event1 from '@public/assets/imgs/events/event-1.webp'
import Event2 from '@public/assets/imgs/events/event-2.webp'
import Event3 from '@public/assets/imgs/events/event-3.webp'
import Image from 'next/image'

const page = () => {

  /* View Mode */

  const [viewMode, setViewMode] = useState(true)

  return (
    <>
        <div className="events-header">
            <h1>
                Sanfra Events
            </h1>
        </div>        
        <div className="events-descrip">
          <p>Mira todos los eventos en los que formamos parte y tu
          como socio tienes beneficios exclusivos</p>
        </div>
        <div className="events-viewmodes ">
          <Image className={viewMode?'cp-hs':'cp-hs dis'} src={View1} width={'auto'} height={30} alt='View Mode' onClick={()=>setViewMode(true)}/>
          <Image className={viewMode?'cp-hs dis':'cp-hs'} src={View2} width={'auto'} height={30} alt='View Mode' onClick={()=>setViewMode(false)}/>
        </div>
        {
          viewMode ? (
            <>
              <div className='event-slider'>
                <div className="slider">
                  <div className="event prev">
                    <div className="img-holder">
                      <Image src={Event3} width={'auto'} height={430} alt='Event'/>
                    </div>
                  </div>
                  <div className="arrow l cp-hs">
                    <Image src={LeftB} width={20} height={'auto'} alt='Left'/>
                  </div>
                  <div className="event active">
                    <div className="img-holder">
                      <Image src={Event1} width={'auto'} height={430} alt='Event'/>
                    </div>
                  </div>
                  <div className="arrow r cp-hs">
                    <Image src={RightB} width={20} height={'auto'} alt='Right'/>
                  </div>
                  <div className="event next">
                    <div className="img-holder">
                      <Image src={Event2} width={'auto'} height={430} alt='Event'/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="event-details">
                <div className="container">
                  <h1>
                    PAPAYA DADA CONCERT
                  </h1>
                  <div className="detail">
                    <div>
                      Ciudad:
                    </div>
                    <p>
                      Ambato
                    </p>
                  </div>
                  <div className="detail">
                    <div>
                      Lugar:
                    </div>
                    <p>
                      Lov Music Club
                    </p>
                  </div>
                  <div className="detail">
                    <div>
                      Fecha:
                    </div>
                    <p>
                      Sábado 19 de Octubre, 2024
                    </p>
                  </div>
                  <div className="detail">
                    <div>
                      Hora:
                    </div>
                    <p>
                      15h30
                    </p>
                  </div>
                  <div className="benefit">
                    <div>
                      Beneficio Sanfra
                    </div>
                    <p>
                      Costo de la entrada con 20% de descuento.
                    </p>
                  </div>
                </div>
              </div>
            </>
          ):(
            <>

            </>
          )
        }
    </>
  )
}

export default page