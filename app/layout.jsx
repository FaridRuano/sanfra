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
        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout