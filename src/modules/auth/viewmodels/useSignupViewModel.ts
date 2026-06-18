import { useState } from 'react';
import { useAuthRepository } from '../repositories/authRepository';

export const useSignupViewModel = (onSuccess: (phone: string) => void) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [uiError, setUiError] = useState<string | null>(null);

  const signupMutation = useAuthRepository.useSignup();

  const handleSignup = () => {
    setUiError(null);

    if (!firstName || !lastName || !phoneNumber || !password || !confirmPassword) {
      setUiError('Please fill in all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      setUiError('The passwords do not match.');
      return;
    }

    signupMutation.mutate(
      {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        password,
        confirm_password: confirmPassword,
        profile_image: profileImage,
      },
      {
        onSuccess: () => {

          onSuccess(phoneNumber);
        },
        onError: (err: any) => {
          console.log('Signup Network Error Full:', err);
          console.log('Signup Error Response Data:', err.response?.data);

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
    firstName, setFirstName,
    lastName, setLastName,
    phoneNumber, setPhoneNumber,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    profileImage, setProfileImage,
    error: uiError,
    isLoading: signupMutation.isPending,
    handleSignup,
  };
};