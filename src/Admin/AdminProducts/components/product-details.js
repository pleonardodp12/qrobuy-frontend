import React, { useState } from "react";
import {
  ProductDetailsContainer,
  ProductLabel,
  ProductInput,
  TextWrapper,
} from "../styles";
import { editProduct } from '../../../redux/actions/productActions';
import { connect } from 'react-redux';
import BottomNavbar from "./bottomnavbar";

export const ProductDetails = ({editProduct, product, setDetails }) => {
  const [productEdit, setProductEdit] = useState({...product});

  //o ideal era ter feito um forEach pra renderizar os detalhes com label/input... assim é horroroso HAHAHA


  const onChange = event => {
    setProductEdit(event.target.value)
  }
  return (
    <ProductDetailsContainer>
      <TextWrapper>

        <ProductLabel>Nome:</ProductLabel>
        <ProductInput value={productEdit.name} onChange={onChange}></ProductInput>
        
        <ProductLabel>Categoria:</ProductLabel>
        <ProductInput value={productEdit.category}></ProductInput>
        
        <ProductLabel>Imagem:</ProductLabel>
        <ProductInput value={productEdit.image}></ProductInput>
        
        <ProductLabel>Custo:</ProductLabel>
        <ProductInput value={productEdit.cost}></ProductInput>

        <ProductLabel>Preço:</ProductLabel>
        <ProductInput value={productEdit.price}></ProductInput>

        <ProductLabel>Quantidade em estoque:</ProductLabel>
        <ProductInput value={productEdit.unit}></ProductInput>
        
        <ProductLabel>Descrição:</ProductLabel>
        <ProductInput value={productEdit.about}></ProductInput>
      </TextWrapper>
      <button onClick={() => setDetails(false)}>close</button>
      <BottomNavbar onClick={editProduct} link="/" text="Salvar produto"/> 
    </ProductDetailsContainer>
  );
};

export default connect(null,{editProduct})(ProductDetails);
