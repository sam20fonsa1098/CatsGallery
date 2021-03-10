import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import { IMGUR_URL } from '@env';

const api = axios.create({
  baseURL: IMGUR_URL,
});

export default api;
