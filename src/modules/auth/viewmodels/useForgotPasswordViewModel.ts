/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';

export const useForgotPasswordViewModel = (navigation: any) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const handlePhoneChange = (text: string) => {
    setPhoneNumber(text);
    if (error) setError(undefined);
  };

  const handleResetPassword = async () => {
    if (phoneNumber.length < 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    setIsLoading(true);
    try {
      navigation.navigate('Otp', { phoneNumber: phoneNumber });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return {
    phoneNumber,
    error,
    isLoading,
    handlePhoneChange,
    handleResetPassword,
    handleBack,
  };
};