import React from "react";
import {
  ProductDetailsContainer,
  ProductLabel,
  ProductInput,
  TextWrapper,
} from "../styles";

export const ProductDetails = ({ product, setDetails }) => {
  return (
    <ProductDetailsContainer>
      <TextWrapper>

        <ProductLabel>Nome:</ProductLabel>
        <ProductInput value={product.name}></ProductInput>
        
        <ProductLabel>Categoria:</ProductLabel>
        <ProductInput value={product.category}></ProductInput>
        
        <ProductLabel>Imagem:</ProductLabel>
        <ProductInput value={product.image}></ProductInput>
        
        <ProductLabel>Custo:</ProductLabel>
        <ProductInput value={product.cost}></ProductInput>

        <ProductLabel>Preço:</ProductLabel>
        <ProductInput value={product.price}></ProductInput>

        <ProductLabel>Quantidade em estoque:</ProductLabel>
        <ProductInput value={product.unit}></ProductInput>
        
        <ProductLabel>Descrição:</ProductLabel>
        <ProductInput value={product.about}></ProductInput>
      </TextWrapper>
      <button onClick={() => setDetails(false)}>close</button>
    </ProductDetailsContainer>
  );
};
