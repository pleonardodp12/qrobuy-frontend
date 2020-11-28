import React from "react";
import { Link } from 'react-router-dom';
import { Name, ProductHead, ProductBtns, ProductItemContainer } from "../styles";

const ProductDelete = () => {
    return (
        <>
            <ProductHead>
                <Name></Name>
            </ProductHead>
    
            <Link to="/admin/products">a</Link>
            <Link to="/admin/products">b</Link>
        </>
    )
}

export default ProductDelete;