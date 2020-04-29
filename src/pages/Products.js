import React, { useContext } from 'react';
import { ProductContext } from '../context/products';


function Products() {
  const { loading, products } = useContext(ProductContext)


  return (
    <div>
      <h1>Products pages</h1>
    </div>
  )
}

export default Products