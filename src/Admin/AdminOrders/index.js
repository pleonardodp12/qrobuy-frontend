import React, { useEffect, useState } from "react";
import SearchButton from "../../components/SearchButton";
import { Container, ListWrapper } from "./styles";

import { mockedOrders } from "./__mocks__/mocked-orders"; // mocked values
import { OrderDetails } from "./components/order-details";
import { renderOrdersList } from "./components/order-list";

const AdminOrders = () => {
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
        {details ? (
          <OrderDetails order={order} setDetails={setDetails} />
        ) : (
          <>
            <SearchButton /> {/* orders*/}
            <ListWrapper>
              {renderOrdersList(mockedOrders, toggleDetails)}
            </ListWrapper>
          </>
        )}
      </Container>
    </>
  );
};

export default AdminOrders;
