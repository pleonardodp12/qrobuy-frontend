import React from "react";
import { WrapperInput, InputData } from "./styles";

const CardSelect = ({ defaultItem }) => {
    return (
        <WrapperInput>
            <InputData>
                <select>
                    <option value="">{defaultItem}</option>
                    <option>teste 1</option>
                    <option>teste 2</option>
                    <option>teste 3</option>
                </select>
            </InputData>
        </WrapperInput>
    );
};

export default CardSelect;
