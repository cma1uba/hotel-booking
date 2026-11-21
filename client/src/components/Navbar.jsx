import { useState } from "react"
import { Link } from "react-router-dom"
import searchIcon from "../assets/searchIcon.svg"
import logo from "../assets/logo.svg"
import { assets } from "../assets/assets"

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false)

  const navLinks = [
    {name: "Home", path: "/"},
    {name: "Hotels", path: "/hotels"},
    {name: "Experiences", path: "/experiences"},
    {name: "About", path: "/about"},
  ]

  return (
    <nav className="navbar text-white">
      <Link to="/">
        <img src={assets.logo} alt="logo" className={`h-9`} />
      </Link>

    <div className="hidden md:flex items-center gap-4 lg:gap-8">
      {navLinks.map((link,i)=>(
        <Link key={i} to={link.path}>
          {link.name}
        </Link>
      ))}
    </div>
      
    <div className="flex items-center gap-3">
      <img src={assets.searchIcon} alt="search" />
      <img src={assets.userIcon} alt="User" />
      <button>Login</button>
    </div>
    </nav>
  )
}

export default Navbar