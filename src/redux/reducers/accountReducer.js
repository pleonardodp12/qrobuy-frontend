import { SIGN_IN, SIGN_UP, LOGOUT } from "../../types";

export const accountReducer = (state = {isAuthenticated: localStorage.getItem('token')}, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {...state, account: action.payload};
    case SIGN_IN:
      return {account: action.payload, isAuthenticated: true}
    case LOGOUT:
      return { account: action.payload, isAuthenticated: localStorage.removeItem('token')}
    default:
      return state;
  }
};
