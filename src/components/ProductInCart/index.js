import React, { useState } from 'react';
import { ProductInCartCard, ProductInfo, QuantityProduct, QuantityButton, More, Less } from './styles';
import product from '../../assets/images/fone 1.png';
const ProductInCart = () => {
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
    <ProductInCartCard>
        <img src={product} alt="produto" />
        <ProductInfo>
          <h3>HeadPhone</h3>
          <h5>Bluetooth Edifier Preto - W820BT</h5>
        </ProductInfo>
        <QuantityProduct>
          Quantidade: {quantity}
          <h4>R$ {priceProduct * quantity}</h4>
        </QuantityProduct>
        <QuantityButton>
          <More onClick={addToCart}>+</More>
          <Less onClick={removeFromCart}>-</Less>
        </QuantityButton>
    </ProductInCartCard>
  )
}

export default ProductInCart
