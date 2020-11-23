import React from 'react';
import InputForm from '../../components/InputForm';
import ButtonConfirm from '../../components/ButtonConfirm';

import { UserSigninContainer } from './styles';

const UserSignin = () => {
  return (
    <UserSigninContainer>
      <InputForm labelName="Login"/>
      <InputForm labelName="Senha" type="password"/>

      <ButtonConfirm textButton="Entrar" />
    </UserSigninContainer>
  )
}

export default UserSignin;
