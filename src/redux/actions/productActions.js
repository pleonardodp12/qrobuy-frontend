import api from "../../services/api";
import { FETCH_PRODUCTS, CREATE_PRODUCT } from "../../types";

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

