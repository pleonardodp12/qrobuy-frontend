import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ListWrapper = styled.div`
  padding-top: 10%;
  width: 100%;
`;

export const Name = styled.p`
  font-weight: bold;
`;

export const OrderListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2%;
`;

export const OrderItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const OrderDetailsContainer = styled.div`
  width: 100%;
  padding: 10% 5% 5% 5%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  paddingBottom: 10%;
`;

export const OrderDetailsText = styled.p`
  padding: 5%;
  font-size: 14px;
  width: 100%;
`;
