import React, { useState } from 'react';
import InputForm from '../../components/InputForm';
import ButtonConfirm from '../../components/ButtonConfirm';
import api from '../../services/api';
import { UserSignupContainer } from './styles';

const UserSignup = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const changeSignup = e => {
    const { name, value } = e.target
    setUser({...user, [name]: value });
  }

  const submitSignup = async e => {
    e.preventDefault();
    const response = await api.post('/signup', user);
    console.log(response)
    if(response.status === 201) {
      alert('Cadastro Realizado com sucesso');
      return;
    }
    alert('Erro no cadastro');
  }

  return (
    <UserSignupContainer onSubmit={submitSignup}>
      <InputForm labelName="Email" name="email" type="email" onChange={changeSignup}/>
      <InputForm labelName="Senha" type="password" name="password" onChange={changeSignup}/>
      <ButtonConfirm textButton="Cadastrar" type="submit"/>
    </UserSignupContainer>
  )
}

export default UserSignup;
