import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './styles';
import { FaUserAlt } from 'react-icons/fa';
import logo from '../../assets/images/logo-test2.png';

const HeaderNav = () => {
  return (
    <Header>
      <img src={logo} alt="logo" />
      <Link to="/user" className="button-login"><FaUserAlt /></Link>
    </Header>
  )
}

export default HeaderNav;
