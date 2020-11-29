import api from "../../services/api";
import { FETCH_PRODUCTS, DELETE_PRODUCT } from "../../types";
import mockedProducts from "../../__mocks__/mocked-products";
import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  // const res = await api.get("/products")
  const res = mockedProducts;

  dispatch({
    type: FETCH_PRODUCTS,
    payload: res,
  });
};

export const deleteProduct = (product) => //async
 (dispatch) => {
  console.log('entrou')

   dispatch({
        type: DELETE_PRODUCT,
        payload: 'oi vc entrou'
      });

//  await api.delete("/admin/delete-product", {
//    headers: {
      
//    },
//    method: 'DELETE',
//    body: JSON.stringify(product)
//  })
//    .then(res => res.json())
//    .then(data => {
//      dispatch({
//        type: DELETE_PRODUCT,
//        payload: data.id
//      });
//    });
};

export const clearOrder = () => (dispatch) => {
  dispatch({ type: DELETE_PRODUCT });
}

