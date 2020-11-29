import { DELETE_PRODUCT, CREATE_PRODUCT, EDIT_PRODUCT, FETCH_PRODUCTS } from '../../types';

export const productsReducer = (state = {}, action) => {
  console.log(action.payload)
  switch (action.type){
    case FETCH_PRODUCTS:
      return { items: action.payload }
    case DELETE_PRODUCT:
      return { ...state, deletedProducts }
    case EDIT_PRODUCT:
      return { item: action.payload }
    case CREATE_PRODUCT:
      return { item: action.payload }
    default:
      return state
  };
};

export const deletedProducts = (productId, state) => {
  const updatedProducts = state.filter((_, index) => index !== productId);
  return updatedProducts;
};
