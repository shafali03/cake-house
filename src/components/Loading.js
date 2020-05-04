import React from 'react'
import loading from '../assets/Spinner-2s-81px.gif'
function Loading() {
  return (
    <div className="Loading">
      <h2>Loading...</h2>
      <img src={loading} alt="loading gif" />
    </div>
  )
}

export default Loading