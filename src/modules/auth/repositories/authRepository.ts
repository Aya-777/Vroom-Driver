import { useMutation } from '@tanstack/react-query';
import { authApi } from '../services/authApi';
import { 
  SignupRequestDTO, 
  SignupResponseDTO, 
  VerifyOtpRequestDTO, 
  VerifyOtpResponseDTO,
  ResendOtpRequestDTO
} from '../services/dto/auth.dto';

export const useAuthRepository = {
    useSignup: () => {
    return useMutation<SignupResponseDTO, Error, SignupRequestDTO>({
      mutationFn: authApi.signup,
    });
  },

  useVerifyOtp: () => {
    return useMutation<VerifyOtpResponseDTO, Error, VerifyOtpRequestDTO>({
      mutationFn: authApi.verifyOtp,
    });
  },

  useResendOtp: () => {
    return useMutation<{ message: string }, Error, ResendOtpRequestDTO>({
      mutationFn: authApi.resendOtp,
    });
  },
};