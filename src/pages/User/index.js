import React from 'react';
import { Link } from 'react-router-dom';
import ButtonConfirm from '../../components/ButtonConfirm';
import { LoginUserContainer } from './styles';

const LoginUser = () => {
  return (
    <LoginUserContainer>
      <Link to="/user/sign-in"><ButtonConfirm textButton="Entrar"/></Link>
      <Link to="/user/sign-up"><ButtonConfirm textButton="Cadastrar"/></Link>
    </LoginUserContainer>
  )
}

export default LoginUser;
