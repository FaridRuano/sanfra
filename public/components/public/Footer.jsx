import React from 'react'
import Logo from '@public/assets/icons/logo-footer.webp'
import Phone from '@public/assets/icons/phone.webp'
import WhatsApp from '@public/assets/icons/whatsapp.webp'
import AppGallery from '@public/assets/icons/appgallery.webp'
import AppStore from '@public/assets/icons/appstore.webp'
import GooglePlay from '@public/assets/icons/googleplay.webp'
import Instagram from '@public/assets/icons/instagram.webp'
import Twitter from '@public/assets/icons/twitter.webp'
import Youtube from '@public/assets/icons/youtube.webp'
import Linkedin from '@public/assets/icons/linkedin.webp'
import Tiktok from '@public/assets/icons/tiktok.webp'
import Facebook from '@public/assets/icons/facebook.webp'




import Image from 'next/image'

const Footer = () => {
  return (
    <section className='main-footer'>
      <div className="logo">
        <Image src={Logo} width={150} height={'auto'} alt='Sanfra'/>
      </div>
      <div className="items">
        <div className="item">
          <div className="title">
            Contacto y Ayuda
          </div>
          <div className="list">
              <a>Línea telefónica</a>
              <div className='special'>
                <Image src={Phone} width={10} height={'auto'} alt='Phone'/>
                <a>1800-726372</a>
              </div>
              <a>WhatsApp</a>
              <div className='special'>
                <Image src={WhatsApp} width={14} height={'auto'} alt='Phone'/>
                <a>097 916 7915</a>
              </div>
          </div>
        </div>
        <div className="item">
          <div className="title">
            Canales digitales
          </div>
          <div className="list">
            <a>Sanfra Web</a>
            <a>Sanfra Móvil</a>
          </div>
        </div>
        <div className="item">
          <div className="title">
            De intéres
          </div>
          <div className="list">
            <a>Inversión en línea</a>
            <a>Solicitud de Créditos</a>
            <a>Ahorro flexible</a>
            <a>Para Empresas</a>
          </div>
        </div>
        <div className="item">
          <div className="title">
            Sobre nosotros
          </div>
          <div className="list">
            <a>¿Quienes somos?</a>
            <a>Trabaja con nosotros</a>
            <a>Tasas y Tarifas</a>
            <a>Transparencia</a>
            <a>Desarrollo sostenible</a>
          </div>
        </div>
      </div>
      <div className="outpage">
        <div className="movile">
          <div className="title">
            <h3>
              Sanfra Móvil
            </h3>
            <p>
              Descarga nuestra aplicación
            </p>
          </div>
          <div className="list">
            <Image src={AppStore} width={'auto'} height={30} alt='App Store'/>
            <Image src={GooglePlay} width={'auto'} height={30} alt='Google Play'/>
            <Image src={AppGallery} width={'auto'} height={30} alt='App Gallery'/>
          </div>
        </div>
        <div className="social">
          <div className="title">
            <h3>
              Siguénos en nuestras redes
            </h3>
          </div>
          <div className="list">
            <Image src={Twitter} width={'auto'} height={20} alt='Twitter'/>
            <Image src={Facebook} width={'auto'} height={20} alt='Facebook'/>
            <Image src={Instagram} width={'auto'} height={20} alt='Instagram'/>
            <Image src={Tiktok} width={'auto'} height={20} alt='Tiktok'/>
            <Image src={Linkedin} width={'auto'} height={20} alt='Linkedin'/>
            <Image src={Youtube} width={'auto'} height={20} alt='Youtube'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer