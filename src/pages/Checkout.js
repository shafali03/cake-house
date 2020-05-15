import React from 'react'
import { CartContext } from '../context/cart'
import { UserContext } from '../context/user'
import { useHistory } from 'react-router-dom'
import EmptyCart from '../components/Cart/EmptyCart';

// react-stripe-element
import submitOrder from '../strapi/submitOrder'

function Checkout(props) {
  const { cart, total, clearCart } = React.useContext(CartContext)
  const { user, showAlert, hideAlert, alert } = React.useContext(UserContext)
  const history = useHistory()

  // state value
  const [name, setName] = React.useState('')
  const [error, setError] = React.useState('')
  const isEmpty = !name || alert.show
  async function handleSubmit(e) {
    e.preventDefault()
  }
  if (cart.length < 1) return <EmptyCart />



  return (
    <div>
      <h1>checkout page</h1>
    </div>
  )
}

export default Checkout