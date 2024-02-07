'use client'

import { useEffect, useState } from "react"
import { NumericFormat } from "react-number-format"

const Invest = () => {
  const [invest, setInvest] = useState('')
  const [timeVal, setTimeVal] = useState(1)
  const [quant, setQuant] = useState(1)
  const [value, setValue] = useState(6)
  const [inQuant, setInQuant] = useState(0)
  const rate = 9.5

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
        {value && invest > 0 && (
          <div className="profit">
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
          </div>          
        )}
      </section>
    </>
  )
}

export default Invest