import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';
import ButtonConfirm from '../../components/ButtonConfirm';
import formatCurrency from '../../utils/formatCurrency';
import {
  ContainerCart,
  ProductOrderInfo,
  ProductInCartCard,
  ProductInfo,
  QuantityProduct,
  QuantityButton,
  More,
  Less
} from './styles';


const CartScreen = ({ addToCart, removeFromCart, cartItems, product }) => {
  return (
    <>
    {console.log('***CART ITEMS', cartItems)}
    {cartItems.cartItem !== [] ? (
    <ContainerCart>
      {cartItems.map(cartItem => (
        <ProductInCartCard key={cartItem._id}>
          {console.log('CARTITEM',cartItem)}
          <img src={cartItem.image} alt="produto" />
          <ProductInfo>
            <h3>{cartItem.name}</h3>
          </ProductInfo>
          <QuantityProduct>
            Quantidade: {cartItem.count}
            <h4>{formatCurrency(cartItem.price)}</h4>
          </QuantityProduct>
          <QuantityButton>
            <More onClick={() => addToCart(cartItem)}>+</More>
            
            <Less onClick={() => removeFromCart(cartItem)}>X</Less>
          </QuantityButton>
        </ProductInCartCard>
      ))}

      <ProductOrderInfo>
        Total:
        {formatCurrency(
          cartItems.reduce((a, c) => a + c.price * c.count, 0))}
      </ProductOrderInfo>

      <ButtonConfirm textButton="Finalizar"/>
    </ContainerCart>
    ): (<div> carrinho vazio</div>)}
    
    </>
  )
}

const mapStateToProps = (state) => {
  console.log('STATE.cart.items', state.cart.cartItems)
  return { cartItems: state.cart.cartItems };
};

export default connect(mapStateToProps,{
  addToCart,
  removeFromCart,
}
)(CartScreen)