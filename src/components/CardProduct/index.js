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
import { AiFillHeart, AiFillShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const CardProduct = ({ product }) => {
  return (
    <Card>
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <CardBody>
        <Link to={`/product/${product._id}`}>
          <CardTitle>{product.name} <CardRating>{product.likes}<AiFillHeart/></CardRating></CardTitle>
        </Link>
        <CardSubTitle>{product.description}</CardSubTitle>
      </CardBody>

      <CardFooter>
          <ProductPrice>{product.price}</ProductPrice>
          <ContainerButtons>
            <Button><AiFillShopping/>+</Button>
            <Button><AiFillHeart/></Button>
          </ContainerButtons>
        </CardFooter>
    </Card>
  )
}

export default CardProduct;