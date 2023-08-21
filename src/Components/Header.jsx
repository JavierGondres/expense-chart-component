import React from 'react'

function Header() {
  return (
    <div className='header-container'>
        <div className="header-balance">
            <p className='header-t'>My balance</p>
            <p className='header-price'>$921.48</p>
        </div>
        <div className="header-logo">
            <img src="../public/images/logo.svg" alt="" />
        </div>
    </div>
  )
}

export default Header