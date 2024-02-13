'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";

const ProdNav = () => {
  const router = useRouter()

  const [active, setActive] = useState(parseInt(localStorage.getItem("activeMenu")) || 1)

  const activateNav = (menu, link) => {
    setActive(menu)
    localStorage.setItem("activeMenu", menu.toString())
    router.push(link)
  }

  useEffect(() => {
    const handleRouteChange = () => {
      const currentPath = router.asPath;
      if (currentPath.startsWith("/productos/")) {
        switch (currentPath) {
          case "/productos/":
            setActive(1);
            break;
          case "/productos/credito":
            setActive(2);
            break;
          case "/productos/inversiones":
            setActive(3);
            break;
          case "/productos/tarjetas":
            setActive(4);
            break;
          default:
            setActive(1);
            break;
        }
      }
    };
  
    // Check if router.events is defined before using it
    if (router && router.events) {
      router.events.on("routeChangeComplete", handleRouteChange);
  
      // Set initial active state
      handleRouteChange();
  
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router]);
  

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