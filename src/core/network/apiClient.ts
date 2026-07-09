import axios from 'axios';
import i18n from 'i18next';
import { storageService } from '../storage/storage.service';

export const apiClient = axios.create({
  baseURL: 'http://192.168.1.101:8000/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const currentLanguage = i18n.language || 'en';
    config.headers['Accept-Language'] = currentLanguage;
    const token = storageService.get('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);