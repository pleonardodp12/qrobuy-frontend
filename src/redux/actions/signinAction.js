import api from "../../services/api";

export const signInUser = (credentials) => async (dispatch) => {
  console.log(credentials);
  const response = await api.post("/signin", credentials);
  if (response.status === 200) {
    dispatch({ type: "SIGN_IN", payload: response.data });
  } else {
    window.alert(response.status);
  }
};
