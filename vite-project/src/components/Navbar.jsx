import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div id="navbar">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
    </div>
  )
}

export default Navbar