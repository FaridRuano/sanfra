import Footer from "@public/components/public/Footer"
import NavBar from "@public/components/public/NavBar"

const RootLayout = ({children}) => {
  return (
    <>
      <NavBar/>
        <div className="min">
          {children}
        </div>
      <Footer/>
    </>
  )
}

export default RootLayout