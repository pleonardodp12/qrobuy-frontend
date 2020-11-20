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
    color: grey;
    color: #000000;
    font-weight: bold;
    padding-right: 35px;
    padding-left: 20px;
    padding-top: 6%;
    padding-bottom: 6%;
    position: relative;
  }

  svg {
    position: absolute;
    right: 12%;
    top: 43%;
    font-size: 1.7rem;
  }

  svg path {
    fill: #ba181b;
  }
`;
