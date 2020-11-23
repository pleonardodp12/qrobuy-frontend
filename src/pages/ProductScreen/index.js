import React from "react";
import {
  Card,
  CardImage,
  CardInfo,
  CardTitle,
  CardSubTitle,
  CardRating,
  ProductPrice,
  CardFooter,
  Button,
  ContainerButtons } from './styles';
import { AiFillHeart, AiFillShopping } from 'react-icons/ai';
import headPhone from '../../assets/images/fone 1.png';

const ProductScreen = () => {
 
  return (
    <>
    <Card>
       <CardImage src={headPhone}></CardImage>
       <CardInfo>
        <CardTitle>HeadPhone</CardTitle>
        <CardSubTitle>Bluetooth 2.0</CardSubTitle>
        <ProductPrice>Preço: R$ 400,00</ProductPrice>
          <ContainerButtons>
            <Button>
              <AiFillHeart/>
            </Button>
          </ContainerButtons>
       </CardInfo>
    </Card>
    </>
  );
};

export default ProductScreen;
