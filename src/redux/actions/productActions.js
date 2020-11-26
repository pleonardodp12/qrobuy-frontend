import { FETCH_PRODUCTS } from '../../types';
import api from '../../services/api';
import mockedProducts from '../../__mocks__/mocked-products';

export const fetchProducts = () => async (dispatch) => {
  // const res = await api.get("/products")
  const res = mockedProducts

  dispatch({
    type: FETCH_PRODUCTS,
    payload: res,
  });
};