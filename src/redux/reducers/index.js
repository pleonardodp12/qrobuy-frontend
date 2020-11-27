import { combineReducers } from "redux";
import { accountReducer } from "./accountReducer";
import { cartReducer } from "./cartReducers";
import { orderReducer } from "./orderReducers";
import { productsReducer } from "./productReducer";

export default combineReducers({
  account: accountReducer,
  products: productsReducer,
  cart: cartReducer,
  order: orderReducer,
});
