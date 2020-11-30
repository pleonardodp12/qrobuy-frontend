import { Name, ProductHead, ProductBtns, ProductItemContainer } from "../styles";
import { Link } from 'react-router-dom';
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";

export const ProductItem = ({ product, handleClick }) => (
  <ProductItemContainer>
    <ProductHead>
      <img src={product.imageUrl}></img>
      <Name>{product.name}</Name>
    </ProductHead>
    <ProductBtns>
      <AiFillEdit onClick={() => handleClick()} />
      <Link to="delete-product"><AiOutlineDelete/></Link>
    </ProductBtns>
  </ProductItemContainer>
);