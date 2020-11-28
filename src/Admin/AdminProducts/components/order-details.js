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
      </TextWrapper>
      <button onClick={() => setDetails(false)}>close</button>
    </OrderDetailsContainer>
  );
};
