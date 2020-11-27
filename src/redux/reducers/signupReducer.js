import { SIGN_UP } from '../../types';

export const signupReducer = (state = {}, action) => {
  switch (action.type){
    case SIGN_UP:
      return { account: action.payload }
    default:
      return state
  };
};