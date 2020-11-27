import React from "react";
import {
  OrderDetailsContainer,
  OrderDetailsText,
  TextWrapper,
} from "../styles";

export const OrderDetails = ({ order, setDetails }) => {
  return (
    <OrderDetailsContainer>
      <TextWrapper>
        <OrderDetailsText>Número do pedido: {order._id}</OrderDetailsText>
        <OrderDetailsText>Nome: {order.name}</OrderDetailsText>
        <OrderDetailsText>CPF: {order.cpf}</OrderDetailsText>
        <OrderDetailsText>Data: {order.date}</OrderDetailsText>
        <OrderDetailsText>ID transação: {order.tid}</OrderDetailsText>
        <OrderDetailsText>
          Valor: {(order.price / 100).toFixed(2).replace(".", ",")}
        </OrderDetailsText>
        <OrderDetailsText>
          Retirado: {order.retrieved ? "Sim" : "Não"}
        </OrderDetailsText>
      </TextWrapper>
      <button onClick={() => setDetails(false)}>close</button>
    </OrderDetailsContainer>
  );
};
