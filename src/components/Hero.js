import React from "react"

function Hero({ children }) {

  return (
    <div className="hero">
      <div className="banner">
        <h1>
          Welcome To Cake House
        </h1>
        <h2>
          Cakes for every occasion
        </h2>
        {children}
      </div>
    </div>
  )
}

export default Hero