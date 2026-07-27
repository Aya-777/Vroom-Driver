import { useState } from 'react';
import { useAuthActions } from '../../../core/store/authStore';
import { useAuthRepository } from '../repositories/authRepository';
import { useTranslation } from 'react-i18next';

export function useLoginViewModel() {
  const { login } = useAuthActions();
  const { t } = useTranslation(['auth']);

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

      const token = response.data.access;
      login(token);
    } catch (error: any) {
      console.error('Login failed', error);

      if (error.response?.status === 400) {
        setUiError(t('auth:invalidCredentials'));
      } else {
        setUiError(error.response?.data?.message || error.message);
      }
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