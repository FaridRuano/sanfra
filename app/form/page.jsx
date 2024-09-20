'use client'

import Logo from "@public/images/form/logo.png"
import Cloud from "@public/images/form/cloud.png"
import Card from "@public/images/form/card.png"
import Cloud2 from "@public/images/form/cloud2.png"
import Head from "@public/images/form/head.png"
import Image from "next/image"
import React, { useState } from 'react'
import CheckBox from "@public/components/CheckBox"

const postData = async(data) => {
  try {
      const uri = process.env.PUBLIC_URL;
      const res = await fetch(`${uri}api/form`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
          body: JSON.stringify(data),
      });

      if (!res.ok) {
          throw new Error('Failed to post new Person')
      }

    // Optionally, you can handle the response after posting if needed
    const postedPerson = await res.json()
    console.log(postedPerson)
      
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

const form = () => {

  /* Check */

  const [check, setCheck] = useState(false)

  const handleCheck = () => {
    setCheck(current => !current)
  }

  /* Form */

  const [data, setData] = useState({
    name: '',
    dni: '',
    email: '',
    phone: '',
  })

  const handleData = (e) => {
    const {name, value} = e.target

    setData(current => ({
      ...current,
      [name] : value
    }))
  }

  const handleSubmit = async(e) => {

    e.preventDefault()

    await postData(data)

    clean()
  }

  const verifyData = () => {
    if(data.name.length < 1 || data.dni.length < 1 || data.email.length < 1 || data.phone.length < 1 || check === false){
      return false
    }else{
      return true
    }
  }

  const clean = () => {
    setData({
      name: '',
      dni: '',
      email: '',
      phone: '',
    })
    setCheck(false)
  }
  

  return (
    <div className='party-form'>
      <div className='background'/>
      <Image className="head" src={Head} width={260} height={'auto'} alt="Image"/>
      <Image className="card" src={Card} width={360} height={'auto'} alt="Image"/>
      <Image className="cloud" src={Cloud2} width={460} height={'auto'} alt="Image"/>

      <div className="main">
        <div className="logo-wrap-f">
          <Image src={Logo} width={200} height={'auto'} alt="Logo Sanfra"/>
          <Image className="cloud" src={Cloud} width={360} height={'auto'} alt="Image"/>
        </div>
        <h3>
          Ingresa tus Datos
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="input-form-f">
            <input placeholder="Nombre" value={data.name} onChange={handleData} name="name"/>
          </div>
          <div className="input-form-f">
            <input placeholder="Cedúla" type="number" value={data.dni} onChange={handleData} name="dni" maxLength={10}/>
          </div>
          <div className="input-form-f">
            <input placeholder="Correo" value={data.email} onChange={handleData} name="email"/>
          </div>
          <div className="input-form-f">
            <input placeholder="Teléfono" type="number" value={data.phone} onChange={handleData} name="phone" maxLength={10}/>
          </div>
          <div className="checkbox">
            <CheckBox check={check} handleCheck={handleCheck}/>
          </div>
          <div className={verifyData() ? "input-form-f f": "input-form-f f disabled"} >
            <button type="submit" >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default form