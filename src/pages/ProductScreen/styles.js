import styled from 'styled-components';

export const ProductWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 90vh;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

export const ProductMain = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
`

export const CardImage = styled.img`
  background-color: #E5E5E5;
  padding: 20px;
  border-radius: 8px;
  position: relative;
`;

export const CardInfo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const CardTitle = styled.h4`
  font-size: 24px;
  font-weight: 700;
  margin: 0 20px 0 20px;
  display: flex;
  color: #000000dd;
`;

export const ProductPrice = styled.div`
  font-size: 18px;
  margin: 0 20px;
  font-weight: 700;
  color: #E5383B;
`;

export const LikedBy = styled.div `
  width: 100%;
  height: 30px;
  padding: 10px;
  font-weight: 600;
  font-size: 18px;
  color: #E5383Bdd;
  display: flex;
  align-items: center;
  svg {
    margin-right: 4px;
  }
`;

export const ProductDescription = styled.div`
  width: 100%;
  height: 30%;
  text-align: justify;
  padding: 10px;
  display: flex;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  width: 90%;
  max-width: 300px;
  height: 65px;
  align-self: center;
  background: #E5383B;
  border-radius: 8px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  transition: ease .3s;
  
  div {
    display: flex;
    align-items: center;
    pointer-events: none;
  }
  
  svg {
    width: 32px;
    height: 32px;
  }
  
  &:hover {
    background: #F8483F;
    color: #e5e5e5;
    box-shadow: 0px 1px 3px #E5383B;
  }
`;