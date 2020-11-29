import styled from 'styled-components';

export const UserDevolutionContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    margin-top: 20px;
    color: #BA181B
  }
  h3 {
    color: #BA181B;
    margin: 20px 0;
  }

  button {
    margin-top: 20px;
  }
`;

export const ConfirmEmailSuccess = styled.div`
  width: 100vw;
  height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 30px;
  position: absolute;
  top: 0;
  z-index: 9999999;
  color: #E5383B;
  background: white;
  svg {
    width: 80px;
    height: 80px;
  }
  z-index: 100000;
`;