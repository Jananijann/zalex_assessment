import axios from 'axios';

const API_KEY = '47c395bf73324dc48473112f598220df';

export const api = axios.create({
  baseURL: 'https://zalexinc.azure-api.net',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(config => {
  const separator = config.url?.includes('?') ? '&' : '?';
  config.url = `${config.url}${separator}subscription-key=${API_KEY}`;
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
