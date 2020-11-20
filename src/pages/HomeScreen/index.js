import React from "react";
import CardProduct from "../../components/CardProduct";
import ScrollContainer from "react-indiana-drag-scroll";
import { Container } from "./styles";

const HomeScreen = () => {
  function renderCartProduct() {
    let listProduct = [];
    for (let i = 0; i < 12; i++) {
      listProduct.push(<CardProduct />);
    }
    return listProduct;
  }

  return (
    <Container>
      <ScrollContainer className="scroll-container" style={{ display: "flex" }}>
        {renderCartProduct()}
      </ScrollContainer>
    </Container>
  );
};

export default HomeScreen;
