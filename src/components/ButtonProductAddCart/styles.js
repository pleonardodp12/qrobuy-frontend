import styled from 'styled-components';

export const ButtonContainer = styled.div`
  width: 90%;
  max-width: 300px;
  height: 65px;
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

export const QuantityButton = styled.div`
  width: 40px;
  height: 100%;
  padding: 4px;
  background: white;
  border: 1px solid #E5383B;
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
  border: none;
  background: transparent;
  border-bottom: 1px solid #E5383B;
  color: #E5383B;
  font-weight: bold;
  font-size: 18px;
`;

export const Less = styled.button`
  width: 100%;
  height: 50%;
  outline: 0;
  border: none;
  background: transparent;
  color: #E5383B;
  font-weight: bold;
  font-size: 18px;
`;