import api from "../../services/api";
import { SIGN_IN, SIGN_UP } from "../../types"

export const signInUser = (credentials) => async (dispatch) => {
  const response = await api.post("/signin", credentials);
  if (response.status === 200) {
    dispatch({ type: SIGN_IN, payload: response.data });
    localStorage.setItem("token",response.data.accessToken)
  } else {
    // TODO: add a better error messaging system
    window.alert(response.status);
  }
};

export const signUpUser = (credentials) => async (dispatch) => {
  const response = await api.post("/signup", credentials);
  if (response.status === 201) {
    dispatch({ type: SIGN_UP, payload: response.data });
  } else {
    // TODO: add a better error messaging system
    window.alert(response.status);
  }
};

export const logout = () => async () => {
  localStorage.removeItem('token')
  window.location.pathname = '/user/sign-in'
}