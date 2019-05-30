import { getAllProducts } from '../facade/products';
import { productsReceived } from './actionCreator';

export const getProducts = () => (dispatch: Function) => getAllProducts().then((products) => {
    dispatch(productsReceived(products));
  });
