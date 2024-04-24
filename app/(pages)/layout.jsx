import Footer from "@public/components/Footer"
import Nav from "@public/components/Nav"
import Script from "next/script"

const RootLayout = ({children}) => {
  return (
    <>
        <Script src="/utils/scroll-section.js"/>
        <Nav/>
        <div className="dev">
            {children}
        </div>
        <Footer/>
    </>
  )
}

export default RootLayout