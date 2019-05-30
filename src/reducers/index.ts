import { combineReducers } from 'redux';

import global from './global';
import cart from './cart';
import products from './products';

export default combineReducers({
  global,
  products,
  cart,
});
