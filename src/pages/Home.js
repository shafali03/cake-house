import React from 'react'
import Hero from "../components/Hero"
import { Link } from "react-router-dom"
import FeaturedProducts from '../components/Products/FeaturedProducts'

function Home() {
  return (
    <>
      <Hero>
        <Link to="/products" className="btn btn-primary btn-hero">
          Our Cakes
        </Link>
      </Hero>
      <FeaturedProducts />
    </>

  )
}

export default Home