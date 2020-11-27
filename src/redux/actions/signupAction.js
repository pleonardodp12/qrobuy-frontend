import { SIGN_UP } from '../../types';
import api from '../../services/api';

export const loginUser = (data) => (dispatch) => {
  // methodo post 
  api.post("/signup", {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  }).then(res => res.json()).then(data => {
    dispatch({
      type: SIGN_UP,
      payload: data
    });
  });
};
