import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.svg"

function Header() {

  return (
    <header className="Header">
      <img src={logo} alt="cake shop logo" className="logo" />
      <nav>
        <ul>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Products">Product</Link>
            </li>
          </div>
          <div>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header