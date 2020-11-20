import React from 'react';
import { Header } from './styles';

const HeaderNav = ({ nameRoute }) => {
  return (
    <Header className="header">
      { nameRoute ? <h4>{nameRoute}</h4> : <h4>QroBuy</h4>}
      <img src="../../assets/images/logo.png" alt="logo" />
    </Header>
  )
}

export default HeaderNav;
