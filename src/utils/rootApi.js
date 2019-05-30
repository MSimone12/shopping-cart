import apiManager from './apiManager';

export const getProductsApi = () => apiManager('http://localhost:4000/products');
