import axios, { AxiosRequestConfig } from 'axios';
import { TodoInputType } from '../types/types';

export type BaseInstance = {
  url: string;
  request?: AxiosRequestConfig;
  data?: TodoInputType;
  config?: AxiosRequestConfig;
};

const baseURL = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_TOKEN;

const baseInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

baseInstance.interceptors.response.use(({ data }) => data);

const apiRequest = {
  get: ({ url, request }: BaseInstance) => baseInstance.get(url, request),
  delete: ({ url, request }: BaseInstance) => baseInstance.delete(url, request),
  post: ({ url, data, config }: BaseInstance) =>
    baseInstance.post(url, data, config),
};

export default apiRequest;
