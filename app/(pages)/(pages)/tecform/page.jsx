'use client'
import cities from '@public/const/citiesData.js'
import provinces from '@public/const/provincesData.js'
import axios from 'axios'
import { useState } from 'react'

const AutoForm = () => {

    const [loading, setLoading] = useState(false)

    const [userData, setUserData] = useState({
        ced: '',
        name: '',
        last: '',
        email: '',
        phone: '',
    })

    const [province, setProvince] = useState(0)

    const [citiesForm, setCitiesForm] = useState([])
    const [city, setCity] = useState(0)

    const [error, setError] = useState('')
    const [errorV, setErrorV] = useState(false)


    const handleUserData = (e) => {

        const {value, name} = e.target

        if ((name === 'ced' || name === 'phone') && /[a-zA-Z]/.test(value)) {
            return
        }

        setUserData(prev => ({
            ...prev,
            [name] : value
        }))
    }

    const handleProvince = (e) => {
        const value = parseInt(e.target.value)
        setProvince(value)

        setCity(() => {
            const filteredCities = cities.filter((city) => city.prov === value)
            setCitiesForm(filteredCities)
            return 0
        })
    }

    const handleCity = (e) => {
        const value = e.target.value

        if(province === 0) {
            setCity(0)
            return
        }
        setCity(value)
    }

    const startLoading = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 7000)
    };

    const handleSubmitData = async (e) => {
        e.preventDefault()

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(userData.ced.length < 10 || userData.phone.length < 10 || userData.name.length < 1 || userData.last.length < 1 || userData.email.length < 10 || province < 1 || city < 1){
            setError('Tienes campos vacios aún, porfavor completa el formulario.')
            setErrorV(true)
            return
        }else{
            setErrorV(false)
        }

        if(!emailRegex.test(userData.email)) {
            setError('El email no es válido, verifica el email.')
            setErrorV(true)
            return
        }

        const selectedProvince = provinces.find(prov => prov.id === province)
        const provinceName = selectedProvince ? selectedProvince.name : ''

        const selectedCity = cities.find(cit => parseInt(cit.id) === parseInt(city))
        const cityName = selectedCity ? selectedCity.name : ''

        const newUser = {
            ced: userData.last,
            name: userData.name,
            last: userData.last,
            email: userData.email,
            phone: userData.phone,
            province: provinceName,
            city: cityName
        }

        try{
            const res = await axios.post(`/api/forms/tec`, newUser)
            if(res.data){
                setUserData({
                    ced: '',
                    name: '',
                    last: '',
                    email: '',
                    phone: '',
                })
                setProvince(0)
                setCity(0)
                startLoading()
              }else{
                setError('Hubo un problema intenta de nuevo.')
                setErrorV(true)
              }
        }catch(e){
            console.log(e)
        }
    }

  return (
    <section className='form'>
        <div className="form-wrap">
            <div className="form-header">
                <h1>Ingresa tus datos para participar</h1>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmitData}>
                    <div className="input-field">
                        <input type="text" placeholder='Cédula' maxLength={10} name='ced' onChange={handleUserData} value={userData.ced}/>
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder='Nombre' name='name' maxLength={100} onChange={handleUserData} value={userData.name}/>
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder='Apellido' name='last' maxLength={100} onChange={handleUserData} value={userData.last}/>
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder='Email' name='email' maxLength={100} onChange={handleUserData} value={userData.email}/>
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder='Teléfono' maxLength={10} name='phone' onChange={handleUserData} value={userData.phone}/>
                    </div>
                    <div className="input-field">
                        <select onChange={handleProvince}>
                            <option>Provincia</option>
                            {provinces.map((province, id) => (
                                <option key={id} value={province.id}>
                                    {province.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={`input-field ${province === 0 ? 'dis':''}`}>
                        <select onChange={handleCity}>
                            <option value={0} >Cantón</option>
                            {
                                citiesForm.map((city, id) => (
                                    <option key={id} value={city.id}>
                                        {city.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="btn-field">
                        <button type='submit'>Enviar</button>
                    </div>
                    <div className={errorV?"err-field":"err-field hide"}>
                        <p>
                            {error}
                        </p>
                    </div>
                </form>
            </div>
        </div>
        <div className={loading ? "sent-user show" : " sent-user"}>
            <h1>
                Ya estas participando
            </h1>
        </div>
    </section>
  )
}

export default AutoForm