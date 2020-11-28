import React,  { useEffect, useState } from 'react';
import SearchButton from "../../components/SearchButton";
import { Container, ListWrapper } from "./styles";

import { mockedProducts } from "./__mocks__/mocked-products"; // mocked values
import { ProductDetails } from "./components/product-details";
import { renderProductList } from "./components/product-list";

const AdminProducts = () => {
  // const [orders, setOrders] = useState([]);
  const [details, setDetails] = useState(false);
  const [product, setProduct] = useState({});

  const getProduct = async () => {
    // const ordersList = await qrobuyServer.get("/orders");
    // setOrders(ordersList.body);
  };

  useEffect(() => {
    // getOrders();
  }, []);

  const toggleDetails = (product) => {
    setDetails(!details);
    setProduct(product);
  };

  return (
    <>
      <Container>
          <SearchButton /> 
          {details ? (
          <ProductDetails product={product} setDetails={setDetails} />
        ) :
          <ListWrapper>
            {renderProductList(mockedProducts, toggleDetails)} 
          </ListWrapper>
        }
      </Container>
    </>
  );
};

export default AdminProducts
