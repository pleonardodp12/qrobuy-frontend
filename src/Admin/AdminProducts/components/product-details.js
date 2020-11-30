import React, { useState } from "react";
import {
  ProductDetailsContainer,
  ProductLabel,
  ProductInput,
  TextWrapper,
} from "../styles";
import { editProduct } from "../../../redux/actions/productActions";
import { connect } from "react-redux";
import BottomNavbar from "./bottomnavbar";

export const ProductDetails = ({ editProduct, product, setDetails }) => {
  const [productEdit, setProductEdit] = useState({ ...product });

  const onChange = (event) => {
    setProductEdit(event.target.value);
  };

  console.log(product)
  return (
    <ProductDetailsContainer>
      <TextWrapper>
        <ProductLabel>Nome:</ProductLabel>
        <ProductInput
          value={productEdit.name}
          onChange={onChange}
        ></ProductInput>

        <ProductLabel>Categoria:</ProductLabel>
        <ProductInput
          value={productEdit.category}
          onChange={onChange}
        ></ProductInput>

        <ProductLabel>Imagem:</ProductLabel>
        <ProductInput
          value={productEdit.image}
          onChange={onChange}
        ></ProductInput>

        <ProductLabel>Custo:</ProductLabel>
        <ProductInput
          value={productEdit.cost}
          onChange={onChange}
        ></ProductInput>

        <ProductLabel>Preço:</ProductLabel>
        <ProductInput
          value={productEdit.price}
          onChange={onChange}
        ></ProductInput>

        <ProductLabel>Quantidade em estoque:</ProductLabel>
        <ProductInput
          value={productEdit.unit}
          onChange={onChange}
        ></ProductInput>

        <ProductLabel>Descrição:</ProductLabel>
        <ProductInput
          value={productEdit.about}
          onChange={onChange}
        ></ProductInput>
      </TextWrapper>
      <button onClick={() => setDetails(false)}>close</button>
      <BottomNavbar onClick={editProduct} link="/" text="Salvar produto" />
      <img src={product.qrCodeString} />
      <img src={product.imageUrl} />
    </ProductDetailsContainer>
  );
};

export default connect(null, { editProduct })(ProductDetails);
