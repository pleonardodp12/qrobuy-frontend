import { DELETE_PRODUCT, FETCH_PRODUCTS } from '../../types';

export const productsReducer = (state = {}, action) => {
  console.log(action.payload)
  switch (action.type){
    case FETCH_PRODUCTS:
      return { items: action.payload }
    case DELETE_PRODUCT:
      return { ...state, deletedProducts }
    default:
      return state
  };
};

export const deletedProducts = (productId, state) => {
  const updatedProducts = state.filter((_, index) => index !== productId);
  return updatedProducts;
};
