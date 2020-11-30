import React from "react";
import { MiniInputWrapper } from "./styles";

const MiniInput = ({ labelName, ...rest }) => {
  return (
    <MiniInputWrapper>
      <label>{labelName}</label>
      <input type="text" required {...rest} />
    </MiniInputWrapper>
  );
};

export default MiniInput;
