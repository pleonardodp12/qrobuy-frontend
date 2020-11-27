import React, { useState } from 'react';
import InputForm from '../../components/InputForm';
import ButtonConfirm from '../../components/ButtonConfirm';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/signinAction';
import api from '../../services/api';

import { UserSigninContainer } from './styles';

const UserSignin = () => {

  const [login, setLogin] = useState({
    email: '',
    password: '',
  })

  const changeLogin = e => {
    const { name, value } = e.target
    setLogin({...login, [name]: value })
  }

  const submitLogin = async e => {
    e.preventDefault();
    const response = await api.get('/signin', login)
    console.log(response)
      

  }

  return (
    <UserSigninContainer onSubmit={submitLogin}>
      <InputForm labelName="Login" name="email" onChange={changeLogin}/>
      <InputForm labelName="Senha" name="password" type="password" onChange={changeLogin}/>
      <ButtonConfirm textButton="Entrar" type="submit"/>
    </UserSigninContainer>
  )
}

const mapStateToProps = (state) => {
  console.log('STATE.account', state)
  return { account: state };
};

export default connect(mapStateToProps,{
  loginUser,
}
)(UserSignin)
