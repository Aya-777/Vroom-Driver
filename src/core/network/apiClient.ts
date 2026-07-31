import axios from 'axios';
import i18n from 'i18next';
import { getAuthToken } from '../store/authStore';

export const apiClient = axios.create({
  baseURL: 'http://192.168.1.100:8000/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const currentLanguage = i18n.language || 'en';
    config.headers['Accept-Language'] = currentLanguage;
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }

);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // THIS will now show you the actual validation error from your backend
      console.log("Backend Error Data:", error.response.data);
    }
    return Promise.reject(error);
  }
);