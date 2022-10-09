import React from 'react'
import './Navbar.css'
import Search from '../Search'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link className='navLogo' to='/'>YouPlayer</Link>
      <Search/>
      <div>
        <Link to="/login" className='nav__login'>Login</Link>
      </div>
    </nav>
  )
}

export default Nav
