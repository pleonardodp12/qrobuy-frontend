import styled from 'styled-components';

export const MiniInputWrapper = styled.div`
  width: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  color: #BA181B;
  
  input {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #BA181B;
    color: #BA181B;
    color: grey;
    font-size: 18px;
    ::placeholder {
      color: grey;
    }
  }
`;