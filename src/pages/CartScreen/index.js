import React from 'react';
import ScrollContainer from "react-indiana-drag-scroll";
import ProductInCart from '../../components/ProductInCart';
import ButtonConfirm from '../../components/ButtonConfirm';
import CardProduct from "../../components/CardProduct";
import { ContainerCart } from './styles';



const CartScreen = () => {
  function renderCartProduct() {
    let listProduct = [];
    for (let i = 0; i < 1; i++) {
      listProduct.push(<CardProduct />);
    }
    return listProduct;
  }

  return (
    <ContainerCart>
      <ProductInCart />
      <ButtonConfirm textButton="Finalizar"/>

      <ScrollContainer className="scroll-container" style={{ display: "flex" }}>
        {renderCartProduct()}
      </ScrollContainer>
    </ContainerCart>
  )
}

export default CartScreen;
