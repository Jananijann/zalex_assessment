import axios from 'axios';
import {Config} from 'react-native-config';

export const api = axios.create({
  baseURL: Config.API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(config => {
  const separator = config.url?.includes('?') ? '&' : '?';
  config.url = `${config.url}${separator}subscription-key=${Config.API_KEY}`;
  return config;
});

api.interceptors.response.use(
  response => response,
  error => {
    const message =
      error.response?.data?.message || error.message || 'An unexpected error occurred';
    return Promise.reject(new Error(message));
  },
);
