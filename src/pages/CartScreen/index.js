import React from 'react';
import ProductInCart from '../../components/ProductInCart';
import ButtonConfirm from '../../components/ButtonConfirm';
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
    </ContainerCart>
  )
}

export default CartScreen;
