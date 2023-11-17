'use client'

import { useState } from "react"
import { NumericFormat } from "react-number-format"

const Invest = () => {
  const [invest, setInvest] = useState('')
  const [timeVal, setTimeVal] = useState(1)
  const [quant, setQuant] = useState(1)
  const [value, setValue] = useState(6)
  const [inQuant, setInQuant] = useState(0)
  const [option,setOption] = useState(0)
  const [pagos, setPagos] = useState([])
  const [rate, setRate] = useState(localStorage.getItem('rate') || 9)

  const getProfit=()=>{
    let profit = parseFloat(invest)
    let tiempo = parseInt(value)
    if(timeVal === 1){
      let rat = (tiempo*(rate/100))/12
      profit = (profit * (1 + rat)).toFixed(2);
      console.log(tiempo)
      console.log(rate)
      console.log(rat)
      console.log(1+rat)



      return profit      
    }else{
      let rat = (tiempo*rate)/365
      profit = (profit * (1 + rat)).toFixed(2);
      return profit
    }
    return profit
  }

  const getDate=()=>{
    let fec = new Date();
    if(timeVal === 1){
      console.log(value)
      fec.setMonth(fec.getMonth() + parseInt(value));
    }else{
      fec.setDate(fec.getDate() + parseInt(value));      
    }
    let formatted = fec.toISOString().split('T')[0];
    return formatted
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

  const calcularPagosMensuales = (capital, numeroCuotas) => {
    const cuotaMensual = ((getProfit()-capital)/numeroCuotas).toFixed(2)
    let fec = new Date();
    let formattedDate = fec.toISOString().split('T')[0];
    const primerMes = {
      No: 0,
      Fecha: formattedDate,
      Capital: capital,
      Interes: getRate(),
      Acumulado: 0,
      Cuota: cuotaMensual,
    };

    pagos.push(primerMes);
    // Crear la lista de pagos mensuales
  
    for (let mes = 1; mes <= numeroCuotas; mes++) {
      fec.setMonth(fec.getMonth() + 1);
      let formattedDat = fec.toISOString().split('T')[0];

      let cap = (cuotaMensual*mes).toFixed(2)
      let ncap = parseFloat(capital) + parseFloat(cap)
  
      // Crear objeto para representar el pago mensual
      const pagoMensual = {
        No: mes,
        Fecha: formattedDat,
        Capital: ncap.toFixed(2),
        Interes: getRate(),
        Acumulado: cap,
        Cuota: cuotaMensual,
        
      };
  
      pagos.push(pagoMensual);
    }
    console.log(pagos)
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
            <NumericFormat allowNegative={false} maxLength={8} placeholder="$10.000" value={invest || ''} 
            onChange={(e)=>{
                  setInvest(e.target.value)                
                  setPagos([])
                  setOption(0)
                }}/>
          </div>
        </div>
      </section>
      <section className="time-vals">
        <div className="value">
          <h3>Selecciona el tipo de plazo</h3>
          <div>
            <button type="button" className={timeVal === 1 ? "active" : ""} onClick={()=>{setTimeVal(1); setInQuant('');
              setQuant(1); 
              setValue(6)
              setPagos([])
              setOption(0)
                }}>
              Meses
            </button>
            <button type="button" className={timeVal === 2 ? "active" : ""} onClick={()=>{setTimeVal(2); setInQuant('');
              setQuant(1); setValue(31)
              setPagos([])
              setOption(0)
              }}>
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
              timeVal === 1 ? setValue(6): setValue(31)
              setPagos([])
              setOption(0)
              }}>
              {timeVal === 1 ? (<>6</>):(<>31</>)}
            </button>
            <button type="button" className={quant === 2 ? "active" : ""} onClick={(e)=> {setQuant(2); setInQuant('');
              timeVal === 1 ? setValue(9): setValue(61)
              setPagos([])
              setOption(0)
              }}>
              {timeVal === 1 ? (<>9</>):(<>61</>)}            
            </button>
            <button type="button" className={quant === 3 ? "active" : ""} onClick={(e)=> {setQuant(3); setInQuant('');
              timeVal === 1 ? setValue(12): setValue(91);
              setPagos([])
              setOption(0)
              }}>
              {timeVal === 1 ? (<>12</>):(<>91</>)}
            </button>
            <NumericFormat allowNegative={false} maxLength={3} className={quant > 3 ? "active" : ""} value={inQuant || ''}
            onChange={
              (e)=> {
                setQuant(4)
                setPagos([])
                setOption(0)

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
      </section>
      {value && invest > 0 && (
        <>
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
              <span>Con una tasa del <span>{getRate()}%</span> anual</span>
            </div>
          </section>
          <section className="options">
            <h1>
              Como te gustaría recibir los intereses?
            </h1>
            <div className="op-body">
              <button type="button" className={option === 1 && timeVal !== 2? "active" : ""} onClick={()=>{setOption(1); calcularPagosMensuales(parseFloat(invest), parseFloat(value));}}>
                Mensualmente
              </button>
              <button type="button" className={option === 2 ? "active" : ""} onClick={()=>{setOption(2);setPagos([])}}>
                Al final
              </button>
            </div>
            {option === 1 && timeVal !== 2 ?(
              <div className="tab">
                <div className="rate-header">
                  <div>
                    No.
                  </div>
                  <div>
                    Capital
                  </div>
                  <div>
                    Fecha
                  </div>
                  <div>
                    Interes
                  </div>
                  <div>
                    Cuota
                  </div>
                  <div>
                    Acumulado
                  </div>
                </div>
                {
                  pagos.map((pag, i)=>{
                    return (
                      <div key={i} className="rate-body">
                        <div>
                          {pag.No}
                        </div>
                        <div>
                          ${pag.Capital}
                        </div>
                        <div>
                          {pag.Fecha}
                        </div>
                        <div>
                          {pag.Interes}%
                        </div>
                        <div>
                          ${pag.Cuota}
                        </div>
                        <div>
                          ${pag.Acumulado}
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            ):(
              <>
                {option === 2 &&(
                  <div className="final">
                    <p>
                      Recibiras <span> ${getProfit()} </span> el <span> {getDate()} </span>
                    </p>
                      
                  </div>)
                }
              </>
            )}
          </section>
        </>
      )}
    </>
  )
}

export default Invest