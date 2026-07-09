import { useMutation } from '@tanstack/react-query';
import { authApi } from '../services/authApi';
import {
  SignupRequestDTO,
  SignupResponseDTO,
  VerifyOtpRequestDTO,
  VerifyOtpResponseDTO,
  ResendOtpRequestDTO,
  LoginRequestDTO,
  LoginResponseDTO,
  ForgotPasswordRequestDTO,
  ForgotPasswordRequestResponseDTO,
  ForgotPasswordVerifyOtpRequestDTO,
  ForgotPasswordVerifyOtpResponseDTO,
  ForgetPasswordResendOtpRequestDTO,
  ResetPasswordRequestDTO
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

  useLogin: () => {
    return useMutation<LoginResponseDTO, Error, LoginRequestDTO>({
      mutationFn: authApi.login,
    });
  },

  useForgotPasswordRequest: () => {
    return useMutation<ForgotPasswordRequestResponseDTO, Error, ForgotPasswordRequestDTO>({
      mutationFn: authApi.forgotPasswordRequest,
    });
  },

  useForgotPasswordVerifyOtp: () => {
    return useMutation<ForgotPasswordVerifyOtpResponseDTO, Error, ForgotPasswordVerifyOtpRequestDTO>({
      mutationFn: authApi.forgotPasswordVerifyOtp,
    });
  },

  useForgotPasswordResendOtp: () => {
    return useMutation<{ message: string }, Error, ForgetPasswordResendOtpRequestDTO>({
      mutationFn: authApi.forgotPasswordResendOtp,
    });
  },

  useResetPassword: () => {
    return useMutation<{message: string}, Error, ResetPasswordRequestDTO>({
      mutationFn: authApi.resetPassword,
    });
  },

  
};