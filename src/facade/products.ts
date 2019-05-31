import { getProductsApi } from '../utils/rootApi';

export const getAllProducts = () => getProductsApi()
    .get('/')
    .then(res => res.data);

export const getProduct = (id: number) => getProductsApi()
    .get(`/${id}`)
    .then(res => res.data);
