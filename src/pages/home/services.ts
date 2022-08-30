import { baseURL } from 'src/http/api';
import { IData } from 'src/http/models';

export default {
  products: (): IData => ({
    method: 'GET',
    url: '/products',
    baseURL: baseURL,
  }),
};
