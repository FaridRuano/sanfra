import AdminSideBar from "@public/components/AdminSideBar"

const Layout = ({children}) => {
  return (
    <>
      <div className="admin-container">
        <AdminSideBar/>
        <div className="admin-page">
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout