import api from "../../services/api";
import { FETCH_PRODUCTS, DELETE_PRODUCT, CREATE_PRODUCT, EDIT_PRODUCT } from "../../types";

export const fetchProducts = () => async (dispatch) => {
  const response = await api.get("/products")
  if (response.status === 200) {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: response.data,
    });
  } else {
    window.alert(response.status);
  }
};

export const deleteProduct = (product, match) => async (dispatch) => {
  await api.delete(`/product/${match.params.id}`, {
    headers: {
    },
    method: 'DELETE',
    body: JSON.stringify(product)
  })
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: data.id
      });
    });
};

export const editProduct = (product) => async (dispatch) => {
  await api.patch("/product/:id", {
    headers: {
      
    },
    method: 'PATCH',
    body: JSON.stringify(product)
  })
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: EDIT_PRODUCT,
        payload: data
      });
  });
}

export const createProduct = (product, match) => async (dispatch) => {
 await api.post(`/product/${match.params.id}`, {
   headers: {
   },
   method: 'POST',
   body: JSON.stringify(product)
 })
   .then(res => res.json())
   .then(data => {
     dispatch({
       type: CREATE_PRODUCT,
       payload: data
     });
   });
};
