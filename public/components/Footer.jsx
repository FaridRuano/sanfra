import Image from "next/image"
import SanfraLogo from "@public/icons/sanfra-logo.png"
import fbLogo from "@public/icons/fb-ico.png"
import igLogo from "@public/icons/ig-ico.png"
import ytLogo from "@public/icons/yt-ico.png"
import tkLogo from "@public/icons/tk-ico.png"

const Footer = () => {

  return (
    <>
        <section className="footer" id="footer">
            <div className="footer-warp">
                <div className="footer-titles">
                    <div className="sf-logo">
                        <Image className="sanfra-logo" alt="Sanfra logo" src={SanfraLogo} width={105} height={56}/>
                    </div>
                    <div className="contact">
                        <div>
                            <p>
                                <span>Atención al cliente: </span>
                                (03) 3730280
                            </p>
                            <p>
                                <span>Email: </span>
                                info@coac-sanfra.com
                            </p>
                        </div>
                    </div>
                    <div className="links">
                        <div>
                            <p>Transparencia de la Información</p>
                            <p>Política de protección de datos</p>
                            <p>Edúcate COSEDE</p>
                        </div>
                    </div>
                    <div className="social">
                        <div>
                            <Image className="ico" alt="Facebook" src={fbLogo} width={30} height={'auto'}/>
                            <Image className="ico" alt="Tiktok" src={tkLogo} width={30} height={'auto'}/>
                            <Image className="ico" alt="Youtube" src={ytLogo} width={30} height={'auto'}/>
                            <Image className="ico" alt="Instagram" src={igLogo} width={30} height={'auto'}/>
                        </div>
                    </div>
                </div>
                <div className="author-rights">
                    <p>© 2022 COAC San Francisco Ltda. Todos los derechos reservados.</p>
                </div>                                    
            </div>
        </section>
    </>
  )
}

export default Footer