import React, { useEffect, useState } from "react";
import SearchButton from "../../components/SearchButton";
import { Container, ListWrapper } from "./styles";

import { mockedOrders } from "./__mocks__/mocked-orders"; // mocked values
import { OrderDetails } from "./components/order-details";
import { renderOrdersList } from "./components/order-list";
import { makeAdminApi } from "../../services/adminApi";
import { connect } from "react-redux";

const AdminOrders = ({account}) => {
  const [details, setDetails] = useState(false);
  const [orders, setOrder] = useState({});

  const getOrders = async () => {
    const response = await makeAdminApi(account.accessToken).get("/orders");
    setOrder(response.data)
  };

  useEffect(() => {
    getOrders();
  }, []);

  const toggleDetails = (order) => {
    setDetails(!details);
    setOrder(order);
  };

  return (
    <>
      <Container>
        {details ? (
          <OrderDetails order={orders} setDetails={setDetails} />
        ) : (
          <>
            <SearchButton />
            <ListWrapper>
              {renderOrdersList(orders, toggleDetails)}
            </ListWrapper>
          </>
        )}
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return { account: state.account };
};

export default connect(mapStateToProps, {})(AdminOrders);
