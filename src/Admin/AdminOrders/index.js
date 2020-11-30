import React, { useEffect, useState } from "react";
import SearchButton from "../../components/SearchButton";
import { Container, ListWrapper } from "./styles";

import { OrderDetails } from "./components/order-details";
import { renderOrdersList } from "./components/order-list";
import { makeAdminApi } from "../../services/adminApi";
import { connect } from "react-redux";

const AdminOrders = ({ account }) => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [details, setDetails] = useState(false);
  const [order, setOrder] = useState({});

  const getOrders = async () => {
    makeAdminApi(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYzBlYzY4YThmM2I3MDAzNDY2MDAzYyIsImlhdCI6MTYwNjcwNTE2Mn0.cz-FOQEbIUX9leuqgKrUsxvK_eATwwA5MunVdQRK33E"
      // account.accessToken
    )
      .get("/orders")
      .then((response) => setOrders(response.data))
      .catch((error) => setError(error.response.status));
  };

  useEffect(() => {
    getOrders();
  }, []);

  const toggleDetails = (order) => {
    setDetails(!details);
    setOrder(order);
  };
  if (!error) {
    return (
      <>
        <Container>
          {details ? (
            <OrderDetails order={order} setDetails={setDetails} />
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
  } else {
    window.alert('Não autorizado');
    window.location.pathname = '/user/sign-in'
  }
};

const mapStateToProps = (state) => {
  return { account: state.account };
};

export default connect(mapStateToProps, {})(AdminOrders);
