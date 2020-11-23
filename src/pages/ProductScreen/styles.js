import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: 80%;
  padding: 0px 25px 20px 10px;
  display: flex;
  margin: 40px 8px;
`;

export const CardImage = styled.img`
  background-color: #E5E5E5;
  padding: 20px;
  border-radius: 8px;
  width: 70%;
  position: relative;

`;

export const CardInfo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h4`
  font-size: 24px;
  font-weight: 700;
  margin: 0 20px 15px 20px;
  display: flex;
  justify-content: space-between;
`;

export const CardSubTitle = styled.h5`
  font-size: 18px;
  font-weight: 500;
  margin: 20px;
`;

export const CardRating = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #BA181B;
`;

export const ProductPrice = styled.div`
  font-size: 16px;
  margin: 0 20px;
  font-weight: 700;
  color: #E5383B;
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: -20px;
`;

export const Button = styled.div`
  width: 32px;
  height: 32px;
  font-weight:700;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:50%;
  margin: 20px;
  margin-bottom: 0;
  margin-right: 4px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.5);
  transition: .3s;
  &:nth-child(1){
    background: white;
    color: #BA181B;
  }
  &:nth-child(2){
    background: #E5383B;
    color: #FFFFFF;
  }

  &:hover {
    &:nth-child(1){
    background: #e5e5e5;
    color: #BA181B;
    }
    &:nth-child(2){
      background: #BA181B;
      color: #e5e5e5;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
`;

