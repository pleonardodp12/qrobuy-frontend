import { Name, Subtitle, OrderPrice, OrderItemContainer } from "../styles";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";

export const OrderItem = ({ order, handleClick }) => (
  <OrderItemContainer onClick={() => handleClick()}>
    <div>
      <Name>{order.name}</Name>
    </div>
    <div>
      <AiFillEdit /><AiOutlineDelete />
    </div>
  </OrderItemContainer>
);
