import { combineReducers } from "redux";
import { accountReducer } from "./accountReducer";
import { productsReducer } from "./productReducer";

export default combineReducers({
  account: accountReducer,
  products: productsReducer,
});
