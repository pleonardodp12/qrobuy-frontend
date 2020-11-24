import React from 'react';
import ScrollContainer from "react-indiana-drag-scroll";
import ProductInCart from '../../components/ProductInCart';
import ButtonConfirm from '../../components/ButtonConfirm';
import CardProduct from "../../components/CardProduct";
import { ContainerCart, ButtonContinue, ProductOrderInfo } from './styles';



const CartScreen = () => {
  return (
    <ContainerCart>
      <ProductInCart />

      <ProductOrderInfo>
        Total: 1200,00 R$;
      </ProductOrderInfo>

      <ButtonConfirm textButton="Finalizar"/>
      <ButtonContinue> Continuar Comprando</ButtonContinue>

      <ScrollContainer className="scroll-container" style={{ display: "flex" }}>
        <CardProduct product='' />
      </ScrollContainer>
    </ContainerCart>
  )
}

export default CartScreen;
