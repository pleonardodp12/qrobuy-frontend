import styled from 'styled-components';

export const Card = styled.div`
  width: 180px;
  height: 180px;
  padding: 8px;
  background: #E5E5E5;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 40px 8px;
  a{
    width: 100%;
    align-self: center;
    position: relative;
    img {
      width: 60%;
      position: relative;
      top: -40px;
      left: 20%;
    }
  }
`;

export const CardImage = styled.img`
 

`;

export const CardBody = styled.div`
  position: relative;
  top: -30px;
  width: 160px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
`;

export const CardSubTitle = styled.h5`
  font-size: 14px;
  font-weight: 500;
`;

export const CardRating = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #BA181B;
`;

export const ProductPrice = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #EE6A6C;
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

