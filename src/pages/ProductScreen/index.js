import React from "react";
import ButtonProductAddCart from '../../components/ButtonProductAddCart'
import {
  Card,
  CardImage,
  CardInfo,
  CardTitle,
  CardSubTitle,
  ProductDescription,
  LikedBy,
  ProductPrice,
  ProductMain,
} from './styles';
import headPhone from '../../assets/images/fone 1.png';

const ProductScreen = () => {
 
  return (
    <Card>
      <ProductMain>
       <CardImage src={headPhone}></CardImage>
       <CardInfo>
        <CardTitle>HeadPhone</CardTitle>
        <CardSubTitle>Bluetooth 2.0</CardSubTitle>
        <ProductPrice>Preço: R$ 400,00</ProductPrice>
       </CardInfo>
      </ProductMain>
      <LikedBy>14 pessoas gostaram</LikedBy>
      <ProductDescription>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      </ProductDescription>
      <ButtonProductAddCart/>
    </Card>
  );
};

export default ProductScreen;
