import styled from 'styled-components';

export const InputWrapperCheckout = styled.div`
  width: 230px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  color: #BA181B;
  margin: 8px 0;
  input {
    padding: 8px 8px 8px 48px;
    border-radius: 4px;
    border: 1px solid #BA181B;
    color: grey;
    font-size: 18px;
  }
  svg {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 12px;
    top: 50%;
  }
  span {
    width: 1px;
    height: 24px;
    background: #BA181B;
    position: absolute;
    left: 40px;
    top: 24px;
  }
`;