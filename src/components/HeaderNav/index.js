import React from 'react';
import { Header } from './styles';
import logo from '../../assets/images/logo-test2.png';

const HeaderNav = ({ nameRoute }) => {
  return (
    <Header>
      { nameRoute ? <h4>{nameRoute}</h4> : <h4>QroBuy</h4>}
      <img src={logo} alt="logo" />
    </Header>
  )
}

export default HeaderNav;
