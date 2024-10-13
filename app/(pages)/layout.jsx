import Footer from "@public/components/public/Footer"
import NavBar from "@public/components/public/NavBar"

const RootLayout = ({children}) => {
  return (
    <>
      <NavBar/>
      {children}
      <Footer/>
    </>
  )
}

export default RootLayout