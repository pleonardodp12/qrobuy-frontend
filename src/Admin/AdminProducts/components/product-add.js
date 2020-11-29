import React from "react";
import { Link } from 'react-router-dom';
import {
  ProductDetailsContainer,
  ProductLabel,
  ProductInput,
  TextWrapper,
  Container,
} from "../styles";
import BottomNavbar from './bottomnavbar';
import { createProduct } from '../../../redux/actions/productActions';
import { connect } from 'react-redux';

const CreateProduct  = ({ createProduct, product, setDetails }) => {

  //o ideal era ter feito um forEach pra renderizar os detalhes com label/input... assim é horroroso HAHAHA

  return (
    <Container>
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
      <Link to="/admin/products"><button>close</button></Link>
     <BottomNavbar onClick={createProduct} link="/" text="Adicionar produto"/> 
    </ProductDetailsContainer>
    </Container>
  );
};

export default connect(null,{createProduct})(CreateProduct);;