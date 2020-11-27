import api from "../../services/api";
import { FETCH_PRODUCTS, CREATE_PRODUCT } from "../../types";
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

