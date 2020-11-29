import api from "../../services/api";
import { FETCH_PRODUCTS, DELETE_PRODUCT, CREATE_PRODUCT, EDIT_PRODUCT } from "../../types";
import mockedProducts from "../../__mocks__/mocked-products";
import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  const response = await api.get("/products")
  if (response.status === 200) {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: response.data,
    });
  } else {
    // TODO: add a better error messaging system
    window.alert(response.status);
  }
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

export const editProduct = (product) => //async
 (dispatch) => {
  console.log('entrou')

   dispatch({
        type: EDIT_PRODUCT,
        payload: 'oi vc entrou'
      });

//  await api.post("/admin/products", {
//    headers: {
      
//    },
//    method: 'POST',
//    body: JSON.stringify(product)
//  })
//    .then(res => res.json())
//    .then(data => {
//      dispatch({
//        type: EDIT_PRODUCT,
//        payload: data
//      });
//    });
}
