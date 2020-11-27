import styled from 'styled-components';

export const UserSignupContainer = styled.form`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  button {
    margin: 8px 0;
  }
`;

export const SignUpSuccess = styled.div`
  width: 100vw;
  height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 30px;
  position: absolute;
  z-index: 9999999;
  color: #E5383B;
  background: white;
  svg {
    width: 80px;
    height: 80px;
  }
  z-index: 100000;
`;