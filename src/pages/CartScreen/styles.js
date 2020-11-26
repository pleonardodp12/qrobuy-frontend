import styled from 'styled-components';

export const ContainerCart = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ProductOrderInfo = styled.div`
  margin: 24px 0;
  color: #E5383B;
  font-size: 24px;
  font-weight: bold;
`;

export const ProductInCartCard = styled.div`
  width: 90%;
  height: 100px;
  padding: 4px 4px 4px 24px;
  background: #E5E5E5;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  position: relative;
  display: flex;
  align-items: center;
  margin: 8px auto;
  &:first-child{
    margin-top: 32px;
  }
  img {
    width: 80px;
  }

  @media(max-width: 800px) {
    padding: 4px;
    img {
      width: 60px;
    }
  }
`;

export const ProductInfo = styled.div`
  width: 30%;
  height: auto;
  margin: 0 24px;

  h3 {
    color: #E5383B;
  }

  h5 {
    font-weight: bolder;
    color: #000000bb
  }
  @media(max-width: 800px) {
    margin: 0 4px;
  }
`;

export const QuantityProduct = styled.div`
  width: 30%;
  height: auto;
  margin: 0 24px;
  font-size: 15px;
  h4 {
    color: #E5383B;
  }
`;

export const QuantityButton = styled.div`
  width: 40px;
  height: 100%;
  background: silver;
  position: absolute;
  right: 0;
  border-radius: 0 4px 4px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export const More = styled.button`
  width: 100%;
  height: 50%;
  outline: 0;
  font-weight: bold;
  font-size: 24px;
  border: none;
  background: #1e991e;
  border-radius: 0 4px 0px 0;
  color: white;
  
`;

export const Less = styled.button`
  width: 100%;
  height: 50%;
  outline: 0;
  font-weight: bold;
  font-size: 18px;
  border: none;
  background: #fa1121;
  border-radius: 0 0px 4px 0;
  color: white;
`;
