import React,  { useEffect, useState } from 'react';
import SearchButton from "../../components/SearchButton";
import { Container, ListWrapper } from "./styles";

import { mockedProducts } from "./__mocks__/mocked-products"; // mocked values
import { OrderDetails } from "./components/order-details";
import { renderOrdersList } from "./components/order-list";

const AdminProducts = () => {
  // const [orders, setOrders] = useState([]);
  const [details, setDetails] = useState(false);
  const [order, setOrder] = useState({});

  const getOrders = async () => {
    // const ordersList = await qrobuyServer.get("/orders");
    // setOrders(ordersList.body);
  };

  useEffect(() => {
    // getOrders();
  }, []);

  const toggleDetails = (order) => {
    setDetails(!details);
    setOrder(order);
  };

  return (
    <>
      <Container>
          <SearchButton /> 
          <ListWrapper>
            {renderOrdersList(mockedProducts, toggleDetails)} 
          </ListWrapper>
          {/*aqui entra o botão de adicionar produto */}
      </Container>
    </>
  );
};

export default AdminProducts
