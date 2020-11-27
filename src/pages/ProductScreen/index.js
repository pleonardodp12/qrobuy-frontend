import React from "react";
import { connect } from 'react-redux';
import { AiFillHeart, AiFillShopping } from 'react-icons/ai';
import { addToCart } from '../../redux/actions/cartActions';
import mockedProducts from '../../__mocks__/mocked-products';
import {
  ProductWrapper,
  CardImage,
  CardInfo,
  CardTitle,
  ProductDescription,
  LikedBy,
  ProductPrice,
  ProductMain,
  ButtonContainer,
} from './styles';

const ProductScreen = ({ addToCart, match }) => {
  // const [product, setProduct] = useState({});

  //HOOK PARA PUXAR PRODUTOS
  /* useEffect(() => {
    const fetchProduct = async () => {
      const p = await api.get(`/api/products/${match.params.id}`);
      setProduct(p);
    };

    fetchProduct();

  }, [match]);
  */
  const product = mockedProducts.find((p) => p._id === match.params.id)
 
  return (
    <>
    {!product ? (<div>Carregando</div>) : (
      <ProductWrapper>
        <ProductMain>
        <CardImage src={product.image} alt={product.name}></CardImage>
        <CardInfo>
          <CardTitle>{product.name}</CardTitle>
          <ProductPrice>Preço: {product.price}</ProductPrice>
        </CardInfo>
        </ProductMain>
        <LikedBy> <AiFillHeart />{product.likes} pessoas gostaram</LikedBy>
        <ProductDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </ProductDescription>

        <ButtonContainer onClick={() => {addToCart(product)}}>
          Adicionar
          <div><AiFillShopping />+</div>
        </ButtonContainer>
      </ProductWrapper>)
    }
    </>
  );
};

export default connect(null, {
  addToCart,
}
)(ProductScreen)