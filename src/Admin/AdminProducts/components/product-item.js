import { Name, ProductHead, ProductBtns, ProductItemContainer } from "../styles";
import { Link } from 'react-router-dom';
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";

export const ProductItem = ({ order, handleClick }) => (
  <ProductItemContainer>
    <ProductHead>
      <img src={order.image}></img>
      <Name>{order.name}</Name>
    </ProductHead>
    <ProductBtns>
      <AiFillEdit onClick={() => handleClick()} />
      <Link to="delete-product"><AiOutlineDelete/></Link>
    </ProductBtns>
  </ProductItemContainer>
);