import React from 'react';
import { WrapperInput, InputData, Underline } from './styles';

const InputForm = ({ labelName, ...rest}) => {
  return (
    <WrapperInput>
      <InputData>
        <input type="text" required {...rest} />
        <label>{labelName}</label>
        <Underline></Underline>
      </InputData>
    </WrapperInput>
  );
};

export default InputForm;
