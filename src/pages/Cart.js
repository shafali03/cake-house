import React from 'react'
import { CartContext } from '../context/cart'
import EmptyCart from '../components/Cart/EmptyCart'
import CartItem from '../components/Cart/CartItem'
import { Link } from 'react-router-dom'


function Cart() {
  let user = false
  const { cart, total } = React.useContext(CartContext)

  if (cart.length === 0) {
    return <EmptyCart />
  }

  return (
    <div>
      <h1>Cart page</h1>
    </div>
  )
}

export default Cart