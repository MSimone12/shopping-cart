import { ProductTypes, CartTypes, GlobalTypes } from '../constants/types';
import { Product } from '../types';

export const startLoading = () => ({ type: GlobalTypes.START_LOADING });

export const stopLoading = () => ({ type: GlobalTypes.STOP_LOADING });

export const productsReceived = (products: Product[]) => ({
  type: ProductTypes.PRODUCTS_RECEIVED,
  products,
});

export const productReceived = (product: Product) => ({
  type: ProductTypes.PRODUCT_RECEIVED,
  product,
});

export const addToCart = (product: Product) => ({ type: CartTypes.ADD_TO_CART, product });

export const removeFromCart = (id: number) => ({ type: CartTypes.REMOVE_FROM_CART, id });
