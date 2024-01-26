import Image from "next/image"
import SaveAcc from '@public/images/save-account.jpg'


const Products = () => {

  return (
    <>
      <section className="main-sa">
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
    </>
  )
}

export default Products