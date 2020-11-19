import styled from 'styled-components';

export const ButtonComponent = styled.button`
  width: 180px;
  height: 57px;

  background: #BA181B;
  color: white;
  font-size: 16px;
  font-weight: 700;
  border-radius: 4px;
  outline: 0;
  border: 1px solid #BA181B;
  transition: .3s;

  &:hover {
    background: #AA181B;
    color: #e5e5e5;
    box-shadow: 0px 1px 4px #BA181B;
  }
`;