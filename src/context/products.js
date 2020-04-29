import React, { useState } from 'react'

export const ProductContext = React.createContext()

//Provider, Consumer, useContext()

function ProductProvider({ children }) {
  const [loading, setLoading] = (useState(false))
  const [products, setProducts] = (useState(false))
  const [featured, setFeatured] = (useState(false))

  return (
    <ProductContext.Provider value={{ loading, products, featured }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider