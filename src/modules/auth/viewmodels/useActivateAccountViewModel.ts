import { useState } from 'react';
import { useAuthRepository } from '../repositories/authRepository';

export const useActivateAccountViewModel = (onSuccess: (phone: string) => void) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [uiError, setUiError] = useState<string | null>(null);

  const activateAccountMutation = useAuthRepository.useActivateAccount();

  const handleActivateAccount = () => {
    setUiError(null);

    if (!phoneNumber || !password || !confirmPassword) {
      setUiError('Please fill in all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      setUiError('The passwords do not match.');
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
          setUiError(err.response?.data?.message || err.message);
        },
      }
    );
  };

  return {
    phoneNumber, setPhoneNumber,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    error: uiError,
    isLoading: activateAccountMutation.isPending,
    handleActivateAccount,
  };
};