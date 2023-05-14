import axios from 'axios';
import { TodoInputType } from '../types/types';

type BaseInstance = {
  url: string;
};

type GetDeleteType = BaseInstance & {
  request?: any;
};

type PostType = BaseInstance & {
  data: TodoInputType;
  config?: any;
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
  get: ({ url, request }: GetDeleteType) => baseInstance.get(url, request),
  delete: ({ url, request }: GetDeleteType) =>
    baseInstance.delete(url, request),
  post: ({ url, data, config }: PostType) =>
    baseInstance.post(url, data, config),
};

export default apiRequest;
