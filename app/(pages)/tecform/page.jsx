import Image from 'next/image'
import React from 'react'
import TecLogo from '@public/icons/tec-logo.png'
import SanfraLogo from '@public/icons/sanfrancisco.png'
import TecAsset1 from '@public/images/tec-asset1.png'


const TecForm = () => {
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
                    <div className="tec-input">
                        <input name='name' type='text' placeholder='Cédula'/>
                    </div>
                    <div className="tec-input">
                        <input name='name' type='text' placeholder='Nombres'/>
                    </div>
                    <div className="tec-input">
                        <input name='last' type='text' placeholder='Apellidos'/>
                    </div>
                    <div className="tec-input">
                        <input name='email' type='text' placeholder='Email'/>
                    </div>
                    <div className="tec-input">
                        <input name='phone' type='text' placeholder='Teléfono'/>
                    </div>
                    <div className="tec-input">
                        <select>
                            <option>Provincia</option>
                            <option>Azuay</option>
                        </select>
                    </div>
                    <div className="tec-input">
                        <select>
                            <option>Cantón</option>
                            <option>Azuay</option>
                        </select>
                    </div>
                    <div className="tec-checkbox">
                        <input type='checkbox'/>
                        <span>Acepto los <a>términos y condiciones</a></span>
                    </div>
                    <button className="tec-btn">Enviar</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default TecForm