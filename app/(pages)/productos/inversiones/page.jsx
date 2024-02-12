'use client'

import { useEffect, useState } from "react"
import { NumericFormat } from "react-number-format"
import { Calendar, DollarSign, DownloadCloud, File, Lock, Tablet, TrendingUp } from "react-feather"
import { CldVideoPlayer } from 'next-cloudinary'
import PhoneFrame from '@public/images/phone-anim-lastframe.jpg'
import Image from "next/image"

const Invest = () => {
  const [invest, setInvest] = useState('')
  const [timeVal, setTimeVal] = useState(1)
  const [quant, setQuant] = useState(1)
  const [value, setValue] = useState(6)
  const [inQuant, setInQuant] = useState(0)
  const rate = 9.5

  const [videoLoaded, setVideoLoaded] = useState(false)

  const getProfit=()=>{
    let profit = parseFloat(invest)
    let tiempo = parseInt(value)
    if(timeVal === 1){
      let rat = (tiempo*(rate/100))/12
      profit = (profit * (1 + rat)).toFixed(2);
      return profit      
    }else{
      let rat = (tiempo*(rate/100))/365
      profit = (profit * (1 + rat)).toFixed(2);
      return profit
    }
  }

  const getRate = () =>{
    if(timeVal === 1){
      if(value >=12){
        return rate
      }else{
        let r = ((value*rate)/12).toFixed(2)
        return r      
      }
    }
    if(timeVal === 2){      
      if(value >=365){
        return rate
      }else{
        let r = ((value*rate)/365).toFixed(2)
        return r   
      }          
    }
    return rate
  }

  const handleLoadedVideo = () => {
    setVideoLoaded(true)
  }

  useEffect(()=>{
    const obvShort = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if(entry.isIntersecting){
              entry.target.classList.add('show')
          }
      })
    },{
        root: null, 
        rootMargin: '-20% 0px', 
    })

    const textDiv = document.querySelectorAll('.text')
    const headerDiv = document.querySelectorAll('.header')


    textDiv.forEach((el) => obvShort.observe(el))
    headerDiv.forEach((el) => obvShort.observe(el))

  },[])

  return (
    <>
      <section className="title-sa">
        <h1>
          #TenloTodo <span>con tu inversión</span>
        </h1>
      </section>
      <section className="invest-home">
        <div className="row-titles">
          <div className="titles">
            <div>
              <h3>
                Invierte con
              </h3>
              <h1>
                San Francisco
              </h1>
            </div>
            <h4>
              Una inversión inteligente
            </h4>
            <p>
              Garantizada en una cooperativa con más de 58 años de trayectoria, con los mejores indicadores financieros del país.
            </p>
          </div>
          <div className="money">
            <span>Simula tu inversión</span>
            <div className="inv-value">
              {invest&&(
                <span>$</span>
              )}
              <NumericFormat allowNegative={false} maxLength={8} placeholder="$10.000" value={invest || ''} 
              onChange={(e)=>{
                    setInvest(e.target.value)                
                  }}/>
            </div>
            <div className="value">
              <h3>Selecciona el tipo de plazo</h3>
              <div>
                <button type="button" className={timeVal === 1 ? "active" : ""} onClick={()=>{setTimeVal(1); setInQuant('');
                  setQuant(1); 
                  setValue(6)
                    }}>
                  Meses
                </button>
                <button type="button" className={timeVal === 2 ? "active" : ""} onClick={()=>{setTimeVal(2); setInQuant('');
                  setQuant(1); setValue(31)
                  }}>
                  Dias
                </button>
              </div>
            </div>
            <div className="quant">
              <h3>Elige el plazo en {timeVal === 1 ? (<span>Meses</span>):(<span>Dias</span>)}</h3>
              <div>
                <button type="button" className={quant === 1 ? "active" : ""} onClick={(e)=> {setQuant(1); setInQuant('');
                  timeVal === 1 ? setValue(6): setValue(31)
                  }}>
                  {timeVal === 1 ? (<>6</>):(<>31</>)}
                </button>
                <button type="button" className={quant === 2 ? "active" : ""} onClick={(e)=> {setQuant(2); setInQuant('');
                  timeVal === 1 ? setValue(9): setValue(61)
                  }}>
                  {timeVal === 1 ? (<>9</>):(<>61</>)}            
                </button>
                <button type="button" className={quant === 3 ? "active" : ""} onClick={(e)=> {setQuant(3); setInQuant('');
                  timeVal === 1 ? setValue(12): setValue(91);
                  }}>
                  {timeVal === 1 ? (<>12</>):(<>91</>)}
                </button>
                <NumericFormat allowNegative={false} placeholder="Otro valor" maxLength={3} className={quant > 3 ? "active" : ""} value={inQuant || ''}
                onChange={
                  (e)=> {
                    setQuant(4)
                    if(e.target.value <= 1){
                      setInQuant('')
                      setQuant(0)
                      setValue(0)
                    }
                    if(timeVal === 1){
                      if(e.target.value <= 150 && e.target.value > 0){
                        setInQuant(e.target.value)
                        setValue(e.target.value)
                      }
                    }else{
                      if(e.target.value <= 10000 && e.target.value > 0){
                        setInQuant(e.target.value)
                        setValue(e.target.value)
                      }
                    }                
                  }}/>
              </div>
            </div>
          </div>
        </div>
        <div className="profit">
        {value > 0 && invest > 0 && (
          <>
            <div className="titles">
              <h2>
                En {value} {timeVal === 1 ? (<span>Meses</span>):(<span>Dias</span>)} recibiras
              </h2>
            </div>
            <div className="profits">
              <h1>
                ${getProfit()}
              </h1>
              <span>Con una tasa del <span>{getRate()}%</span></span>
            </div>
          </>
        )}
        </div>          
      </section>
      <section className="phone-invest">
        <div className="header">
          <div className="icon">
            <Tablet/>
          </div>
          <h1>
            Inversión Digital
          </h1>
        </div>
        <div className="description">
          <p>
            Invierte desde  <span className="bold">cualquier lugar</span> con la <span className="bold primary">Sanfra Móvil 2.0.</span>
          </p>
        </div>
        <div className="phone-anim">
          <div className={videoLoaded?"video-holder":"video-holder off"}>
            <CldVideoPlayer className='cl-player' id='rewind-vid' src='sanfra/pr/in/phoneInAnim' controlBar={false} bigPlayButton={false} muted={true} autoplay={true} loop={false} onDataLoad={handleLoadedVideo}/>
          </div>
          <div className="text-holder">
            <div className="char">
              <div className="icon">
                <DollarSign/>
              </div>
              <div className="text">
                <h1>
                  Desde $300
                </h1>
              </div>
            </div>
            <div className="char">
              <div className="icon">
                <Calendar/>
              </div>
              <div className="text">
                <h1>
                  Pago al Final
                </h1>
              </div>
            </div>
            <div className="char">
              <div className="icon">
                <DollarSign/>
              </div>
              <div className="text">
                <h1>
                  Inversión Segura
                </h1>
              </div>
            </div>
            <div className="info">
              <File/>
              <a href="/docs/Manual_InversionesDigitales.pdf" target='_blank'>
                Mira el instructivo aquí.
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="invest-info">
        <div className="header">
          <div className="icon">
            <TrendingUp/>
          </div>
          <h1>
            Conoce más
          </h1>
        </div>
        <div className="info">
          <div className="text">
            <h3>
              Beneficios
            </h3>
            <ul>
              <li>
                Calificación de riesgo AA.
              </li>
              <li>
                Respaldo y seguridad de tu dinero.
              </li>
              <li>
                Seguro de Depósitos COSEDE.
              </li>
              <li>
                Máxima rentabilidad de acuerdo al plazo establecido.
              </li>
              <li>
                Atención personalizada.
              </li>
              <li>
                Plazo desde 31 días en adelante.
              </li>
              <li>
                Canalizamos tu inversión en efectivo, cheque o mediante transferencias Interbancarias.
              </li>
              <li>
                Pago de interés periódico o al vencimiento.
              </li>
            </ul>
          </div>
          <div className="text">
            <h3>
              Requisitos
            </h3>
            <ul>
              <li>
                Copia de cédula de identidad.
              </li>
              <li>
                Recibo de pago de un servicio básico (agua, luz, teléfono).
              </li>
              <li>
                Depósito inicial.
              </li>
              Persona Jurídica:
              <li>
                RUC (Registro Único De Contribuyentes)
              </li>
              <li>
                Acta de constitución o estatuto
              </li>
              <li>
                Copia certificada del nombramiento de representante legal.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Invest