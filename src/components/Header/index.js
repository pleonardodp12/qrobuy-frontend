import React from 'react'

const Header = ({ nameRoute }) => {
  return (
    <header className="header">
      { nameRoute ? <h4>{nameRoute}</h4> : <h4>QroBuy</h4>}
      <img alt="logo" />
    </header>
  )
}

export default Header;
