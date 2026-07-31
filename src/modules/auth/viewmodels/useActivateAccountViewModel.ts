import { useState } from 'react';
import { useAuthRepository } from '../repositories/authRepository';

export const useActivateAccountViewModel = (onSuccess: (phone: string) => void) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [uiError, setUiError] = useState<string | null>(null);

  const activateAccountMutation = useAuthRepository.useActivateAccount();

  const phoneError =
    phoneNumber.length > 0 && (!phoneNumber.startsWith('09') || phoneNumber.length < 10)
      ? 'phoneNumberStart'
      : undefined;

  const passwordError =
    password.length > 0 && password.length < 8 ? 'passwordLength' : undefined;

  const confirmPasswordError =
    confirmPassword.length > 0 && confirmPassword !== password ? 'passwordMismatch' : undefined;

  const handleActivateAccount = () => {
    setUiError(null);

    if (!phoneNumber || !password || !confirmPassword) {
      setUiError('Please fill in all required fields.');
      return;
    }

    if (phoneError || passwordError || confirmPasswordError) {
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
    phoneError,
    passwordError,
    confirmPasswordError,
    isLoading: activateAccountMutation.isPending,
    handleActivateAccount,
  };
};