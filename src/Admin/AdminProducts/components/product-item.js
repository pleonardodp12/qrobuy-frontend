import { Name, ProductHead, ProductBtns, ProductItemContainer } from "../styles";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";

export const ProductItem = ({ order, handleClick }) => (
  <ProductItemContainer onClick={() => handleClick()}>
    <ProductHead>
      <img src={order.image}></img>
      <Name>{order.name}</Name>
    </ProductHead>
    <ProductBtns>
      <AiFillEdit onClick={() => console.log('editou')} />
      <AiOutlineDelete onClick={() => console.log('clicou')} />
    </ProductBtns>
  </ProductItemContainer>
);
