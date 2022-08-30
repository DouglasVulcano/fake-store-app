import { Method } from 'axios';

export interface IData {
  baseURL: string;
  url: string;
  method: Method;
  payload?: object;
}
