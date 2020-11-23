import styled from 'styled-components';

export const Header = styled.header`
  background: #BA181B;
  color: #eee;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 16px;
  z-index: 5;

  img {
    width: 120px;
    height: 100%;
  }
`;