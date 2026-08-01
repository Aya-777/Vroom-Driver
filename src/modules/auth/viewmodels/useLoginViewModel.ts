import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuthActions } from '../../../core/store/authStore';
import { setCurrentUser } from '../../../core/store/userStore';
import { useAuthRepository } from '../repositories/authRepository';

export function useLoginViewModel() {
  const { login } = useAuthActions();
  const { t } = useTranslation(['common']);

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [uiError, setUiError] = useState<string | null>(null);

  const { mutateAsync: loginMutate, isPending: isLoading } = useAuthRepository.useLogin();

  const handleLogin = async () => {
    setUiError(null);

    if (!phone || !password) {
      setUiError('Please fill in all required fields.');
      return;
    }

    try {
      const response = await loginMutate({
        phone_number: phone,
        password: password,
        expected_role: 'driver',
      });

      const { access, refresh, user } = response.data;
      login(access, refresh);
      setCurrentUser(user);
    } catch (error: any) {
      if (error.response?.status === 400) {
        setUiError(t('auth:invalidCredentials'));
      }
      console.error('Login failed', error);
      setUiError(error.response?.data?.message || error.message);
    }
  };

  return {
    phone,
    setPhone,
    password,
    setPassword,
    handleLogin,
    isLoading,
    error: uiError,
    phoneError: null,
    passwordError: null,
  };
}