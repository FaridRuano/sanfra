import { DollarSign, Gift, PlusCircle } from "react-feather"

const Credit = () => {
  return (
    <>
      <section className="title-sa">
        <h1>
          #TenloTodo <span>con tu crédito</span>
        </h1>
      </section>
      <section className="main-cr">
        <div className="titles">
          <h1>
            Tu crédito fácil, rápido y seguro
            <span> con San Francisco</span>
          </h1>
          <div className="credit-warp">
            <div className="credit">
              <PlusCircle className="icon"/>
              <div>
                <p>
                  Crédito Sanfra
                </p>
                <span>Medic</span>
              </div>
            </div>
            <div className="credit">
              <Gift className="icon"/>
              <div>
                <p>
                  Crédito Sanfra
                </p>
                <span>Consumo</span>
              </div>
            </div>
            <div className="credit">
              <DollarSign className="icon"/>
              <div>
                <p>
                  Crédito Sanfra
                </p>
                <span>Emprende</span>
              </div>
            </div>
          </div>
        </div>
        <div className="link-cre">
          <span>Solícitalo hoy!</span>
          <a href="https://online.coac-sanfra.com/productoweb/credito/" target="_blank">
            <div>
              Ingresa a nuestra web
            </div>
          </a>
        </div>
      </section>
    </>
  )
}

export default Credit