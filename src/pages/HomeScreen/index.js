import React, { useEffect } from "react";
import SearchButton from "../../components/SearchButton";
import CardProduct from "../../components/CardProduct";
import { Container, GridProducts, LoadingScreen } from "./styles";
import Lottie from "react-lottie";
import loadingAnimation from "../../assets/load-animation.json";
import { connect } from "react-redux";
import { fetchProducts } from "../../redux/actions/productActions";

const HomeScreen = ({ fetchProducts, products }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
 
  return (
    <>
       {products !== undefined ? (
        <Container>
          <SearchButton className="margin" />
          <h2>Nossos Produtos</h2>
          <GridProducts>
            {products.map((productMapped, index) => {
              return <CardProduct key={index} product={productMapped} />;
            })}
          </GridProducts>
        </Container>
      ) : (
        <LoadingScreen>
          <Lottie options={defaultOptions} height={200} width={200}>
            carregando
          </Lottie>
        </LoadingScreen>
      )} 
    </>
  );
};

const mapStateToProps = (state) => {
  return { products: state.products.items };
};

export default connect(mapStateToProps, { fetchProducts })(HomeScreen);