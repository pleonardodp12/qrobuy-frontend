import React, { useState } from 'react';
import InputForm from '../../components/InputForm';
import ButtonConfirm from '../../components/ButtonConfirm';
import { UserSignupContainer } from './styles';

const UserSignup = () => {
  const [ cpf, setCpf ] = useState('');

  const cpfMask = value => {
    return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
  }

  const handleChange = (e) => {
    setCpf(cpfMask(e.target.value))
  }

  return (
    <UserSignupContainer>
      <InputForm labelName="Nome"/>
      <InputForm labelName="Email" type="email"/>
      <InputForm
        labelName="CPF"
        maxLength='14'
        value={cpf}
        onChange={handleChange}
      />
      <InputForm labelName="Senha" type="password"/>
      <InputForm labelName="Digite a senha novamente" type="password"/>

      <ButtonConfirm textButton="Cadastrar" />
    </UserSignupContainer>
  )
}

export default UserSignup;
