import React from "react"

function Hero({ children }) {

  return (
    <div className="hero">
      <div className="banner">
        <h1>
          Welcome To Cake House
        </h1>
        <p>
          All you need is Love and a cupcake
        </p>
        {children}
      </div>
    </div>
  )
}

export default Hero