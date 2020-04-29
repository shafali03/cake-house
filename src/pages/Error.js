import React from 'react'
import { Link } from 'react-router-dom'

function Error() {

  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>Oops! error page click button navigate back to home</h1>
        <Link to="/" class="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
  )

}

export default Error