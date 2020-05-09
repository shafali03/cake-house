import React from 'react'
import { CartContext } from '../context/cart'
import EmptyCart from '../components/Cart/EmptyCart'
import CartItem from '../components/Cart/CartItem'
import { Link } from 'react-router-dom'
// import { UserContext } from '../context/user'

function Cart() {
  let user = false
  const { cart, total } = React.useContext(CartContext)
  console.log({ cart, total })


  if (cart.length === 0) {
    return <EmptyCart />
  }

  return (
    <section className="cart-item section">
      <h2>your cart</h2>
      {cart.map(item => {
        return <CartItem key={item.id} {...item} />
      })}
      <h2>total : £ {total}</h2>
    </section>

  )
}

export default Cart