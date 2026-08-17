import { useMutation } from '@tanstack/react-query';
import { authApi } from '../services/authApi';
import {
  ActivateAccountRequestDTO,
  ActivateAccountResponseDTO,
  VerifyOtpRequestDTO,
  VerifyOtpResponseDTO,
  ResendOtpRequestDTO,
  LoginRequestDTO,
  LoginResponseDTO,
  ForgotPasswordRequestDTO,
  ForgotPasswordRequestResponseDTO,
  ForgotPasswordVerifyOtpRequestDTO,
  ForgotPasswordVerifyOtpResponseDTO,
  ResetPasswordRequestDTO,
} from '../services/dto/auth.dto';

export const useAuthRepository = {
  useActivateAccount: () => {
    return useMutation<
      ActivateAccountResponseDTO,
      Error,
      ActivateAccountRequestDTO
    >({
      mutationFn: authApi.activateAccount,
    });
  },

  useVerifyActivateAccountOtp: () => {
    return useMutation<VerifyOtpResponseDTO, Error, VerifyOtpRequestDTO>({
      mutationFn: authApi.verifyActivateAccountOtp,
    });
  },

  useResendActivateAccountOtp: () => {
    return useMutation<{ message: string }, Error, ResendOtpRequestDTO>({
      mutationFn: authApi.resendActivateAccountOtp,
    });
  },

  useLogin: () => {
    return useMutation<LoginResponseDTO, Error, LoginRequestDTO>({
      mutationFn: authApi.login,
    });
  },

  useForgotPasswordRequest: () => {
    return useMutation<
      ForgotPasswordRequestResponseDTO,
      Error,
      ForgotPasswordRequestDTO
    >({
      mutationFn: authApi.forgotPasswordRequest,
    });
  },

  useForgotPasswordVerifyOtp: () => {
    return useMutation<
      ForgotPasswordVerifyOtpResponseDTO,
      Error,
      ForgotPasswordVerifyOtpRequestDTO
    >({
      mutationFn: authApi.forgotPasswordVerifyOtp,
    });
  },

  useForgotPasswordResendOtp: () => {
    return useMutation<{ message: string }, Error, ResendOtpRequestDTO>({
      mutationFn: authApi.forgotPasswordResendOtp,
    });
  },

  useResetPassword: () => {
    return useMutation<{ message: string }, Error, ResetPasswordRequestDTO>({
      mutationFn: authApi.resetPassword,
    });
  },

  useDeleteAccount: () => {
    return useMutation<{ message: string }, Error>({ mutationFn: authApi.deleteAccount });
  },

  useLogout: () => {
    return useMutation<{ message: string }, Error>({
      mutationFn: authApi.logout,
    });
  },
};

