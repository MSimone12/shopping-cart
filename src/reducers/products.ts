import { Reducer } from 'redux';
import { ProductTypes } from '../constants/types';
import { ProductsState } from '../types';

const initialState: ProductsState = {
  products: [],
};

const reducer: Reducer<ProductsState> = (state = initialState, action) => {
  const { products } = action;
  switch (action.type) {
    case ProductTypes.PRODUCTS_RECEIVED:
      return {
        ...state,
        products,
      };

    default:
      return state;
  }
};

export default reducer;
