import React from 'react'
import { useState } from 'react'
import logo from '../../assets/logo.jpg'
import './Navbar.css'
import { Link } from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu =()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

  }
  return (
    <div>
      <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li className='contain'><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li className='contain'><Link to='about' smooth={true} offset={-100} duration={500}>About us</Link></li>
            <li className='contain'><Link to='campus' smooth={true} offset={-200} duration={500}>Campus</Link></li>
            <li className='contain'><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonial</Link></li>
            <li className='contain'><Link to='facility' smooth={true} offset={-200} duration={500}>Facility</Link></li>
            <li className='contain'><Link to='placement' smooth={true} offset={-250} duration={500}>Placement</Link></li>
            <li> <Link to='contact' smooth={true} offset={-220} duration={500} className='btn'>Contact_us</Link></li>
            <li> <button className='btn'>Sign in</button></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
      </nav>
    </div>
  )
}

export default Navbar
