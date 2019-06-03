import { Reducer } from 'redux';
import { CartTypes } from '../constants/types';
import { CartState } from '../types';

const initialState: CartState = {
  products: [],
  totalValue: 0,
};

const reducer: Reducer<CartState> = (state = initialState, action) => {
  const { product } = action;
  // const productIndex: number = state.products.indexOf(prod => prod.id == id);
  switch (action.type) {
    case CartTypes.ADD_TO_CART:
      return {
        ...state,
        products: [...state.products, product],
        totalValue: state.totalValue + product.price,
      };

    // case CartTypes.REMOVE_FROM_CART:
    //   return {
    //     ...state,
    //     totalValue: state.totalValue - state.products[productIndex].price,
    //     products: state.products.splice(productIndex, 1),
    //   };

    default:
      return state;
  }
};

export default reducer;
