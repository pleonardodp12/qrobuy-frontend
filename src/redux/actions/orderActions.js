import { CLEAR_CART, CLEAR_ORDER, CREATE_ORDER } from '../../types';
import api from '../../services/api';

export const createOrder = (order) => (dispatch) => {
  // methodo post 
  await api.post("/orders", {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(order)
  })
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: CREATE_ORDER,
        payload: data
      });
      localStorage.clear("cartItems");
      dispatch({ type: CLEAR_CART });
    });
};

export const clearOrder = () => (dispatch) => {
  dispatch({ type: CLEAR_ORDER });
}