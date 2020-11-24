import { Name, Subtitle, OrderPrice, OrderItemContainer } from "../styles";

export const OrderItem = ({ order, handleClick }) => (
  <OrderItemContainer onClick={() => handleClick()}>
    <div>
      <Name>{order.name}</Name>
      <Subtitle>{order.tid}</Subtitle>
    </div>

    <div>
      <p>
        <OrderPrice>
          {(order.price / 100).toFixed(2).replace(".", ",")}
        </OrderPrice>{" "}
        R$
      </p>
      <Subtitle>{order.date}</Subtitle>
    </div>
  </OrderItemContainer>
);
