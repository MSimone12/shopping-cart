import { Dispatch } from 'redux';

import { getAllProducts, getProduct } from '../facade/products';
import {
  productsReceived,
  startLoading,
  stopLoading,
  productReceived,
  addToCart,
  raiseQuantity,
  reduceQuantity,
  removeFromCart,
} from './actionCreator';
import { Product } from '../types';

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

export const addProductToCart = (id: number) => (dispatch: Dispatch, getState: Function) => {
  dispatch(startLoading());
  return getProduct(id)
    .then((product: Product) => {
      const stateProducts: Product[] = getState().cart.products;
      const prod = stateProducts.find(product => product.id === id);
      if (prod) {
        if (prod.quantity < product.quantity) {
          dispatch(raiseQuantity(id));
        }
      } else {
        dispatch(addToCart(product));
      }
    })
    .finally(() => dispatch(stopLoading()));
};

export const raiseProductQuantity = (id: number) => (dispatch: Dispatch, getState: Function) => {
  dispatch(startLoading());
  return getProduct(id)
    .then((product: Product) => {
      const { products } = getState().cart;
      const prod = products.find((product: Product) => product.id === id);
      if (prod) {
        if (prod.quantity < product.quantity) {
          dispatch(raiseQuantity(id));
        }
      }
    })
    .finally(() => dispatch(stopLoading()));
};

export const reduceProductQuantity = (id: number) => (dispatch: Dispatch, getState: Function) => {
  dispatch(startLoading());
  return getProduct(id)
    .then((product: Product) => {
      const { products } = getState().cart;
      const prod = products.find((product: Product) => product.id === id);
      if (prod) {
        if (prod.quantity === 1) dispatch(removeFromCart(id));
        else dispatch(reduceQuantity(id));
      }
    })
    .finally(() => dispatch(stopLoading()));
};

export const removeProductFromCart = (id: number) => (dispatch: Dispatch) => {
  dispatch(startLoading());
  dispatch(removeFromCart(id));
  dispatch(stopLoading());
};
