import axios from 'axios';
import i18n from 'i18next';
import { getAuthToken, getRefreshToken, setAuthToken } from '../store/authStore';
import { performLogout } from '../store/session';
import { ENDPOINTS } from './endpoints';

export const apiClient = axios.create({
  baseURL: 'http://192.168.1.9:8000/',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

apiClient.interceptors.request.use((config) => {
  config.headers['Accept-Language'] = i18n.language || 'en';
  const token = getAuthToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

let isRefreshing = false;
let pendingQueue: Array<(token: string) => void> = [];

const processQueue = (newToken: string) => {
  pendingQueue.forEach((resolveCb) => resolveCb(newToken));
  pendingQueue = [];
};

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      const refreshToken = getRefreshToken();

      if (!refreshToken) {
        performLogout();
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return new Promise((resolve) => {
          pendingQueue.push((newToken) => {
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            resolve(apiClient(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const { data } = await axios.post(
          `${apiClient.defaults.baseURL}${ENDPOINTS.AUTH.REFRESH_TOKEN}`,
          { refresh: refreshToken }
        );

        const newAccessToken = data.access;
        setAuthToken(newAccessToken);
        processQueue(newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        performLogout();
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    if (error.response) {
      console.log('Backend Error Data:', error.response.data);
    }
    return Promise.reject(error);
  }
);