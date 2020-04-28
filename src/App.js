import React from 'react'

//* react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// pages
import About from "./pages/About"
import Cart from "./pages/Cart"
import Error from "./pages/Error"
import Home from "./pages/Home"




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App