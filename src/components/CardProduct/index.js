import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubTitle,
  CardRating,
  ProductPrice,
  CardFooter,
  Button,
  ContainerButtons } from './styles';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import formatCurrency from '../../utils/formatCurrency';

const CardProduct = ({ product }) => {
  return (
    <Card>
      <Link to={`/product/${product._id}`}>
        <img src={product.imageUrl} alt={product.name} />
      </Link>
      <CardBody>
        <Link to={`/product/${product._id}`}>
          <CardTitle>{product.name} <CardRating>17<AiFillHeart/></CardRating></CardTitle>
        </Link>
        <CardSubTitle>{product.description}</CardSubTitle>
      </CardBody>

      <CardFooter>
          <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
          <ContainerButtons>
            <Button><AiFillHeart/></Button>
          </ContainerButtons>
        </CardFooter>
    </Card>
  )
}

export default CardProduct;