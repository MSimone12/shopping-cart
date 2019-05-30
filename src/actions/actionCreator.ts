import { ProductTypes, CartTypes } from '../constants/types';
import { Product } from '../types';

export const productsReceived = (products: Product[]) => ({
  type: ProductTypes.PRODUCTS_RECEIVED,
  products,
});

export const addToCart = (product: Product) => ({ type: CartTypes.ADD_TO_CART, product });

export const removeFromCart = (id: number) => ({ type: CartTypes.REMOVE_FROM_CART, id });
