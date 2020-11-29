import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './styles';
import { FaUserAlt, FaUserCog } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import logo from '../../assets/images/logo-test2.png';



const HeaderNav = () => {
  const { isAuthenticated } = useSelector(state => state.account);
  return (
    <Header>
      <Link to="/"><img src={logo} alt="logo" /></Link>
      
      <Link to={isAuthenticated === null ? "/user" : "/user/sign-in"} className="button-login">
       { isAuthenticated === null ? <FaUserAlt /> : <FaUserCog />}
      </Link>
    </Header>
  );
};

export default HeaderNav;
