'use client'
import React, { useEffect, useState } from 'react'
import SanfraLogo from '@public/icons/sanfrancisco.png'
import Image from 'next/image'
import { useRouter } from "next/navigation";


const Admin = () => {

  /* Next Tools */
  const router = useRouter()

  /* User Login Info */
  const [usName, setUsName] = useState('')
  const [usPass, setUsPass] = useState('')
  const [loginError, setError] = useState('')
  
  /* Info Validation  */
  const isInfoValid = () => {
    if(isReady()){
      if(usName === 'Admin' && usPass === 'Admin123'){
        router.push('/admin/home')
      }else{
        setError('Usuario no encontrado')
        setTimeout(()=>{
          setError('')
        }, 5000)
      }
    }else{
      setError('Campos incompletos')
        setTimeout(()=>{
          setError('')
        }, 5000)
      return
    }
  }

  const handleSubmit = (e) => {
    isInfoValid()
    e.preventDefault()
  }

  /* Set Ready to Send */
  const isReady = () =>{
    if(usName.length > 0 && usPass.length > 0){
      return true
    }else{
      return false
    }
  }

  useEffect(()=>{
    const buttons = document.querySelectorAll('.spatial-btn')
    buttons.forEach(btn=>{
      btn.addEventListener('click', function(e){
        let x = 50
        let y = 50

        let ripples = document.createElement('span')
        ripples.style.left = x + '%'
        ripples.style.top = y + '%'
        this.appendChild(ripples)
        setTimeout(()=>{
          ripples.remove()
        }, 1000)
      })
    })
  },[])
 
  return (
    <div className='admin-login-container'>
        <div className="login-warp spatial-warp">
          <div className="warp">
            <div className="login-header">
              <Image src={SanfraLogo} height={50} width={'auto'} alt='SanFra'/>
            </div>
            <div className="login-body">
              <p>Iniciar Sesión</p>
              <form className='login-form' noValidate onSubmit={handleSubmit}>
                <div className="spatial-input">
                  <input type='text' name='usName' required autoComplete='off' onInvalid={(e)=>{
                    isInfoValid()
                    e.target.setCustomValidity('')
                  }} value={usName} onChange={(e)=>{
                    setUsName(e.target.value)
                    }}/>
                  <span>Usuario</span>
                </div>
                <div className="spatial-input">
                  <input type='password' name='usPass' required value={usPass} onChange={(e)=>{
                    setUsPass(e.target.value)
                    }}/>
                  <span>Contraseña</span>
                </div>
                <div className='checkbox-warp'>
                  <input type='checkbox'/>
                  <span><b>Recordarme</b> en este dispositivo.</span>
                </div>
                <button className='spatial-btn' type='submit'>Ingresar</button>
              </form>
              {
                loginError&&(
                  <span className='error-span'>{loginError}</span>
                )
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default Admin