import styled from 'styled-components';

export const Header = styled.header`
  background: #BA181B;
  color: #eee;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  z-index: 9999;
  .button-login {
    position: absolute;
    right: 0px;
    background: #BA181B;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #eeeeee55;
    svg {
      width: 22px;
      height: 22px;
      color: white;
      justify-self: flex-end;
    }
  }
  img {
    width: 120px;
    height: 100%;
  }
`;