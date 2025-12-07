import { Link, NavLink } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import logo from "../assets/logo.png";

import '../styles/variables.css';
import '../styles/navbar.css';


const getLinkClass = ({ isActive }) =>
  isActive ? 'navbar-link navbar-link-active' : 'navbar-link'

export default function Navbar() {
  return (
    <header className="site-header">
      {/* Top info bar */}
      <div className="navbar-top">
        <div className="container navbar-top-inner">
          <div className="navbar-info">
            <span>
                <AccessTimeIcon fontSize="small"/>
                Mon - Sat: 8 am - 5 pm, Sunday: CLOSED
              </span>
            <span>
              <LocalPhoneIcon fontSize = "small" />
              1-888-452-1505</span>
            <span>
              <LocationOnIcon fontSize = "small" />
               380 St Kilda Road, Australia</span>
          </div>
          <div className="navbar-social">
            <span>
              <a href="#">
                <FacebookIcon fontSize = "small" />
              </a>
            </span>
            <span>
              <a href="#">
                <XIcon fontSize = "small" />
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="navbar-main">
        <div className="container navbar-main-box">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logistec Logo" className="navbar-logo" />
          </Link>


          <nav className="navbar-main-links">
            <NavLink to="/" className={getLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/about" className={getLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/services" className={getLinkClass}>
              Services
            </NavLink>
            <NavLink to="/portfolio" className={getLinkClass}>
              Pages
            </NavLink>
            <NavLink to="/team" className={getLinkClass}>
              Team
            </NavLink>
            <NavLink to="/blog" className={getLinkClass}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={getLinkClass}>
              Contact
            </NavLink>
          </nav>

          <button className="navbar-cta">Request A Quote</button>

        </div>
      </div>
    </header>
  )
}
