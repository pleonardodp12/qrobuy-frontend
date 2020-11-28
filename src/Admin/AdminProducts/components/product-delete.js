import React from "react";
import { Link } from 'react-router-dom';
import { ProductDeletePage, Name, ProductDeleteHead, ProductDeleteBtns} from "../styles";

const ProductDelete = () => {
    return (
        <ProductDeletePage>

            <ProductDeleteHead>
                <img src="../../../assets/fone1.png"></img>
                Você está deletando o produto:
                <Name></Name>
            </ProductDeleteHead>

            <ProductDeleteBtns>
                <button><Link to="/admin/products">Confirmar</Link></button>
                <button><Link to="/admin/products">Cancelar</Link></button>
            </ProductDeleteBtns>

        </ProductDeletePage>
    )
}

export default ProductDelete;