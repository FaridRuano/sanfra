
import Footer from '@public/components/Footer'
import Nav from '@public/components/Nav'
import '@public/styles/globals.scss'

export const metadata = {
  title: "San Francisco",
  description: "Cooperativa de Ahorro y Crédito San Francisco Ltda.",
  icons:{
    icon: "./sf-favico.svg",
    apple: "./sf-favico.svg"
  }
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>      
      <body>
        <div className='main'>
          <main className='app'>
            <Nav/>
            <div className='dev'>
              {children}
            </div>
            <Footer/>
          </main>
        </div>
      </body>
    </html>
  )
}

export default RootLayout