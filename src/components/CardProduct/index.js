import React from 'react';
import {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardSubTitle,
  CardRating,
  ProductPrice,
  CardFooter,
  Button,
  ContainerButtons } from './styles';
import { AiFillHeart, AiFillShopping } from 'react-icons/ai';
import headPhone from '../../assets/images/fone 1.png';

const CardProduct = () => {
  return (
    <Card>
      <CardImage src={headPhone}></CardImage>
      <CardBody>
        <CardTitle>HeadPhone <CardRating>14<AiFillHeart/></CardRating></CardTitle>
        <CardSubTitle>Bluetooth 2.0</CardSubTitle>
      </CardBody>

      <CardFooter>
          <ProductPrice>R$ 400,00</ProductPrice>
          <ContainerButtons>
            <Button><AiFillShopping/>+</Button>
            <Button><AiFillHeart/></Button>
          </ContainerButtons>
        </CardFooter>
    </Card>
  )
}

export default CardProduct;