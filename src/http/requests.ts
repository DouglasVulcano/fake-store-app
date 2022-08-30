import axios, { AxiosRequestConfig } from 'axios';
import { IData } from './models';

/**
 * this is Axios Instance by base url
 * @param {IData} data
 */
export const api = (data: IData) => {
  const conf: AxiosRequestConfig = {
    baseURL: data.baseURL,
    url: data.url,
    method: data.method,
    // headers: getHeader(),
  };
  if (data.method !== 'GET' && data.payload) conf.data = data.payload;
  return axios(conf);
};
