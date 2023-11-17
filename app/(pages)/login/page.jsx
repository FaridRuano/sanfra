'use client'

import { useEffect, useState } from "react"
import { NumericFormat } from "react-number-format"
import { useRouter } from "next/navigation";


const Login = () => {
    const router = useRouter()

    const [name, setName] = useState('')
    const [empr, setEmpre] = useState('')
    const [nempr, setnEmpre] = useState('San Francisco')

    const [pass, setPass] = useState('')
    const [rate, setRate] = useState('')
    const [nRate, setNRate] = useState(9)

    const [error, setError] = useState(false)
    const [logged, setLogged] = useState(false)
    const [isLoading, setLoading] = useState(false)

    const log =() =>{
        if(name === 'Farid' && pass === '12345'){
            localStorage.setItem('session', true);
            setName('')
            setPass('')
            setLogged(true)
        }else{
            setError(true)
        }
    }

    const closeSes =() =>{
        localStorage.removeItem('session')
        setLogged(false)
        setError(false)
        router.push('./login')
    }

    const saveRate=()=>{
        setNRate(rate)
        localStorage.setItem('rate', rate);
    }

    const saveEmpr=()=>{
        setnEmpre(empr)
        localStorage.setItem('empre', empr);
        setEmpre('')
    }

    useEffect(() => {
        setLoading(true)
        const datoGuardado = localStorage.getItem('session');
        const rrate = localStorage.getItem('rate')
        const empresa = localStorage.getItem('empre')
        if (empresa) {
            setnEmpre(empresa)
        }
        if (datoGuardado) {
            setLogged(datoGuardado)
        }
        if (rrate) {
          setNRate(rrate)
        }
        setLoading(false)
    }, [logged])
    
    if(isLoading){
        return(
            <>
                Cargando...
            </>
        )
    }else{
        return (
          <>
              {logged?(
                  <div className="admin">
                    <h1>Bienvenido <span>Administrador</span></h1>
                    <div className="info">
                        <h3>Cambiar información de la empresa</h3>
                        <div className="forms">
                            <div>
                                <span>
                                    Nombre:
                                </span>
                                <input type="text" placeholder={nempr} value={empr} onChange={(e)=>setEmpre(e.target.value)}/>
                            </div>
                            <span>Nombre actual: {nempr}</span>
                            <button onClick={()=>saveEmpr()}>Guardar</button>
                            <div>
                                <span>
                                    Logo:
                                </span>
                                <input type="file" placeholder={empr}/>
                            </div>
                            <button>Guardar</button>
                        </div>
                    </div>
                    <div className="tasa">
                        <h3>Cambiar tasa de interes</h3>
                        <div>
                            <NumericFormat allowLeadingZeros={false} allowNegative={false} decimalScale={2} value={rate || ''} onChange={(e)=>{
                                if(e.target.value >=50){
                                    setRate('')
                                }else{
                                    setRate(e.target.value )
                                }
                            }}/>
                            <span>%</span>
                            <button type="button" onClick={()=>saveRate()}>Guardar</button>
                        </div>
                        <h3>Tasa de interes actual = <span>{nRate}</span></h3>
                    </div>
                    <button className="close" type="button" onClick={()=>closeSes()}>Cerrar Sesion</button>
                  </div>
              ):(
                  <div className="login">
                      <h1>
                          Iniciar Sesión
                      </h1>
                      <div>
                          <span>
                              Usuario
                          </span>
                      </div>
                      <input typet='text' value={name || ''} onChange={(e)=>setName(e.target.value)} placeholder="Farid"/>
                      <div>
                          <span>
                              Contraseña
                          </span>
                      </div>
                      <input type="password" value={pass || ''} onChange={(e)=>setPass(e.target.value)} placeholder="12345"/>
                      <button type="button" onClick={()=>log()}>Ingresar</button>
                      {error&&(
                          <h2>Usuario o contraseña no coincide</h2>
                      )}
                  </div>
              )}
              
          </>
        )
    }
}

export default Login