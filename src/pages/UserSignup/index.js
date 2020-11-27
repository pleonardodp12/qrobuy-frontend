import React, { useState } from 'react';
import InputForm from '../../components/InputForm';
import ButtonConfirm from '../../components/ButtonConfirm';
import cpfMask from '../../utils/cpfMask';
import { UserSignupContainer } from './styles';

const UserSignup = () => {
  const [ cpf, setCpf ] = useState('');

  const handleChange = (e) => {
    setCpf(cpfMask(e.target.value))
  }

  const [login, setLogin] = useState({
    name: '',
    email: '',
    cpf: '',
    password: '',
  })

  const changeSignup = e => {
    const { name, value } = e.target
    setLogin({...login, [name]: value })
    console.log(login)
  }

  const submitSignup = e => {
    e.preventDefault();
    console.log(login)
  }

  return (
    <UserSignupContainer onSubmit={submitSignup}>
      <InputForm labelName="Nome" name="name" onChange={changeSignup}/>
      <InputForm labelName="Email" name="email" type="email" onChange={changeSignup}/>
      <InputForm
        labelName="CPF"
        maxLength='14'
        value={cpf}
        onChange={handleChange}
        name="cpf"
      />
      <InputForm labelName="Senha" type="password" name="password" onChange={changeSignup}/>
      <ButtonConfirm textButton="Cadastrar" type="submit"/>
    </UserSignupContainer>
  )
}

export default UserSignup;
