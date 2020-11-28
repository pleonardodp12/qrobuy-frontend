import { Name, Subtitle, OrderPrice, OrderItemContainer } from "../styles";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";

export const OrderItem = ({ order, handleClick }) => (
  <OrderItemContainer onClick={() => handleClick()}>
    <div>
      <img src={order.image}></img>
      <Name>{order.name}</Name>
    </div>
    <div>
      <a><AiFillEdit /></a>
      <a><AiOutlineDelete /></a>
    </div>
  </OrderItemContainer>
);
