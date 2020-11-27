export const accountReducer = (state = [], action) => {
  switch (action.type) {
    case "SIGN_UP":
      return [...state, action.payload];
    case "SIGN_IN":
      return [action.payload];
    default:
      return state;
  }
};
