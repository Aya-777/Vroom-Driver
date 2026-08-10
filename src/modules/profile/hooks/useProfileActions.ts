import { useAuthActions } from '../../../core/store/authStore';
import {
  getDeviceTokenId,
  setDeviceTokenId,
} from '../../../core/store/authStore';
import { useAuthRepository } from '../../auth/repositories/authRepository';
import { deactivateDeviceToken } from '../../notifications/repositories/notificationRepository';

export const useProfileActions = () => {
  const { logout } = useAuthActions();

  const logoutMutation = useAuthRepository.useLogout();

  const handleLogout = async () => {
    const deviceTokenId = getDeviceTokenId();
    if (deviceTokenId) {
      try {
        await deactivateDeviceToken(deviceTokenId);
      } catch (err) {
        console.warn('Failed to deactivate device token', err);
      }
      setDeviceTokenId(null);
    }

    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        logout();
      },

      onError: (err: any) => {
        if (err?.response?.status === 400 || err?.response?.status === 401) {
          logout();
          return;
        }

        console.error(err);
      },
    });
  };

  return {
    logout: handleLogout,
  };
};
