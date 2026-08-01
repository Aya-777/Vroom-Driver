import { logoutAuth } from './authStore';
import { clearCurrentUser } from './userStore';

export const performLogout = () => {
    logoutAuth();
    clearCurrentUser();
};