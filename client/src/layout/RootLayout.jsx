import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"

const RootLayout = () => {
  const location = useLocation()
  const isOwnerPath = location.pathname.startsWith("/owner")

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <Outlet />
    </div>
  )
}

export default RootLayout