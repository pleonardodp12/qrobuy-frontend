import React, { useState } from 'react';
import InputCreditCard from '../../components/InputCreditCard';
import { FaRegCreditCard } from 'react-icons/fa';
import { RiFolderUserFill } from 'react-icons/ri';
import { MdAttachMoney } from 'react-icons/md';
import { FaUserCheck } from 'react-icons/fa';
import ButtonConfirm from '../../components/ButtonConfirm';
import MiniInput from '../../components/MiniInput';
import { CheckoutContainer, MiniInputSection } from './styles';

const CheckoutScreen = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const changeInput = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmitPayment = (event) => {
    event.preventDefault();
  };
  return (
    <CheckoutContainer onSubmit={handleSubmitPayment}>
      <InputCreditCard labelName="Cpf:" imgInput={<RiFolderUserFill />} onChange={changeInput}/>
      <InputCreditCard labelName="Cartão:" imgInput={<FaRegCreditCard />} onChange={changeInput}/>
      <MiniInputSection>
        <MiniInput labelName="cvv" type="number" maxLength="3" onChange={changeInput} />
        <MiniInput labelName="Mês" type="number" maxLength="2" onChange={changeInput} />
        <MiniInput labelName="Ano" type="number" maxLength="4" onChange={changeInput} />
      </MiniInputSection>
      <InputCreditCard labelName="Nome do cartão:" imgInput={<FaUserCheck />} onChange={changeInput}/>
      <ButtonConfirm textButton="Pagar" iconButton={<MdAttachMoney />} type="submit" />
    </CheckoutContainer>
  )
}

export default CheckoutScreen;
