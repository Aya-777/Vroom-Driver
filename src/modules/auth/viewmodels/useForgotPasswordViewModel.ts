import { useState } from 'react';
import { useAuthRepository } from '../repositories/authRepository';

export const useForgotPasswordViewModel = (navigation: any) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [uiError, setUiError] = useState<string | null>(null);

  const requestMutation = useAuthRepository.useForgotPasswordRequest();

  const handlePhoneChange = (text: string) => {
    setPhoneNumber(text);
    if (uiError) setUiError(null);
  };

  const handleResetPassword = () => {
    setUiError(null);

    if (!phoneNumber) {
      setUiError('Please enter your phone number.');
      return;
    }

    requestMutation.mutate(
      {
        phone_number: phoneNumber,
        expected_role: 'driver',
      },
      {
        onSuccess: () => {
          navigation.navigate('Otp', { phoneNumber: phoneNumber , type: 'forgot_password' });
        },
        onError: (err: any) => {
          setUiError(err.response?.data?.message || err.message || 'Failed to send OTP');
        },
      }
    );
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return {
    phoneNumber,
    handlePhoneChange,
    error: uiError,
    isLoading: requestMutation.isPending,
    handleResetPassword,
    handleBack,
  };
};