import React from "react";
import SearchButton from "../../components/SearchButton";
import CardProduct from "../../components/CardProduct";
import { Container, GridProducts } from "./styles";
import mockedProducts from '../../__mocks__/mocked-products';

const HomeScreen = () => {
  
  return (
    <Container>
      <SearchButton className="margin"/>
      <h2>Nossos Produtos</h2>
      <GridProducts>
        {mockedProducts.map((product) => {
          return <CardProduct product={product}/>
        })
        }
      </GridProducts>
    </Container>
  );
};

export default HomeScreen;
