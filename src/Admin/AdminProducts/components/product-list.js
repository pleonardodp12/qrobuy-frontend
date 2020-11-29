import React from "react";
import { ProductListContainer } from "../styles";
import { ProductItem } from "./product-item";

export const renderProductList = (product, toggleDetails) => {
  const productList = [];
  product.forEach((product, index) => {
    productList.push(
      <ProductListContainer key={index}>
        <ProductItem order={product} handleClick={() => toggleDetails(product)} />
      </ProductListContainer>
    );
  });
  return productList;
};
