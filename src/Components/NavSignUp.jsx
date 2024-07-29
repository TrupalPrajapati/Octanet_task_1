import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { FaHome, FaInfoCircle, FaConciergeBell, FaEnvelope } from 'react-icons/fa';

const NavSignUp = () => {
 
  return (
    <nav className='NavItems'>
        <h1 className='logo'>TRAWELL</h1>

        <ul className='nav-menu'>
            <li>
                <Link to='/'className='nav-links'><FaHome className='icons'/>Home</Link>
                <Link to='/about' className='nav-links'><FaInfoCircle  className='icons'/>About </Link>
                <Link to='/service' className='nav-links'><FaConciergeBell  className='icons'/>Service</Link>
                <Link to='/contact' className='nav-links'><FaEnvelope  className='icons'/>Contact</Link>
            </li>
            <Link to='/signin'><button>Login</button></Link>
        </ul>
    </nav>
  )
}

export default NavSignUp


  

