import { SIGN_IN } from '../../types';

export const signinReducer = (state = {}, action) => {
  switch (action.type){
    case SIGN_IN:
      return { account: action.payload }
    default:
      return state
  };
};