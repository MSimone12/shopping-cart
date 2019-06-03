import { Dispatch } from 'redux';

import { getAllProducts, getProduct } from '../facade/products';
import {
 productsReceived, startLoading, stopLoading, productReceived,
} from './actionCreator';

export const getProducts = () => (dispatch: Dispatch) => {
  dispatch(startLoading());
  return getAllProducts().then((products) => {
    dispatch(productsReceived(products));
    dispatch(stopLoading());
  });
};

export const getProductById = (id: number) => (dispatch: Dispatch) => {
  dispatch(startLoading());
  return getProduct(id).then((product) => {
    dispatch(productReceived(product));
    dispatch(stopLoading());
  });
};

export const addToCart = (id: number) => (dispatch: Dispatch) => {
  dispatch(startLoading());
  return getProduct(id).then(res => console.log(res));
};
