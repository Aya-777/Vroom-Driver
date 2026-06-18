import { useAuthActions } from '../../../core/store/authStore';

export const useProfileActions = () => {
  const { logout } = useAuthActions();

  return {
    logout,
  };
};