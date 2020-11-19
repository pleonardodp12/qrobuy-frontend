import React from 'react';
import { WrapperInput, InputData, Underline } from './styles';

const InputForm = ({ labelName }) => {
  return (
    <WrapperInput>
      <InputData>
        <input type="text" required/>
        <label>{labelName}</label>
        <Underline></Underline>
      </InputData>
    </WrapperInput>
  );
};

export default InputForm;
