import { useEffect, useState } from "react"
import { useLocation, Link, useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"

const Navbar = () => {

  
  const navLinks = [
    {name: "Home", path: "/"},
    {name: "Hotels", path: "/hotels"},
    {name: "Experiences", path: "/experiences"},
    {name: "About", path: "/about"},
  ]
  
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const location = useLocation()

  useEffect(()=>{

    location.pathname !== '/' ? setIsScrolled(true) : setIsScrolled(false);

    window.addEventListener('scroll', ()=>{
      window.scrollY > 10 ? setIsScrolled(true) : setIsScrolled(false)
    })
  },[location.pathname])

  return (
    <nav className={`fixed top-0 left-0 z-50 w-full flex justify-between items-center py-4 px-4 md:px-16 lg:px-24 transition-all duration-500 {${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "md:py-6 text-white" }`}>
      <Link to="/">
        <img src={assets.logo} alt="logo" className={`h-6 md:h-9 ${isScrolled && "invert opacity-80"}`} />
      </Link>

    <div className="hidden md:flex items-center gap-4 lg:gap-8">
      {navLinks.map((link,i)=>(
        <Link key={i} to={link.path}>
          {link.name}
        </Link>
      ))}
    </div>
      
    <div className="hidden md:flex items-center gap-3">
      <img src={assets.searchIcon} alt="search" />
      <button>Login</button>
    </div>

    <div className="md:hidden flex items-center gap-3">
      <img onClick={()=>setIsMenuOpen(!isMenuOpen)} src={assets.menuIcon} alt="menu" className={`${isScrolled && "invert"} h-4`} />
    </div>

    <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
        <img src={assets.closeIcon} alt="close-menu" className="h-6.5" />
      </button>

      {navLinks.map((link, i) => (
        <a key={i} href={link.path} onClick={()=>setIsMenuOpen(false)}>
          {link.name}
        </a>
      ))}

      <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
        Login
        </button>
    </div>


    </nav>
  )
}

export default Navbar