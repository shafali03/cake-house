import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../utils/URL'
import { featuredProducts, flattenProducts } from '../utils/helpers'
export const ProductContext = React.createContext()


//Provider, Consumer, useContext()

function ProductProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get(`${url}/products`)
      .then(response => {
        const featured = featuredProducts(response.data);
        const products = flattenProducts(response.data)
        setProducts(products)
        setFeatured(featured)
        setLoading(false)
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