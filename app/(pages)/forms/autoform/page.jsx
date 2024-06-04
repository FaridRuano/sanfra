'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import SanfraLogo from '@public/icons/sanfrancisco.png'


const personData = async () =>{
    try{
        const uri = process.env.PUBLIC_URL;
        const res = await fetch(`${uri}api/auto`,{
            method: "GET",
            headers: {
            "Content-Type":"application/json"
            }
        })
  
        if(!res.ok){
            throw new Error("Failed")
        }
  
        const ponse = await res.json()
        return ponse.autopersons
    }catch (error) {
        console.log(error)
    }
}

const postNewPerson = async (newPerson) => {
    try {
        const uri = process.env.PUBLIC_URL;
        const res = await fetch(`${uri}api/auto`,{
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

const TecForm = () => {

    /* Persons */
    const [personsData, setPersonsData] = useState([])

    const [province, setProvince] = useState(0)
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

    const provinces = [
        { id: 1, name: 'Azuay' },
        { id: 2, name: 'Bolívar' },
        { id: 3, name: 'Cañar' },
        { id: 4, name: 'Carchi' },
        { id: 5, name: 'Chimborazo' },
        { id: 6, name: 'Cotopaxi' },
        { id: 7, name: 'El Oro' },
        { id: 8, name: 'Esmeraldas' },
        { id: 9, name: 'Galápagos' },
        { id: 10, name: 'Guayas' },
        { id: 11, name: 'Imbabura' },
        { id: 12, name: 'Loja' },
        { id: 13, name: 'Los Ríos' },
        { id: 14, name: 'Manabí' },
        { id: 15, name: 'Morona Santiago' },
        { id: 16, name: 'Napo' },
        { id: 17, name: 'Orellana' },
        { id: 18, name: 'Pastaza' },
        { id: 19, name: 'Pichincha' },
        { id: 20, name: 'Santa Elena' },
        { id: 21, name: 'Santo Domingo de los Tsáchilas' },
        { id: 22, name: 'Sucumbíos' },
        { id: 23, name: 'Tungurahua' },
        { id: 24, name: 'Zamora Chinchipe' }
    ]

    const cities = [
        // Cantones de Azuay
        { id: 1, prov: 1, name: 'Cuenca' },
        { id: 2, prov: 1, name: 'Gualaceo' },
        { id: 3, prov: 1, name: 'Sigsig' },
        { id: 4, prov: 1, name: 'Paute' },
        { id: 5, prov: 1, name: 'Chordeleg' },
        { id: 6, prov: 1, name: 'Girón' },
        { id: 7, prov: 1, name: 'Santa Isabel' },
        { id: 8, prov: 1, name: 'El Pan' },
        { id: 9, prov: 1, name: 'Sevilla de Oro' },
        { id: 10, prov: 1, name: 'Guachapala' },
        { id: 11, prov: 1, name: 'Camilo Ponce Enríquez' },
        { id: 12, prov: 1, name: 'Nabón' },
        { id: 13, prov: 1, name: 'San Fernando' },
        { id: 14, prov: 1, name: 'Pucará' },
        { id: 15, prov: 1, name: 'Paute' },
        // Cantones de Bolívar
        { id: 16, prov: 2, name: 'Guaranda' },
        { id: 17, prov: 2, name: 'Chillanes' },
        { id: 18, prov: 2, name: 'Chimbo' },
        { id: 19, prov: 2, name: 'Echeandía' },
        { id: 20, prov: 2, name: 'San Miguel' },
        { id: 21, prov: 2, name: 'Caluma' },
        { id: 22, prov: 2, name: 'Las Naves' },
        // Cantones de Cañar
        { id: 23, prov: 3, name: 'Azogues' },
        { id: 24, prov: 3, name: 'Biblián' },
        { id: 25, prov: 3, name: 'Cañar' },
        { id: 26, prov: 3, name: 'La Troncal' },
        { id: 27, prov: 3, name: 'El Tambo' },
        { id: 28, prov: 3, name: 'Déleg' },
        { id: 29, prov: 3, name: 'Suscal' },
        // Cantones de Carchi
        { id: 30, prov: 4, name: 'Tulcán' },
        { id: 31, prov: 4, name: 'Bolívar' },
        { id: 32, prov: 4, name: 'Espejo' },
        { id: 33, prov: 4, name: 'Mira' },
        { id: 34, prov: 4, name: 'Montúfar' },

        // Cantones de Chimborazo
        { id: 35, prov: 5, name: 'Riobamba' },
        { id: 36, prov: 5, name: 'Alausí' },
        { id: 37, prov: 5, name: 'Colta' },
        { id: 38, prov: 5, name: 'Chambo' },
        { id: 39, prov: 5, name: 'Chunchi' },
        { id: 40, prov: 5, name: 'Guamote' },
        { id: 41, prov: 5, name: 'Guano' },
        { id: 42, prov: 5, name: 'Pallatanga' },
        { id: 43, prov: 5, name: 'Penipe' },

        // Cantones de Cotopaxi
        { id: 44, prov: 6, name: 'Latacunga' },
        { id: 45, prov: 6, name: 'La Maná' },
        { id: 46, prov: 6, name: 'Pangua' },
        { id: 47, prov: 6, name: 'Pujilí' },
        { id: 48, prov: 6, name: 'Salcedo' },
        { id: 49, prov: 6, name: 'Saquisilí' },
        { id: 50, prov: 6, name: 'Sigchos' },

        // Cantones de El Oro
        { id: 51, prov: 7, name: 'Machala' },
        { id: 52, prov: 7, name: 'Arenillas' },
        { id: 53, prov: 7, name: 'Atahualpa' },
        { id: 54, prov: 7, name: 'Balsas' },
        { id: 55, prov: 7, name: 'Chilla' },
        { id: 56, prov: 7, name: 'El Guabo' },
        { id: 57, prov: 7, name: 'Huaquillas' },
        { id: 58, prov: 7, name: 'Marcabelí' },
        { id: 59, prov: 7, name: 'Pasaje' },
        { id: 60, prov: 7, name: 'Piñas' },
        { id: 61, prov: 7, name: 'Portovelo' },
        { id: 62, prov: 7, name: 'Santa Rosa' },
        { id: 63, prov: 7, name: 'Zaruma' },

        // Cantones de Esmeraldas
        { id: 64, prov: 8, name: 'Esmeraldas' },
        { id: 65, prov: 8, name: 'Eloy Alfaro' },
        { id: 66, prov: 8, name: 'Muisne' },
        { id: 67, prov: 8, name: 'Quinindé' },
        { id: 68, prov: 8, name: 'San Lorenzo' },

        // Cantones de Galápagos
        { id: 69, prov: 9, name: 'San Cristóbal' },
        { id: 70, prov: 9, name: 'Santa Cruz' },
        { id: 71, prov: 9, name: 'Isabela' },

        // Cantones de Guayas
        { id: 72, prov: 10, name: 'Guayaquil' },
        { id: 73, prov: 10, name: 'Alfredo Baquerizo Moreno (Jujan)' },
        { id: 74, prov: 10, name: 'Balao' },
        { id: 75, prov: 10, name: 'Balzar' },
        { id: 76, prov: 10, name: 'Colimes' },
        { id: 77, prov: 10, name: 'Daule' },
        { id: 78, prov: 10, name: 'Durán' },
        { id: 79, prov: 10, name: 'El Empalme' },
        { id: 80, prov: 10, name: 'El Triunfo' },
        { id: 81, prov: 10, name: 'General Antonio Elizalde (Bucay)' },
        { id: 82, prov: 10, name: 'General Villamil (Playas)' },
        { id: 83, prov: 10, name: 'Isidro Ayora' },
        { id: 84, prov: 10, name: 'Lomas de Sargentillo' },
        { id: 85, prov: 10, name: 'Milagro' },
        { id: 86, prov: 10, name: 'Naranjal' },
        { id: 87, prov: 10, name: 'Naranjito' },
        { id: 88, prov: 10, name: 'Palestina' },
        { id: 89, prov: 10, name: 'Pedro Carbo' },
        { id: 90, prov: 10, name: 'Samborondón' },
        { id: 91, prov: 10, name: 'Santa Lucía' },
        { id: 92, prov: 10, name: 'Simón Bolívar' },
        { id: 93, prov: 10, name: 'Yaguachi' },

        // Cantones de Imbabura
        { id: 94, prov: 11, name: 'Ibarra' },
        { id: 95, prov: 11, name: 'Antonio Ante' },
        { id: 96, prov: 11, name: 'Cotacachi' },
        { id: 97, prov: 11, name: 'Otavalo' },
        { id: 98, prov: 11, name: 'Pimampiro' },
        { id: 99, prov: 11, name: 'San Miguel de Urcuquí' },

        // Cantones de Loja
        { id: 100, prov: 12, name: 'Loja' },
        { id: 101, prov: 12, name: 'Calvas' },
        { id: 102, prov: 12, name: 'Catamayo' },
        { id: 103, prov: 12, name: 'Celica' },
        { id: 104, prov: 12, name: 'Chaguarpamba' },
        { id: 105, prov: 12, name: 'Espíndola' },
        { id: 106, prov: 12, name: 'Gonzanamá' },
        { id: 107, prov: 12, name: 'Macará' },
        { id: 108, prov: 12, name: 'Paltas' },
        { id: 109, prov: 12, name: 'Puyango' },
        { id: 110, prov: 12, name: 'Saraguro' },
        { id: 111, prov: 12, name: 'Sozoranga' },
        { id: 112, prov: 12, name: 'Zapotillo' },

        // Cantones de Los Ríos
        { id: 113, prov: 13, name: 'Babahoyo' },
        { id: 114, prov: 13, name: 'Baba' },
        { id: 115, prov: 13, name: 'Montalvo' },
        { id: 116, prov: 13, name: 'Pueblo Viejo' },
        { id: 117, prov: 13, name: 'Quevedo' },
        { id: 118, prov: 13, name: 'Urdaneta' },
        { id: 119, prov: 13, name: 'Ventanas' },
        { id: 120, prov: 13, name: 'Vinces' },

        // Cantones de Manabí
        { id: 121, prov: 14, name: 'Portoviejo' },
        { id: 122, prov: 14, name: 'Bolívar' },
        { id: 123, prov: 14, name: 'Chone' },
        { id: 124, prov: 14, name: 'El Carmen' },
        { id: 125, prov: 14, name: 'Flavio Alfaro' },
        { id: 126, prov: 14, name: 'Jama' },
        { id: 127, prov: 14, name: 'Jaramijó' },
        { id: 128, prov: 14, name: 'Junín' },
        { id: 129, prov: 14, name: 'Manta' },
        { id: 130, prov: 14, name: 'Montecristi' },
        { id: 131, prov: 14, name: 'Olmedo' },
        { id: 132, prov: 14, name: 'Paján' },
        { id: 133, prov: 14, name: 'Pedernales' },
        { id: 134, prov: 14, name: 'Pichincha' },
        { id: 135, prov: 14, name: 'Puerto López' },
        { id: 136, prov: 14, name: 'Rocafuerte' },
        { id: 137, prov: 14, name: 'San Vicente' },
        { id: 138, prov: 14, name: 'Santa Ana' },
        { id: 139, prov: 14, name: 'Sucre' },
        { id: 140, prov: 14, name: 'Tosagua' },
        { id: 141, prov: 14, name: '24 de Mayo' },

        // Cantones de Morona Santiago
        { id: 142, prov: 15, name: 'Macas' },
        { id: 143, prov: 15, name: 'Gualaquiza' },
        { id: 144, prov: 15, name: 'Huamboya' },
        { id: 145, prov: 15, name: 'Limón Indanza' },
        { id: 146, prov: 15, name: 'Logroño' },
        { id: 147, prov: 15, name: 'Morona' },
        { id: 148, prov: 15, name: 'Pablo Sexto' },
        { id: 149, prov: 15, name: 'Palora' },
        { id: 150, prov: 15, name: 'San Juan Bosco' },
        { id: 151, prov: 15, name: 'Santiago' },

        // Cantones de Napo
        { id: 152, prov: 16, name: 'Tena' },
        { id: 153, prov: 16, name: 'Archidona' },
        { id: 154, prov: 16, name: 'El Chaco' },
        { id: 155, prov: 16, name: 'Quijos' },

        // Cantones de Orellana
        { id: 156, prov: 17, name: 'Orellana' },
        { id: 157, prov: 17, name: 'Aguarico' },
        { id: 158, prov: 17, name: 'La Joya de los Sachas' },
        { id: 159, prov: 17, name: 'Loreto' },

        // Cantones de Pastaza
        { id: 160, prov: 18, name: 'Pastaza' },
        { id: 161, prov: 18, name: 'Mera' },
        { id: 162, prov: 18, name: 'Santa Clara' },
        { id: 163, prov: 18, name: 'Arajuno' },

        // Cantones de Pichincha
        { id: 164, prov: 19, name: 'Quito' },
        { id: 165, prov: 19, name: 'Cayambe' },
        { id: 166, prov: 19, name: 'Mejía' },
        { id: 167, prov: 19, name: 'Pedro Moncayo' },
        { id: 168, prov: 19, name: 'Rumiñahui' },
        { id: 169, prov: 19, name: 'San Miguel de los Bancos' },
        { id: 170, prov: 19, name: 'Pedro Vicente Maldonado' },

        // Cantones de Santa Elena
        { id: 171, prov: 20, name: 'Santa Elena' },
        { id: 172, prov: 20, name: 'La Libertad' },
        { id: 173, prov: 20, name: 'Salinas' },

        // Cantones de Santo Domingo de los Tsáchilas
        { id: 174, prov: 21, name: 'Santo Domingo' },
        { id: 175, prov: 21, name: 'La Concordia' },

        // Cantones de Sucumbíos
        { id: 176, prov: 22, name: 'Nueva Loja' },
        { id: 177, prov: 22, name: 'Cascales' },
        { id: 178, prov: 22, name: 'Cuyabeno' },
        { id: 179, prov: 22, name: 'Gonzalo Pizarro' },
        { id: 180, prov: 22, name: 'Putumayo' },
        { id: 181, prov: 22, name: 'Shushufindi' },

        // Cantones de Tungurahua
        { id: 182, prov: 23, name: 'Ambato' },
        { id: 183, prov: 23, name: 'Baños de Agua Santa' },
        { id: 184, prov: 23, name: 'Cevallos' },
        { id: 185, prov: 23, name: 'Mocha' },
        { id: 186, prov: 23, name: 'Patate' },
        { id: 187, prov: 23, name: 'Quero' },
        { id: 188, prov: 23, name: 'Pelileo' },
        { id: 189, prov: 23, name: 'Pillaro' },
        { id: 190, prov: 23, name: 'Tisaleo' },


        // Cantones de Zamora Chinchipe
        { id: 191, prov: 24, name: 'Zamora' },
        { id: 192, prov: 24, name: 'Chinchipe' },
        { id: 193, prov: 24, name: 'Nangaritza' },
        { id: 194, prov: 24, name: 'Yacuambi' },
        { id: 195, prov: 24, name: 'Yantzaza' },
        { id: 196, prov: 24, name: 'El Pangui' },
    ]

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
            setProvince(0)
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
        let pr= provinces.find((citi) => citi.id === parseInt(province))


        const newPerson = {

            ced: ced,
            name: name,
            last: last,
            email: email,
            phone: phone,
            province: pr.name,
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
        <section className='main-auto'>
            <div className="logo-wrap">
                <div className="logo-holder">
                    <Image src={SanfraLogo} width={200} height={'auto'} alt='Sf logo'/>
                </div>
            </div>
            <div className="form-header">
                <div className="title-hd">
                    <h1>
                        REGISTRATE
                        <br/>
                        Y GANA
                    </h1>
                </div>
                <div className="title-hd bg">
                    <h1>
                        REGISTRATE
                        <br/>
                        Y GANA
                    </h1>
                </div>
            </div>
            <div className="descrip-hd">
                <p>
                    Participa por <span>INCREIBLES</span> premios
                </p>
            </div>
            <div className="slider">
                <div className="slider-track">
                    <div className='slide'>
                        CAMBIO DE ACEITE
                    </div>
                    <div className='slide'>
                        MANTENIMIENTO
                    </div>
                    <div className='slide'>
                        LAVADA DE AUTO
                    </div>
                    <div className='slide'>
                        ACCESORIOS
                    </div>
                    <div className='slide'>
                        CAMBIO DE ACEITE
                    </div>
                    <div className='slide'>
                        MANTENIMIENTO
                    </div>
                    <div className='slide'>
                        LAVADA DE AUTO
                    </div>
                    <div className='slide'>
                        ACCESORIOS
                    </div>
                </div>
            </div>
            <div className="form-body">
                <div className="body-inp">
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
                    <div className="tec-checkbox">
                        <input type='checkbox' checked={accepted} onChange={(e)=>setAccepted(e.target.value)}/>
                        <span>Acepto los <a href="/docs/Politica_Proteccion_Datos.pdf" target='_blank'>términos y condiciones</a></span>
                    </div>
                    <button className={sendable()?"tec-btn":"tec-btn disabled"} onClick={()=>sendData()}>Enviar</button>
                </div>
                <div className='auto-footer'/>
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