import React from 'react';

import { ButtonComponent } from './styles';

const ButtonConfirm = ({ textButton, ...rest }) => {
  return (
    <ButtonComponent {...rest}>
      {textButton}
    </ButtonComponent>
  )
}

export default ButtonConfirm;
