import AbstractBg from "@public/components/AbstractBg"

const Layout = ({children}) => {
  return (
    <>
      <div className="admin-layout">
          {children}
      </div>
      <AbstractBg/>
    </>
  )
}

export default Layout