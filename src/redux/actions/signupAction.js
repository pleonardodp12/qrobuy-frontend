import api from "../../services/api";

export const signUpUser = (credentials) => async (dispatch) => {
  const response = await api.post("/signup", credentials);
  if (response.status === 201) {
    dispatch({ type: "SIGN_UP", payload: response.data });
  } else {
    window.alert(response.status);
  }
};
