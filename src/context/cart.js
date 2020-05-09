import React from 'react'

import localCart from '../utils/localCart'

const CartContext = React.createContext()

function CartProvider({ children }) {
  const [cart, setCart] = React.useState(localCart)
  const [total, setTotal] = React.useState(0)
  const [cartItems, setCartItems] = React.useState(0)

  React.useEffect(() => {
    // local storage
    // accumulator = total
    // current = cartItem
    let newCartItems = cart.reduce((total, cartItem) => {
      // console.log(total, cartItem)
      return (total += cartItem.amount)
    }, 0)

    setCartItems(newCartItems)
    // cart total
    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.price)
    }, 0)
    // console.log(newCartItems)

    newTotal = parseFloat(newTotal.toFixed(2))
    setTotal(newTotal)
  }, [cart])

  // remove item
  const removeItem = id => { }
  // increase amount
  const increaseAmount = id => { }
  // decrease amount
  const decreaseAmount = id => { }
  // add to cart
  const addToCart = id => { }
  // clear cart
  const clearCart = id => { }

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addToCart,
        clearCart
      }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }

