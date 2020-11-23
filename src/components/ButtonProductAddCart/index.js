import React, { useState } from 'react';
import { AiFillShopping } from 'react-icons/ai';
import { ButtonContainer, QuantityButton, More, Less } from './styles';

const ButtonProductAddCart = () => {

  const [quantity, setQuantity] = useState(1);
  const priceProduct = 400;

  function addToCart(){
    setQuantity(quantity + 1)
  }

  function removeFromCart(){
    if (quantity === 0 ) return;

    setQuantity(quantity - 1)
  }
  return (
    <ButtonContainer>
      <div><AiFillShopping />+</div>
      <h5> {priceProduct} R$</h5>
      <QuantityButton>
          <More onClick={addToCart}>+</More>
          <Less onClick={removeFromCart}>-</Less>
        </QuantityButton>
    </ButtonContainer>
  )
}

export default ButtonProductAddCart
