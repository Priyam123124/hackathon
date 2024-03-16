import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className='nav'>
        <Link to="/profile"><div className='circle'></div></Link>
        <Link to="/profile"><div className='logo_name'>LOGO NAME</div></Link>
        <div className='nav_items'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar