import styled from "styled-components";

export const WrapperInput = styled.div`
  height: 50px;
  width: 300px;
  background-color: transparent;
  padding: 12px;
  position: relative;
`;

export const InputData = styled.div`
  input {      
    height: 50px;
    width: 100%;
    border: 1px solid #ba181b;
    border-radius: 12px;
    font-size: 16px;
    background-color: transparent;
    color: #000000;
    font-weight: bold;
    padding-right: 10px;
    padding-left: 25%;
    padding-top: 6%;
    padding-bottom: 6%;
    position: relative;
  }

  input::placeholder {
    color: #BA181B;
  }

  svg {
    position: absolute;
    left: 9%;
    top: 67%;
    font-size: 0.9rem;
    width: 40px;
  }

  svg path {
    fill: #000;
  }
`;
