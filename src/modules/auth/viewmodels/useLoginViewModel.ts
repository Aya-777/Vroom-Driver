/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { useAuthActions } from '../../../core/store/authStore';

export function useLoginViewModel() {
  const { login } = useAuthActions();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (name: string, password: string) => {
    setIsLoading(true);
    try {
      const mockToken = "your_received_jwt_token_here";

      login(mockToken);

    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleLogin,
    isLoading,
  };
}