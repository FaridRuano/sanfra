'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import TecLogo from '@public/icons/tec-logo.png'
import SanfraLogo from '@public/icons/sanfrancisco.png'
import TecAsset1 from '@public/images/tec-asset1.png'
import cities from '@public/const/citiesData'
import provinces from '@public/const/provincesData'

const personData = async () =>{
    try{
        const uri = process.env.PUBLIC_URL;
        const res = await fetch(`${uri}/api/tec`,{
            method: "GET",
            headers: {
            "Content-Type":"application/json"
            }
        })
  
        if(!res.ok){
            throw new Error("Failed")
        }
  
        const ponse = await res.json()
        return ponse.tecpersons
    }catch (error) {
        console.log(error)
    }
}

const postNewPerson = async (newPerson) => {
    try {
        const uri = process.env.PUBLIC_URL;
        const res = await fetch(`${uri}/api/tec`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
            body: JSON.stringify(newPerson),
        });
    
        if (!res.ok) {
            throw new Error('Failed to post new data')
        }
  
      // Optionally, you can handle the response after posting if needed
      const postedFaculty = await res.json()
  
      // Fetch updated data after posting
      const updatedData = await personData()
      return updatedData
    } catch (error) {
      console.error('Error:', error)
      throw error
    }
  }

const TecForm = () => {

    /* Persons */
    const [personsData, setPersonsData] = useState([])

    const [province, setProvince] = useState(23)
    const [city, setCity] = useState(0)
    const [filtered, setFiltered] = useState([])
    const [accepted, setAccepted] = useState(false)

    /* FormData */
    const [ced, setCed] = useState('')
    const [name, setName] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [emailWrong, setEmailWrong] = useState(false)
    const [phone, setPhone] = useState('')

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



    const citiesFiltered = (p) => {
        let res = cities
        const provinceId = parseInt(p);
        if(p > 0){
            res = res.filter((city) => city.prov === provinceId)
        }
        return res
    }

    const handleProvince = (e) => {
        setProvince(e.target.value)
        setFiltered(citiesFiltered(e.target.value))
    }

    const sendable = () => {
        let res = true
        if(name < 2 || last < 2 || ced < 10 || phone < 10 || emailWrong || province === 0 || city === 0 || !accepted){
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
            setProvince(23)
            setCity(0)
            handlePostPerson()
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

        const newPerson = {

            ced: ced,
            name: name,
            last: last,
            email: email,
            phone: phone,
            province: "Tungurahua",
            city: ct.name
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
        <section className='main-tec'>
            <div className="logo-wrap">
                <div className="logo-holder">
                    <Image src={SanfraLogo} width={200} height={'auto'} alt='Sf logo'/>
                </div>
                <div className="logo-holder">
                    <Image src={TecLogo} width={150} height={'auto'} alt='Tec-logo'/>
                </div>
            </div>
            <div className="form-body">
                <div className="body-hd">
                    <h1>
                        REGISTRATE
                    </h1>
                    <h2>
                        Y GANA
                    </h2>
                    <Image src={TecAsset1} width={400} height={'auto'} alt='Tec Asset 1'/>
                </div>
                <div className="body-inp">
                    <div className={ced.length===10 || ced===''?"tec-input":"tec-input error-msg"}>
                        <input name='ced' type='text' placeholder='Cédula' onChange={handleCed} value={ced}/>
                    </div>
                    <div className={name.length>1 || name===''?"tec-input":"tec-input error-msg"}>
                        <input name='name' type='text' placeholder='Nombre' onChange={(e)=> setName(e.target.value)} value={name}/>
                    </div>
                    <div className={last.length>1 || last===''?"tec-input":"tec-input error-msg"}>
                        <input name='last' type='text' placeholder='Apellido' onChange={(e)=> setLast(e.target.value)} value={last}/>
                    </div>
                    <div className={!emailWrong?"tec-input":"tec-input error-msg"}>
                        <input name='email' type='email' placeholder='Email' onChange={handleEmail} value={email}/>
                    </div>
                    <div className={phone.length===10 || phone===''?"tec-input":"tec-input error-msg"}>
                        <input name='phone' type='text' placeholder='Teléfono' onChange={handlePhone} value={phone}/>
                    </div>
                    <div className="tec-input">
                        <select onChange={handleProvince} value={province} disabled>
                            <option value={0}>Provincia</option>
                            {
                                provinces.map((prov, i)=>(
                                    <option value={prov.id} key={i}>{prov.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="tec-input">
                        <select onChange={(e)=>setCity(e.target.value)} value={city}>
                            <option value={0}>Cantón</option>
                            {
                                filtered.map((citi, i)=>(
                                    <option value={citi.id} key={i}>{citi.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="tec-checkbox">
                        <input type='checkbox' checked={accepted} onChange={(e)=>setAccepted(e.target.value)}/>
                        <span>Acepto los <a href="/docs/Politica_Proteccion_Datos.pdf" target='_blank'>términos y condiciones</a></span>
                    </div>
                    <button className={sendable()?"tec-btn":"tec-btn disabled"} onClick={()=>sendData()}>Enviar</button>
                </div>
            </div>
            {
                <>
                    <div className={dataSent?'done-form show':'done-form'}>
                        <h1>
                            Ya estas participando!
                        </h1>
                    </div>
                    <div className={dataSent?'overlay-form show': 'overlay-form'}/>
                </>
            }
        </section>
    </>
  )
}

export default TecForm