import React from 'react'
import Hero from "../components/Hero"
import { Link } from "react-router-dom"


function Home() {
  return (
    <>
      <Hero>
        <Link to="/products" className="btn btn-primary btn- hero">
          Our Cakes
        </Link>
      </Hero>
    </>

  )
}

export default Home