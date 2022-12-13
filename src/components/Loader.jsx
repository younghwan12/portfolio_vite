import React from 'react'

function Loader() {
  return (
    <div className='loading'>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="loading__text"></div>
    </div>
  )
}

export default Loader