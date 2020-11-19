import styled from 'styled-components';

export const  WrapperInput = styled.div`
  width: 300px;
  background-color: transparent;
  padding: 12px;
`;

export const InputData = styled.div`
  height: 40px;
  width: 100%;
  position: relative;

  input {
    height: 100%;
    width: 100%;
    border: none;
    border-bottom: 2px solid silver;
    font-size: 16px;
    background-color: transparent;
    color: grey;
  }

  label {
    position: absolute;
    bottom: 10px;
    left: 0;
    color: grey;
    pointer-events: none;
    transition: all 0.3s ease;
  }

  input:focus ~ label,
  input:valid ~ label{
    transform: translateY(-24px);
    font-size: 14px;
    color: #BA181B;
  }

  
`;

export const Underline = styled.div`
  position: absolute;
  bottom: 0px;
  height: 2px;
  width: 100%;

  &::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background-color: #BA181B;
    transform: scaleX(0);
    transition: transform .3s ease;
  }

  input:focus ~ &::before,
  input:valid ~ &::before {
    transform: scaleX(1);
  }
`;