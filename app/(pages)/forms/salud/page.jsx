'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import SanfraLogo from '@public/icons/sanfrancisco.png'
import SaludLogo from '@public/icons/salud-logo.png'
import cities from '@public/const/citiesData'
import doctors from '@public/const/doctorData'
import segments from '@public/const/segments'
import provinces from '@public/const/provincesData'


const personData = async () =>{
    try{
        const uri = process.env.PUBLIC_URL;
        const res = await fetch(`${uri}api/salud`,{
            method: "GET",
            headers: {
            "Content-Type":"application/json"
            }
        })
  
        if(!res.ok){
            throw new Error("Failed")
        }
  
        const ponse = await res.json()
        return ponse.saludpersons
    }catch (error) {
        console.log(error)
    }
}

const postNewPerson = async (newPerson) => {
    try {
        const uri = process.env.PUBLIC_URL;
        const res = await fetch(`${uri}api/salud`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
            body: JSON.stringify(newPerson),
        });
    
        if (!res.ok) {
            throw new Error('Failed to post new Person')
        }
  
      // Optionally, you can handle the response after posting if needed
      const postedPerson = await res.json()
  
      // Fetch updated data after posting
      const updatedData = await personData()
      return updatedData
    } catch (error) {
      console.error('Error:', error)
      throw error
    }
  }

