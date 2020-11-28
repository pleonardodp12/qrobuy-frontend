import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import api from '../../services/api';
import { AiFillHeart, AiFillShopping } from 'react-icons/ai';
import { addToCart } from '../../redux/actions/cartActions';
import {
  ProductWrapper,
  CardImage,
  CardInfo,
  CardTitle,
  ProductDescription,
  LikedBy,
  ProductPrice,
  ProductMain,
  ButtonContainer,
} from './styles';

const ProductScreen = ({ addToCart, match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data} = await api.get(`/product/${match.params.id}`);
      setProduct(data);
      console.log(data)
    };
    fetchProduct();

  }, [match]);
 
  return (
    <>
    {!product ? (<div>Carregando</div>) : (
      <ProductWrapper>
        <ProductMain>
        <CardImage src={product.imageUrl} alt={product.name}></CardImage>
        <CardInfo>
          <CardTitle>{product.name}</CardTitle>
          <ProductPrice>Preço: {product.price}</ProductPrice>
        </CardInfo>
        </ProductMain>
        <LikedBy> <AiFillHeart />17 pessoas gostaram</LikedBy>
        <ProductDescription>
          {product.description}
        </ProductDescription>

        <ButtonContainer onClick={() => {addToCart(product)}}>
          Adicionar
          <div><AiFillShopping />+</div>
        </ButtonContainer>
      </ProductWrapper>)
    }
    </>
  );
};

export default connect(null, {
  addToCart,
}
)(ProductScreen)