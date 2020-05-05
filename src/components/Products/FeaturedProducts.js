import React from "react";
import ProductList from './ProductList'
import { ProductContext } from '../../context/products'
import Loading from '../Loading'


function FeaturedProducts() {
  const { loading, featured } = React.useContext(ProductContext)
  if (loading) {
    return <Loading />
  }
  return <ProductList title="featured product" products={featured} />
}


export default FeaturedProducts