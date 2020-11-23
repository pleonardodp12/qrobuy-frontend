import styled from 'styled-components';

export const ContainerCart = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ButtonContinue = styled.button`
  width: 240px;
  height: 57px;
  border-radius: 4px;       
  background: white;
  color: #BA181B;
  font-weight: bold;
  font-size: 16px;
  margin: 8px 0;
  border: 1px solid #BA181B;
  transition: ease all .3s;
  &:hover {
    background: #e5e5e5;
    box-shadow: 0px 1px 2px #BA181B;
  }
`;


export const ProductOrderInfo = styled.div`
  margin: 24px 0;
  color: #E5383B;
  font-size: 24px;
  font-weight: bold;
`;