import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.svg"
import CartLink from './Cart/CartLink'
import { UserContext } from "../context/user"
import LoginLink from "../components/LoginLink"



function Header() {
  const { user } = React.useContext(UserContext)

  return (
    <header className="header">
      <img src={logo} alt="cake shop logo" className="logo" />
      <nav>
        <ul>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Product</Link>
            </li>
            {user.token && (
              <li>
                <Link to="/checkout">checkout</Link>
              </li>
            )}
          </div>
          <div>
            <LoginLink />
            <CartLink />
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header