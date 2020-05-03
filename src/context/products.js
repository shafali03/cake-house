import React, { useState } from 'react'
import axios from 'axios'
import url from '../utils/URL'
export const ProductContext = React.createContext()

//Provider, Consumer, useContext()

function ProductProvider({ children }) {
  const [loading, setLoading] = (useState(false))
  const [products, setProducts] = (useState(false))
  const [featured, setFeatured] = (useState(false))

  React.useEffect(() => {
    axios.get(`${url}/products`).then(response => {
      setProducts(response.data)
    })
    return () => { }
  }, [])

  return (
    <ProductContext.Provider value={{ loading, products, featured }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider