import { getProductsApi } from '../utils/rootApi';

export const getAllProducts = () => getProductsApi()
    .get('/')
    .then(res => res.data);
