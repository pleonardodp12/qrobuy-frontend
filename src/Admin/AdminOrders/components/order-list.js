import React from "react";
import { OrderListContainer } from "../styles";
import { OrderItem } from "./order-item";

export const renderOrdersList = (orders, toggleDetails) => {
  const orderList = [];
  orders.forEach((order, index) => {
    orderList.push(
      <OrderListContainer key={index}>
        <OrderItem order={order} handleClick={() => toggleDetails(order)} />
      </OrderListContainer>
    );
  });
  return orderList;
};
