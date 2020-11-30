import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2%;
  padding-bottom: 2%;
`;

export const ListWrapper = styled.div`
  padding-top: 10%;
  width: 100%;
`;

export const Name = styled.p`
  font-weight: bold;
`;

export const Subtitle = styled.p`
  font-size: 14px;
`;

export const OrderPrice = styled.span`
  color: #378036;
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

  h3 {
    text-align: center;
  }

  button { 
    width: 100%;
    display: block; 
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #378036;
    font-weight: bold;
    border: none;
    font-size: 1.1rem;
    text-align: center;
    color: #fff;
    border-radius: 10px;
    margin-top: 10%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  paddingbottom: 10%;
`;

export const OrderDetailsText = styled.p`
  padding: 3%;
  font-size: 1rem;
  width: 100%;

  span {
    color: #378036;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;
