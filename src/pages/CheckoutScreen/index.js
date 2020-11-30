import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import InputCreditCard from "../../components/InputCreditCard";
import { FaRegCreditCard } from "react-icons/fa";
import { RiFolderUserFill } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import ButtonConfirm from "../../components/ButtonConfirm";
import MiniInput from "../../components/MiniInput";
import { CheckoutContainer, MiniInputSection } from "./styles";

const CheckoutScreen = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const changeInput = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleSubmitPayment = (event) => {
    event.preventDefault();

    const data = JSON.stringify({
      orderData: {
        email: "teste@email.com.br",
        cpf: "10683283049",
        delivered: false,
        price: cartItems.reduce((a, c) => a + c.price * c.count, 0),
        cartItems: cartItems,
      },
      paymentData: {
        orderPrice: cartItems.reduce((a, c) => a + c.price * c.count, 0),
        orderReference: Math.random().toString(36).substring(2, 10),
        cardNumber: "5448280000000007",
        cvv: "235",
        expirationMonth: "12",
        expirationYear: "2020",
        cardHolderName: "TESTE ONLINE",
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
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <CheckoutContainer onSubmit={handleSubmitPayment}>
      {/* {console.log(cartItems)} */}
      <InputCreditCard
        labelName="Cpf:"
        imgInput={<RiFolderUserFill />}
        onChange={changeInput}
      />
      <InputCreditCard
        labelName="Cartão:"
        imgInput={<FaRegCreditCard />}
        onChange={changeInput}
      />
      <MiniInputSection>
        <MiniInput
          labelName="cvv"
          type="number"
          maxLength="3"
          onChange={changeInput}
        />
        <MiniInput
          labelName="Mês"
          type="number"
          maxLength="2"
          onChange={changeInput}
        />
        <MiniInput
          labelName="Ano"
          type="number"
          maxLength="4"
          onChange={changeInput}
        />
      </MiniInputSection>
      <InputCreditCard
        labelName="Nome do cartão:"
        imgInput={<FaUserCheck />}
        onChange={changeInput}
      />
      <ButtonConfirm
        textButton="Pagar"
        iconButton={<MdAttachMoney />}
        type="submit"
      />
    </CheckoutContainer>
  );
};

export default CheckoutScreen;
