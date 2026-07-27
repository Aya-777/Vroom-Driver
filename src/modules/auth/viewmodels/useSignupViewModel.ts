import { useState } from 'react';
import { useAuthRepository } from '../repositories/authRepository';

export const useSignupViewModel = (onSuccess: (phone: string) => void) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [uiError, setUiError] = useState<string | null>(null);

  const activateAccountMutation = useAuthRepository.useActivateAccount();

  const confirmPasswordError =
    confirmPassword.length > 0 && confirmPassword !== password
      ? 'passwordMismatch'
      : undefined;

  const handleActivateAccount = () => {
    setUiError(null);

    if (!phoneNumber || !password || !confirmPassword) {
      setUiError('Please fill in all required fields.');
      return;
    }

    if (confirmPasswordError) {
      return;
    }

    activateAccountMutation.mutate(
      {
        phone_number: phoneNumber,
        password,
        confirm_password: confirmPassword,
      },
      {
        onSuccess: () => {
          onSuccess(phoneNumber);
        },
        onError: (err: any) => {
          console.log('Activate Account Network Error Full:', err);
          console.log('Activate Account Error Response Data:', err.response?.data);

          setUiError(
            err.response?.data?.message ||
            err.response?.data?.error ||
            err.message
          );
        },
      }
    );
  };

  return {
    phoneNumber, setPhoneNumber,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    error: uiError,
    confirmPasswordError,
    isLoading: activateAccountMutation.isPending,
    handleActivateAccount,
  };
};