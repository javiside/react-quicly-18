const InitialCart = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0
};

export const rootReducer = (state = InitialCart, action) => {
  if (action.type === 'addToCart') {
    let newCart = { ...state };
    newCart[action.item]++;
    return newCart;
  }
  return state;
};
