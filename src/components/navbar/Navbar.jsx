import { Link , useNavigate } from "react-router-dom"

import "./Navbar.css"

const Navbar = () => {
  const navigate = useNavigate() ;
  return (
    <div className="home-nav flrow acen">
      <img src="navImg/navIcon.png" alt="Icon" className='home-icon' />
      <h4>Recruit</h4>
      <div className='navlog flrow'>
        <Link to="/hire" className="nav-btn">Hire</Link>
        <Link to="/apply" className="nav-btn">Get hired</Link>
        <a href="#about" className="nav-btn">About us</a>
      </div>
      
    </div>
  )
}

export default Navbar