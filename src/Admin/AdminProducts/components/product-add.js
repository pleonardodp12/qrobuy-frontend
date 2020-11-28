import React from "react";
import {
  ProductDetailsContainer,
  ProductLabel,
  ProductInput,
  TextWrapper,
} from "../styles";

const CreateProduct  = ({ product, setDetails }) => {

  //o ideal era ter feito um forEach pra renderizar os detalhes com label/input... assim é horroroso HAHAHA

  return (
    <ProductDetailsContainer>
      <TextWrapper>

        <ProductLabel>Nome:</ProductLabel>
        <ProductInput></ProductInput>
        
        <ProductLabel>Categoria:</ProductLabel>
        <ProductInput></ProductInput>
        
        <ProductLabel>Imagem:</ProductLabel>
        <ProductInput></ProductInput>
        
        <ProductLabel>Custo:</ProductLabel>
        <ProductInput></ProductInput>

        <ProductLabel>Preço:</ProductLabel>
        <ProductInput></ProductInput>

        <ProductLabel>Quantidade em estoque:</ProductLabel>
        <ProductInput></ProductInput>
        
        <ProductLabel>Descrição:</ProductLabel>
        <ProductInput></ProductInput>
      </TextWrapper>
      <button onClick={() => setDetails(false)}>close</button>
    </ProductDetailsContainer>
  );
};

export default CreateProduct;