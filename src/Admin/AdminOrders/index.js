import React, { useEffect, useState } from "react";
import SearchButton from "../../components/SearchButton";
import { Container, ListWrapper } from "./styles";

import { mockedOrders } from "./__mocks__/mocked-orders"; // mocked values
import { OrderDetails } from "./components/order-details";
import { renderOrdersList } from "./components/order-list";
import { makeAdminApi } from "../../services/adminApi";
import { connect } from "react-redux";

const AdminOrders = ({ account }) => {
  const [orders, setOrders] = useState([]);
  const [details, setDetails] = useState(false);
  const [order, setOrder] = useState({});

  const getOrders = async () => {
    const response = await makeAdminApi(
      // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYzBlYzY4YThmM2I3MDAzNDY2MDAzYyIsImlhdCI6MTYwNjcwNTE2Mn0.cz-FOQEbIUX9leuqgKrUsxvK_eATwwA5MunVdQRK33E"
      account.accessToken
    ).get("/orders");
    setOrders(response.data);
  };

  useEffect(() => {
    getOrders();
  }, []);

  const toggleDetails = (order) => {
    setDetails(!details);
    setOrder(order);
  };
  console.log(orders)

  return (
    <>
      <Container>
        {details ? (
          <OrderDetails order={order} setDetails={setDetails} />
        ) : (
          <>
            <SearchButton />
            <ListWrapper>{renderOrdersList(orders, toggleDetails)}</ListWrapper>
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
