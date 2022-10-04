import React from 'react'
import './Navbar.css'
import Search from '../Search'

function Nav() {
  return (
    <nav>
      <h2>YouPlayer</h2>
      <Search/>
      <div>
        <h4>logos</h4>
      </div>
    </nav>
  )
}

export default Nav
