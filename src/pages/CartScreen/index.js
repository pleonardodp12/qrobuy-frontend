import React from 'react';
import ScrollContainer from "react-indiana-drag-scroll";
import ProductInCart from '../../components/ProductInCart';
import ButtonConfirm from '../../components/ButtonConfirm';
import CardProduct from "../../components/CardProduct";
import { ContainerCart, ButtonContinue, ProductOrderInfo } from './styles';



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

      <ProductOrderInfo>
        Total: 1200,00 R$;
      </ProductOrderInfo>

      <ButtonConfirm textButton="Finalizar"/>
      <ButtonContinue> Continuar Comprando</ButtonContinue>

      <ScrollContainer className="scroll-container" style={{ display: "flex" }}>
        {renderCartProduct()}
      </ScrollContainer>
    </ContainerCart>
  )
}

export default CartScreen;
