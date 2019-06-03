import { Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { CartTypes } from '../constants/types';
import { CartState } from '../types';

const initialState: CartState = {
  products: [],
  totalValue: 0,
};

const reducer: Reducer<CartState> = (state = initialState, action) => {
  const { product, id } = action;
  switch (action.type) {
    case CartTypes.ADD_TO_CART:
      return {
        ...state,
        products: [...state.products, { ...product, quantity: 1 }],
        totalValue: state.totalValue + product.price,
      };

    case CartTypes.REMOVE_FROM_CART:
      return {
        ...state,
        totalValue:
          state.totalValue
          - state.products[state.products.findIndex(product => product.id === id)].price,
        products: state.products.filter(product => product.id !== id),
      };

    case CartTypes.RAISE_QUANTITY:
      return {
        ...state,
        totalValue:
          state.totalValue
          + state.products[state.products.findIndex(product => product.id === id)].price,
        products: state.products.map((product) => {
          if (product.id === id) {
            product.quantity += 1;
          }
          return product;
        }),
      };

    case CartTypes.REDUCE_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === id) {
            product.quantity -= 1;
          }
          return product;
        }),
        totalValue:
          state.totalValue
          - state.products[state.products.findIndex(product => product.id === id)].price,
      };

    default:
      return state;
  }
};

export default persistReducer(
  {
    key: 'cart',
    whitelist: ['products', 'totalValue'],
    storage,
  },
  reducer,
);
