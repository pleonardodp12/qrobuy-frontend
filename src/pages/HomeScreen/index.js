import React, { useEffect } from "react";
import SearchButton from "../../components/SearchButton";
import CardProduct from "../../components/CardProduct";
import { Container, GridProducts } from "./styles";
import { connect } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productActions';

const HomeScreen = ({ fetchProducts, products }) => {

  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <>
    {products !== undefined ? (
      <Container>
        <SearchButton className="margin"/>
        <h2>Nossos Produtos</h2>
        <GridProducts>
          {products.map((productMapped, index) => {
            return (
              <CardProduct key={index} product={productMapped}/>
            )
          })}
        </GridProducts>
      </Container>)
      :
      (<div>Carregando</div>)
    }
  </>
  );
};

const mapStateToProps = (state) => {
  return { products: state.products.items };
};


export default connect(mapStateToProps, { fetchProducts })(HomeScreen)