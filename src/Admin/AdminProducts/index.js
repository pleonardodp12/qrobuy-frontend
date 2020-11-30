import React, { useEffect, useState } from "react";

import BottomNavbar from "./components/bottomnavbar";
import SearchButton from "../../components/SearchButton";
import { Container, ListWrapper } from "./styles";

import { mockedProducts } from "./__mocks__/mocked-products"; // mocked values
import { ProductDetails } from "./components/product-details";
import { renderProductList } from "./components/product-list";
import { connect } from "react-redux";
import { fetchProducts } from "../../redux/actions/productActions";

const AdminProducts = ({ fetchProducts, products }) => {
  const [details, setDetails] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleDetails = (product) => {
    setDetails(!details);
    setProduct(product);
  };
  
  if (products !== undefined) {
    return (
      <>
        <Container>
          <SearchButton />
          {details ? (
            <ProductDetails product={product} setDetails={setDetails} />
          ) : (
            <ListWrapper>
              {renderProductList(products, toggleDetails)}
            </ListWrapper>
          )}
        </Container>

        {details ? (
          ""
        ) : (
          <BottomNavbar link="/admin/create-product" text="Adicionar produto" />
        )}
      </>
    );
  } else {
    return <div>Carregando...</div>;
  }
};

const mapStateToProps = (state) => {
  return { products: state.products.items };
};

export default connect(mapStateToProps, { fetchProducts })(AdminProducts);
