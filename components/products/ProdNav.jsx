'use client'

import { useState } from "react"
import { useRouter } from "next/navigation";

const ProdNav = () => {
  const router = useRouter()

  const [active, setActive] = useState(1)

  const activateNav = (menu, link) => {
    setActive(menu)
    router.push(link)
}

  return (
    <>
      <div className="prod-nav">
        <span className={active===1?'active': ''} onClick={()=>activateNav(1,'/productos/')}>
          Ahorro
        </span>
        <span className={active===2?'active': ''} onClick={()=>activateNav(2,'/productos/credito')}>
          Crédito
        </span>
        <span className={active===3?'active': ''} onClick={()=>activateNav(3,'/productos/inversiones')}>
          Inversiones
        </span>
        <span className={active===4?'active': ''} onClick={()=>activateNav(4,'/productos/tarjetas')}>
          Tarjetas
        </span>
      </div>
    </>
  )
}

export default ProdNav