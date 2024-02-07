'use client'
import Image from "next/image"
import SaveAcc from '@public/images/save-account.jpg'
import { useEffect } from "react"
import Title1 from "@public/images/saving-p1.jpg"
import Title2 from "@public/images/saving-p2.jpg"
import Title3 from "@public/images/saving-p3.jpg"
import Title4 from "@public/images/saving2-p1.png"
import Title5 from "@public/images/saving2-p2.png"
import Title6 from "@public/images/saving2-p3.png"
import Title7 from "@public/images/saving3-p1.png"
import Title8 from "@public/images/saving3-p2.png"
import Title9 from "@public/images/saving3-p3.png"
import { Circle } from "react-feather"




const Products = () => {


  useEffect(()=>{
    const obvLong2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if(entry.isIntersecting){
              entry.target.classList.add('show')
          }
      })
    },{
        root: null, 
        rootMargin: '-40% 0px', 
    })

    const mainSa = document.getElementById('main-sa')

    obvLong2.observe(mainSa)

    window.addEventListener('scroll', function () {
      let titleWarp = document.getElementById('title-save')
      let title1 = document.getElementById('title1')
      let title2 = document.getElementById('title2')
      let title3 = document.getElementById('title3')

      let scrollTop = window.scrollY
      let scrollThreshold = 1320

      if (window.innerWidth <= 1000) {
        scrollThreshold = 1578; 
        if (window.innerWidth <= 600) {
          scrollThreshold = 1734;  
        }
      }
      if(titleWarp){
        let titleY = titleWarp.getBoundingClientRect().top
        if(titleY <= 174 && scrollTop >= scrollThreshold){
          titleWarp.classList.add('fixed')
        }else{
          titleWarp.classList.remove('fixed')
        }
        if(scrollTop >= scrollThreshold + 1000){
          titleWarp.classList.add('hide')
        }else{
          titleWarp.classList.remove('hide')
        }
      }
      if(title1 && title2 && title3){
        if (scrollTop >= scrollThreshold - 350) {
          title1.classList.add('fixed')
        } else {
          title1.classList.remove('fixed')
        }
        if (scrollTop >= scrollThreshold + 150 ) {
          title2.classList.add('fixed')
        } else {
          title2.classList.remove('fixed')
        }
        if (scrollTop >= scrollThreshold + 450 ) {
          title3.classList.add('fixed')
        } else {
          title3.classList.remove('fixed')
        }
      }
    })

  },[])
  return (
    <>
      <section className="title-sa">
        <h1>
          #TenloTodo <span>con tus ahorros</span>
        </h1>
      </section>
      <section className="main-sa" id="main-sa">
        <div className="text-warp">
          <h1>
            Cuenta de Ahorro
          </h1>
          <p>
            Empieza hoy , apertura tu cuenta de ahorros online 
            y administra tu dinero de 
            forma adecuada.
          </p>
          <h2>
            Beneficios
          </h2>
          <ul>
            <li>
              Tasas de interés competitivas.
            </li>
            <li>
              Respaldo y seguridad.
            </li>
            <li>
              Cooperativas en línea.
            </li>
            <li>
              Retiros y compras con tu tarjeta Visa Debit.
            </li>
            <li>
              Acceso a la red de cajeros automáticos BanRed.
            </li>
            <li>
              Facilidades para el pago de servicios mediante débito automático.
            </li>
          </ul>
          <h2>
            Requisítos
          </h2>
          <ul>
            <li>
              Copia de cédula de identidad.
            </li>
            <li>
              Recibo de pago de un servicio básico.
            </li>
            <li>
              Depásito inicial.
            </li>
          </ul>
          <h3>
            Persona Jurídica
          </h3>
          <ul>
            <li>
              RUC.
            </li>
            <li>
              Acta de constitución o estatuto.
            </li>
            <li>
              Copia certificada del nombramiento de representante legal.
            </li>
          </ul>
        </div>
        <div className="img-warp">
          <div className="img-holder">
            <Image src={SaveAcc} width={1000} height={'auto'} alt='Saving'/>            
          </div>
          <div className="btn">
            <a href="https://online.coac-sanfra.com/cuentafacil/1" target="_blank">
              Abrir Cuenta
            </a>
          </div>
        </div>
        <div className="overlay"></div>
        <div className="background"></div>
      </section>
      <section className="second-sa">
        <div className="title-warp" id="title-save">
          <h1>
            Ahorra más con <span>San Francisco</span>
          </h1>
        </div>
        <div className="title-paralax">
          <div className="titles" id="title1">
            <h1>
              Plan Futuro
            </h1>
            <p>
              Sea cual sea tu meta, planifícala desde HOY.
            </p>
            <h5>
              Beneficios
            </h5>
            <p>
              Tasa preferencial de acuerdo al plazo pactado.
              <br/>
              Cooperativa en Línea.
              <br/>
              Realiza tus depósitos por:
            </p>
            <ul>
              <li>
                Ventanilla
              </li>
              <li>
                Transferencia interbancaria
              </li>
              <li>
                Débito automático de tu cuenta de ahorros
              </li>
            </ul>
            <p>
              Renovación automática del convenio al finalizar el plazo.
            </p>
            <div className="images">
              <div id="img-title1" className="tit-image">
                <Image src={Title4} width={'200'} height={'auto'} alt="Plan Futuro"/>
              </div>
            </div>
            <div className="images">
              <div id="img-title2" className="tit-image">
                <Image src={Title5} width={'180'} height={'auto'} alt="Plan Futuro"/>
              </div>
            </div>
            <div className="images">
              <div id="img-title3" className="tit-image">
                <Image src={Title6} width={'180'} height={'auto'} alt="Plan Futuro"/>
              </div>
            </div>
          </div>
          <div className="titles" id="title2">
            <h1>
              Ahorro Futuro Décimos
            </h1>
            <p>
              Sea cual sea tu meta, planifícala desde HOY.
            </p>
            <h5>
              Beneficios
            </h5>
            <p>
              Disponibilidad de tus ahorros acumulados cuando los necesites.
              <br/>
              Cooperativa en Línea.
              <br/>
              Débitos automáticos de tu cuenta de ahorros.
              <br/>
              Cuota mínima mensual de $30 dólares.
            </p>
            <h6>
              Retiros
            </h6>
            <ul>
              <li>
                Décimo cuarto: en agosto (región sierra) o marzo (región costa) 
                y puedes retirar hasta un salario básico.
              </li>
              <li>
                Décimo tercero: en diciembre puedes retirar hasta el total 
                ahorrado.
              </li>
            </ul>
            <p>
              Renovación automática del convenio al finalizar el plazo.
            </p>
            <div className="images">
              <div id="img-title4" className="tit-image">
                <Image src={Title1} width={'250'} height={'auto'} alt="Plan Decimos"/>
              </div>
            </div>
            <div className="images">
              <div id="img-title5" className="tit-image">
                <Image src={Title2} width={'250'} height={'auto'} alt="Plan Decimos"/>
              </div>
            </div>
            <div className="images">
              <div id="img-title6" className="tit-image">
                <Image src={Title3} width={'350'} height={'auto'} alt="Plan Decimos" />
              </div>
            </div>
          </div>
          <div className="titles" id="title3">
            <h1>
              Cuenta Infantil Sanfra Kids.
            </h1>
            <p>
              Su futuro empieza HOY.
            </p>
            <h5>
              Beneficios
            </h5>
            <p>
              Tasa preferencial de acuerdo al plazo pactado.
              <br/>
              Cooperativa en Línea.
              <br/>
              Realiza tus depósitos por:
            </p>
            <ul>
              <li>
                Ventanilla
              </li>
              <li>
                Transferencia interbancaria
              </li>
              <li>
                Débito automático de tu cuenta de ahorros
              </li>
            </ul>
            <p>
              Renovación automática del convenio al finalizar el plazo.
            </p>
            <div className="images">
              <div id="img-title7" className="tit-image">
                <Image src={Title7} width={'150'} height={'auto'} alt="Plan Decimos"/>
              </div>
            </div>
            <div className="images">
              <div id="img-title8" className="tit-image">
                <Image src={Title8} width={'170'} height={'auto'} alt="Plan Decimos"/>
              </div>
            </div>
            <div className="images">
              <div id="img-title9" className="tit-image">
                <Image src={Title9} width={'200'} height={'auto'} alt="Plan Decimos" />
              </div>
            </div>
          </div>
        </div>
      </section>   
    </>
  )
}

export default Products