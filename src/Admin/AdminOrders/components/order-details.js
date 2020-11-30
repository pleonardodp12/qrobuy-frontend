import React from "react";
import {
  OrderDetailsContainer,
  OrderDetailsText,
  TextWrapper,
} from "../styles";

export const OrderDetails = ({ order, setDetails }) => {
  return (
    <OrderDetailsContainer>
      <h3>Informações do pedido: {order._id}</h3>
      <TextWrapper>
        <OrderDetailsText>
          Número do pedido: <span>{order._id}</span>
        </OrderDetailsText>
        <OrderDetailsText>
          Nome: <span>{order.name}</span>
        </OrderDetailsText>
        <OrderDetailsText>
          CPF: <span>{order.cpf}</span>
        </OrderDetailsText>
        <OrderDetailsText>
          Data: <span>{order.date}</span>
        </OrderDetailsText>
        <OrderDetailsText>
          ID transação: <span>{order.tid}</span>
        </OrderDetailsText>
        <OrderDetailsText>
          Valor: <span>{(order.price / 100).toFixed(2).replace(".", ",")}</span>
        </OrderDetailsText>
        <OrderDetailsText>
          Retirado: <span>{order.retrieved ? "Sim" : "Não"}</span>
        </OrderDetailsText>
      </TextWrapper>
      <button onClick={() => setDetails(false)}>Fechar</button>
    </OrderDetailsContainer>
  );
};
