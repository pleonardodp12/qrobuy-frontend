import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';
import ButtonConfirm from '../../components/ButtonConfirm';
import formatCurrency from '../../utils/formatCurrency';
import { BiSad } from 'react-icons/bi';
import {
  ContainerCart,
  ProductOrderInfo,
  ProductInCartCard,
  ProductInfo,
  QuantityProduct,
  QuantityButton,
  More,
  Less,
  EmptyCart
} from './styles';
import { Link } from 'react-router-dom';


const CartScreen = ({ addToCart, removeFromCart, cartItems, product }) => {
  return (
    <>
    {console.log('***CART ITEMS', cartItems)}
    {cartItems.cartItem !== [] ? (
    <ContainerCart>
      {cartItems.map(cartItem => (
        <ProductInCartCard key={cartItem._id}>
          {console.log('CARTITEM',cartItem)}
          <img src={cartItem.imageUrl} alt="produto" />
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
      {cartItems.length === 0 ? (
        <EmptyCart>Seu carrinho está vazio <BiSad/></EmptyCart>
      ) : (
        <>
          <ProductOrderInfo>
            Total: {" "}
            <strong>{formatCurrency(
              cartItems.reduce((a, c) => a + c.price * c.count, 0))}</strong>
          </ProductOrderInfo>
          <Link to="/checkout">
            <ButtonConfirm textButton="Finalizar"/>
          </Link>
        </>
      )}
      

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