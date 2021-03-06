import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from "axios";
import InputCreditCard from "../../components/InputCreditCard";
import { FaRegCreditCard } from "react-icons/fa";
import { RiFolderUserFill } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import ButtonConfirm from "../../components/ButtonConfirm";
import MiniInput from "../../components/MiniInput";
import { CheckoutContainer, MiniInputSection, PaymentScreen } from "./styles";

const CheckoutScreen = () => {
  const [info, setInfo] = useState({
    cpf: "",
    cardNumber: "",
    cvv: "",
    expirationMonth: "",
    expirationYear: "",
    cardHolderName: "",
  });
  const [order, setOrder] = useState({
    emailCompra: '',
    precoTotalCompra: '',
    cpf: '',
  })
  const [payment, setPayment] = useState(null);

  const changeInput = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const cartItems = useSelector((state) => state.cart.cartItems);
  const accountEmail = useSelector((state) => state.account);
  console.log(accountEmail)

  const handleSubmitPayment = (event) => {
    event.preventDefault();

    const data = JSON.stringify({
      orderData: {
        email: accountEmail,
        cpf: info.cpf,
        delivered: false,
        price: cartItems.reduce((a, c) => a + c.price * c.count, 0),
        cartItems: cartItems,
      },
      paymentData: {
        orderPrice: cartItems.reduce((a, c) => a + c.price * c.count, 0),
        orderReference: Math.random().toString(36).substring(2, 10),
        cardNumber: info.cardNumber,
        cvv: info.cvv,
        expirationMonth: info.expirationMonth,
        expirationYear: info.expirationYear,
        cardHolderName: info.cardHolderName,
      },
    });

    var config = {
      method: "post",
      url: "https://qrobuy-backend.herokuapp.com/api/v1/orders",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYzBlYzY4YThmM2I3MDAzNDY2MDAzYyIsImlhdCI6MTYwNjUxNzI0NH0.CxRMfopXgwQ0EzQPkYxxfNVps69CEg_XmK9LvF1_aSI",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        localStorage.clear('cartItems')
        setOrder({
          emailCompra: response.data.email.account.email,
          precoTotalCompra: response.data.price,
          cpf: response.data.cpf,
        })
        return setPayment(true)
      })
      .catch(function (error) {
        if(error){
          window.alert('Dados incorretos')
        }
      });
  };

  
  console.log(order)
  return (
  <>
    {payment === true ? (
      <PaymentScreen>
        <h1>Pagamento efetuado com sucesso!</h1>
        <h5>cpf: {order.cpf}</h5>
        <h5>Email: {order.emailCompra}</h5>
        <h5>Preço total: <strong>{order.precoTotalCompra} R$</strong></h5>
        <Link to="/"><ButtonConfirm textButton="OK"/></Link>
      </PaymentScreen>) : (
      <CheckoutContainer onSubmit={handleSubmitPayment}>
      <InputCreditCard
        labelName="Cpf:"
        imgInput={<RiFolderUserFill />}
        onChange={changeInput}
        maxLength="14"
        name="cpf"
      />
      <InputCreditCard
        labelName="Cartão:"
        imgInput={<FaRegCreditCard />}
        onChange={changeInput}
        maxLength="16"
        name="cardNumber"
      />
      <p>cartão: 5448280000000007</p>
      <MiniInputSection>
        <MiniInput
          labelName="cvv"
          type="number"
          min="000"
          max="999"
          onChange={changeInput}
          name="cvv"
          placeholder= "235"
        />
        <MiniInput
          labelName="Mês"
          type="number"
          min="01"
          max="12"
          onChange={changeInput}
          name="expirationMonth"
          placeholder= "12"
        />
        <MiniInput
          labelName="Ano"
          type="number"
          min="2020"
          max="2200"
          onChange={changeInput}
          name="expirationYear"
          placeholder= "2020"
        />
      </MiniInputSection>
      <InputCreditCard
        labelName="Nome do cartão:"
        imgInput={<FaUserCheck />}
        onChange={changeInput}
        name="cardHolderName"
      />
      <ButtonConfirm
        textButton="Pagar"
        iconButton={<MdAttachMoney />}
        type="submit"
      />
    </CheckoutContainer>
    )}
    
    </>
  );
};

export default CheckoutScreen;