const SaludForm = () => {

    /* Persons */
    const [personsData, setPersonsData] = useState([])

    const [province, setProvince] = useState(0)
    const [city, setCity] = useState(0)
    const [filtered, setFiltered] = useState([])
    const [accepted, setAccepted] = useState(false)
    const [accepted2, setAccepted2] = useState(false)

    /* FormData */
    const [ced, setCed] = useState('')
    const [name, setName] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [emailWrong, setEmailWrong] = useState(false)
    const [phone, setPhone] = useState('')
    const [amount, setAmount] = useState('')
    const [speciality, setSpeciality] = useState(0)
    const [doctor, setDoctor] = useState(0)
    const [filteredDoctors, setFilteredDoctors] = useState([])

    const [dataSent, setDataSent] = useState(false)

    const handleCed= (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 10) {
          setCed(value)
        }
    }

    const handlePhone = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 10) {
          setPhone(value)
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        const value = e.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setEmailWrong(true)
        }else{
            setEmailWrong(false)
        }
    }

    const handleAmount = (e) => {
      const value = e.target.value;
      if (value === '' || (Number(value) <= 10000 && Number(value) >= 0)) {
        setAmount(value);
      }
    };

    const citiesFiltered = (p) => {
        let res = cities
        const provinceId = parseInt(p);
        if(p > 0){
            res = res.filter((city) => city.prov === provinceId)
        }
        return res
    }

    const doctorsFiltered = (p) => {
        let res = doctors
        const segmentId = parseInt(p);
        if(p > 0){
            res = res.filter((doctor) => doctor.segmentId === segmentId)
        }
        return res
    }

    const specialityDoctor = () => {
        let res = filteredDoctors.find(doc => doc.id === Number(doctor))
        if(res){
            return (
                <>
                    Especialidad: <br/>
                    <b>
                        {res.specialization}
                    </b>
                </>
            )
        }else{
            return
        }
    }

    const handleProvince = (e) => {
        setProvince(e.target.value)
        setFiltered(citiesFiltered(e.target.value))
    }

    const handleSegment = (e) => {
        setDoctor(0)
        setSpeciality(e.target.value)
        setFilteredDoctors(doctorsFiltered(e.target.value))
    }

    const sendable = () => {
        let res = true
        if(name < 2 || last < 2 || ced < 10 || phone < 10 || emailWrong || province === 0 || city === 0 || !accepted || !accepted2 || amount < 100){
            res = false
        }
        return res
    }

    const sendData = () => {
        setDataSent(true)
        setTimeout(() => {
            setCed('')
            setName('')
            setLast('')
            setPhone('')
            setEmail('')
            setAccepted(false)
            setAccepted2(false)
            setProvince(0)
            setCity(0)
            setAmount('')
            handlePostPerson()
            setDoctor(0)
            setSpeciality(0)
            setFiltered([])
        }, 1500)
        setTimeout(() => {
            setDataSent(false)
        }, 4000)
    }

    useEffect(()=>{
        setFiltered(citiesFiltered(23))
    },[])

    useEffect(()=>{
        const fetchAndLoadPersons= async () =>{
            try{
              const fetchData = await personData()
              if(fetchData.length > 0){
                setPersonsData(fetchData)
              }
            }catch (e){
              console.log(e)
            }
        }
        fetchAndLoadPersons()
    },[])

    const handlePostPerson = async () => {
        let ct= cities.find((citi) => citi.id === parseInt(city))
        let pr= provinces.find((citi) => citi.id === parseInt(province))
        let dc = filteredDoctors.find(doc => doc.id === Number(doctor))

        const newPerson = {

            ced: ced,
            name: name,
            last: last,
            email: email,
            phone: phone,
            province: pr.name,
            city: ct.name,
            amount: amount,
            doc: dc.name
        }
        try {
          const updatedData = await postNewPerson(newPerson)
          setPersonsData(updatedData)
        } catch (error) {
          console.error('Error posting new person:', error)
        }
      }

  return (
    <>
        <section className='main-salud'>
            <div className="logo-wrap">
                <div className="logo-holder">
                    <Image src={SanfraLogo} width={200} height={'auto'} alt='Sf logo'/>
                </div>
                <div className="logo-holder">
                    <Image src={SaludLogo} width={200} height={'auto'} alt='Sf logo'/>
                </div>
            </div>
            <div className="form-header">
                <div className="title-hd">
                    <h1>
                        SOLICITA TU
                        <br/>
                        <span>CREDI SALUD</span>
                    </h1>
                </div>
                <div className="title-hd bg">
                    <h1>
                        SOLICITA TU
                        <br/>
                        <span>CREDI SALUD</span>
                    </h1>
                </div>
            </div>
            <div className="descrip-hd">
                <p>
                    Al <span>14% de interés</span>
                </p>
            </div>
            <div className="slider">
                <div className="slider-track">
                    <div className='slide'>
                      EMERGENCIA
                    </div>
                    <div className='slide'>
                      HOSPITALIZACIÓN
                    </div>
                    <div className='slide'>
                      CONSULTA EXTERNA
                    </div>
                    <div className='slide'>
                      CIRUGÍA
                    </div>
                    <div className='slide'>
                      CUIDADOS INTENSIVOS
                    </div>
                    <div className='slide'>
                      CENTRO DE IMÁGENES
                    </div>
                    <div className='slide'>
                      LABORATORIO CLÍNICO
                    </div>
                    <div className='slide'>
                      GASTROENTEROLOGÍA
                    </div>
                </div>
                <div className="slider-track">
                  <div className='slide'>
                      EMERGENCIA
                    </div>
                    <div className='slide'>
                      HOSPITALIZACIÓN
                    </div>
                    <div className='slide'>
                      CONSULTA EXTERNA
                    </div>
                    <div className='slide'>
                      CIRUGÍA
                    </div>
                    <div className='slide'>
                      CUIDADOS INTENSIVOS
                    </div>
                    <div className='slide'>
                      CENTRO DE IMÁGENES
                    </div>
                    <div className='slide'>
                      LABORATORIO CLÍNICO
                    </div>
                    <div className='slide'>
                      GASTROENTEROLOGÍA
                    </div>
                </div>
            </div>
            <div className="form-body">
                <div className='body-inp'>
                    <div className="body-header">
                        Selecciona la especilidad <br/>
                        <b>de interes</b>
                    </div>
                    <div className="auto-input">
                        <select onChange={handleSegment} value={speciality}>
                            <option value={0}>Especialidad</option>
                            {
                                segments.map((seg, i)=>(
                                    <option value={seg.id} key={i}>{seg.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="body-header">
                        Selecciona el doctor <br/>
                        <b>de interes</b>
                    </div>
                    <div className="auto-input">
                        <select onChange={(e)=>setDoctor(e.target.value)} value={doctor}>
                            <option value={0}>Doctor</option>
                            {
                                filteredDoctors.map((doc, i)=>(
                                    <option value={doc.id} key={i}>{doc.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="body-span">
                        {specialityDoctor()}
                    </div>
                    <div className={ced.length===10 || ced===''?"auto-input":"auto-input error-msg"}>
                        <input name='ced' type='text' placeholder='Cédula' onChange={handleCed} value={ced}/>
                    </div>
                    <div className={name.length>1 || name===''?"auto-input":"auto-input error-msg"}>
                        <input name='name' type='text' placeholder='Nombre' onChange={(e)=> setName(e.target.value)} value={name}/>
                    </div>
                    <div className={last.length>1 || last===''?"auto-input":"auto-input error-msg"}>
                        <input name='last' type='text' placeholder='Apellido' onChange={(e)=> setLast(e.target.value)} value={last}/>
                    </div>
                    <div className={!emailWrong?"auto-input":"auto-input error-msg"}>
                        <input name='email' type='email' placeholder='Email' onChange={handleEmail} value={email}/>
                    </div>
                    <div className={phone.length===10 || phone===''?"auto-input":"auto-input error-msg"}>
                        <input name='phone' type='text' placeholder='Teléfono' onChange={handlePhone} value={phone}/>
                    </div>
                    <div className="auto-input">
                        <select onChange={handleProvince} value={province}>
                            <option value={0}>Provincia</option>
                            {
                                provinces.map((prov, i)=>(
                                    <option value={prov.id} key={i}>{prov.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="auto-input">
                        <select onChange={(e)=>setCity(e.target.value)} value={city}>
                            <option value={0}>Cantón</option>
                            {
                                filtered.map((citi, i)=>(
                                    <option value={citi.id} key={i}>{citi.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className={amount < 100 && amount.length > 0?"auto-input error-msg":"auto-input"}>
                        <input name='amount' type='number' placeholder='Monto' onChange={handleAmount} value={amount}/>
                    </div>
                    <div className="tec-checkbox">
                        <input type='checkbox' checked={accepted} onChange={(e)=>setAccepted(e.target.value)}/>
                        <span>Acepto los <a href="/docs/Politica_Proteccion_Datos.pdf" target='_blank'>términos y condiciones</a></span>
                    </div>
                    <div className="tec-checkbox">
                        <input type='checkbox' checked={accepted2} onChange={(e)=>setAccepted2(e.target.value)}/>
                        <span>Autorizo revisión central de riesgos</span>
                    </div>
                    <button className={sendable()?"tec-btn":"tec-btn disabled"} onClick={()=>sendData()}>Enviar</button>
                <div className='auto-footer'/>
                </div>
            </div>
            {
                <>
                    <div className={dataSent?'done-form show':'done-form'}>
                        <h1>
                            Tus datos se han guardado!
                        </h1>
                    </div>
                    <div className={dataSent?'overlay-form show': 'overlay-form'}/>
                </>
            }
        </section>
    </>
  )
}

export default SaludForm