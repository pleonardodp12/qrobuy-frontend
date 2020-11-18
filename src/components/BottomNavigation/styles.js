import styled from 'styled-components';

export const BottomBar = styled.div`
  width: 100%;
  height: 50px;

  background-color: #BA181B;
  position: fixed;
  bottom: 0;
  color: white;

  display: flex;
  justify-content: space-around;
  align-items: center;
  svg {
    width: 32px;
    height: 32px;
    color: white;
    cursor: pointer;
    &:hover{
    opacity: .8;
  }
  }
`;

export const CircleButton = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  svg {
    color: #BA181B;
  }
`;