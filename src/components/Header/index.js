import React from 'react';
import { Header } from './styles';

const HeaderNav = ({ nameRoute }) => {
  return (
    <Header className="header">
      { nameRoute ? <h4>{nameRoute}</h4> : <h4>QroBuy</h4>}
      <img alt="logo" />
    </Header>
  )
}

export default HeaderNav;
