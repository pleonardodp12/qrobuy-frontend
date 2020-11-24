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
`;

export const CardTitle = styled.h4`
  font-size: 24px;
  font-weight: 700;
  margin: 0 20px 0 20px;
  display: flex;
`;

export const CardSubTitle = styled.h5`
  font-size: 18px;
  font-weight: 500;
  margin: 20px 20px 10px 20px;
`;

export const ProductPrice = styled.div`
  font-size: 16px;
  margin: 0 20px;
  font-weight: 700;
  color: #E5383B;
`;

export const LikedBy = styled.div `
  width: 100%;
  height: 30px;
  padding: 10px;
`

export const ProductDescription = styled.div`
  width: 100%;
  height: 30%;
  text-align: justify;
  padding: 10px;
  display: flex;
  margin-bottom: 10px
`