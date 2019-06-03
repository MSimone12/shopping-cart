import { Reducer } from 'redux';
import { ProductTypes } from '../constants/types';
import { ProductsState } from '../types';

const initialState: ProductsState = {
  products: [],
  product: null,
};

const reducer: Reducer<ProductsState> = (state = initialState, action) => {
  const { products, product } = action;
  switch (action.type) {
    case ProductTypes.PRODUCTS_RECEIVED:
      return {
        ...state,
        products,
      };

    case ProductTypes.PRODUCT_RECEIVED:
      return {
        ...state,
        product,
      };

    default:
      return state;
  }
};

export default reducer;
