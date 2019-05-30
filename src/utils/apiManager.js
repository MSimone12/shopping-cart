import axios from 'axios';

const apiErrorAction = error => ({ type: 'api_error', error });

const GENERIC_API_ERROR = {
  code: 9999,
  msg: 'Ocorreu um erro interno',
};

export default (baseURL) => {
  const instance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  instance.interceptors.response.use(undefined, (error) => {
    if (error.response && error.response.data) throw apiErrorAction(error.response.data);
    throw apiErrorAction(GENERIC_API_ERROR);
  });
  return instance;
};
