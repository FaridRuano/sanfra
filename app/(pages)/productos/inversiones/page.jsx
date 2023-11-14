'use client'

import { useState } from "react"

const Invest = () => {
  const [invest, setInvest] = useState('')
  const [timeVal, setTimeVal] = useState(1)
  const [quant, setQuant] = useState(1)
  const [value, setValue] = useState(6)
  const [inQuant, setInQuant] = useState(0)
  const rate = 9

  const getProfit=()=>{
    let rateCalc = getRate()/100
    let profit = (parseFloat(rateCalc*invest)+parseFloat(invest)).toFixed(2)
    return profit
  }

  const getRate = () =>{
    if(timeVal === 1){
      if(value >= 12){
        return 9
      }else{
        let r = ((value*9)/12).toFixed(2)
        return r
      }
    }
    if(timeVal === 2){
      if(value >= 365){
        return 9
      }else{
        let r = (value*9)/365
        return r.toFixed(2)
      }
    }
    return 9
  }

  return (
    <>
      <section className="invest-home">
        <div className="titles">
          <div>
            <h3>
              Invierte con
            </h3>
            <h1>
              San Francisco
            </h1>
          </div>
        </div>
        <div className="money">
          <span>Ingresa el monto a invertir</span>
          <div>
            {invest&&(
              <span>$</span>
            )}
            <input type="number" placeholder="$10.000" value={invest || ''} onChange={(e)=>{if(e.target.value <= 1000000){
                  setInvest(e.target.value)
                }}}/>
          </div>
        </div>
      </section>
      <section className="time-vals">
        <div className="value">
          <h3>Selecciona el tipo de plazo</h3>
          <div>
            <button type="button" className={timeVal === 1 ? "active" : ""} onClick={()=>{setTimeVal(1); setInQuant('');
              setQuant(1); setValue(6)}}>
              Meses
            </button>
            <button type="button" className={timeVal === 2 ? "active" : ""} onClick={()=>{setTimeVal(2); setInQuant('');
              setQuant(1); setValue(31)}}>
              Dias
            </button>
          </div>
        </div>
        <div className="quant">
          <h5>
            Selecciona o ingresa la cantidad de {timeVal === 1 ? (<span>Meses</span>):(<span>Dias</span>)}
          </h5>
          <div>
            <button type="button" className={quant === 1 ? "active" : ""} onClick={(e)=> {setQuant(1); setInQuant('');
             timeVal === 1 ? setValue(6): setValue(31)}}>
              {timeVal === 1 ? (<>6</>):(<>31</>)}
            </button>
            <button type="button" className={quant === 2 ? "active" : ""} onClick={(e)=> {setQuant(2); setInQuant('');
             timeVal === 1 ? setValue(9): setValue(61)}}>
              {timeVal === 1 ? (<>9</>):(<>61</>)}            
            </button>
            <button type="button" className={quant === 3 ? "active" : ""} onClick={(e)=> {setQuant(3); setInQuant('');
             timeVal === 1 ? setValue(12): setValue(91)}}>
              {timeVal === 1 ? (<>12</>):(<>91</>)}
            </button>
            <input type="number" className={quant > 3 ? "active" : ""} value={inQuant || ''} maxLength={3}
            onChange={
              (e)=> {
                setQuant(4)
                if(e.target.value <= 1){
                  setInQuant('')
                  setQuant(0)
                  setValue(0)
                }
                if(timeVal === 1){
                  if(e.target.value <= 150){
                    setInQuant(e.target.value)
                    setValue(e.target.value)
                  }
                }else{
                  if(e.target.value <= 10000){
                    setInQuant(e.target.value)
                    setValue(e.target.value)
                  }
                }
              }}/>
          </div>
        </div>
      </section>
      {value && invest && (
        <section className="profit">
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
        </section>
      )}
    </>
  )
}

export default Invest