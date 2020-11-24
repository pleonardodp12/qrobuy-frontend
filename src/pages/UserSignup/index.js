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
