import React from 'react';

import { ButtonComponent } from './styles';

const ButtonConfirm = ({ textButton, iconButton, ...rest }) => {
  return (
    <ButtonComponent {...rest}>
      {textButton} {iconButton}
    </ButtonComponent>
  )
}

export default ButtonConfirm;
