import React from 'react';
import { InputWrapperCheckout } from './styles';

const InputCreditCard = ({ labelName, imgInput, ...rest}) => {
  return (
      <InputWrapperCheckout>
        {imgInput}
        <span></span>
        <label>{labelName}</label>
        <input type="text" required {...rest} />
      </InputWrapperCheckout>
  )
}

export default InputCreditCard
