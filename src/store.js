import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { productsReducer } from "./redux/reducers/productReducer";
import { cartReducer } from "./redux/reducers/cartReducers";
import { orderReducer } from './redux/reducers/orderReducers';

const initialState = {};
const store = createStore(
  combineReducers({
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer
  }),
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;