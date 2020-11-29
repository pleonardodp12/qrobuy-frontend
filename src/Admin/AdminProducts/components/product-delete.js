import React from "react";
import { Link } from 'react-router-dom';
import { ProductDeletePage, Name, ProductDeleteHead, ProductDeleteBtns} from "../styles";
import { deleteProduct } from '../../../redux/actions/productActions';
import { connect } from 'react-redux';

const ProductDelete = ({deleteProduct}) => {
    return (
        <ProductDeletePage>

            <ProductDeleteHead>
                <img src="../../../assets/fone1.png"></img>
                Você está deletando o produto:
                <Name></Name>
            </ProductDeleteHead>

            <ProductDeleteBtns>
                <button onClick={deleteProduct}><Link to="/admin/products">Confirmar</Link></button>
                <button><Link to="/admin/products">Cancelar</Link></button>
            </ProductDeleteBtns>

        </ProductDeletePage>
    )
}

export default connect(null,{deleteProduct})(ProductDelete);