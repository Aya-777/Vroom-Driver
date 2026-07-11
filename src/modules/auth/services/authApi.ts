import { apiClient } from '../../../core/network/apiClient';
import { ENDPOINTS } from '../../../core/network/endpoints';
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
} from './dto/auth.dto';

export const authApi = {

    activateAccount: async (data: ActivateAccountRequestDTO): Promise<ActivateAccountResponseDTO> => {
        const response = await apiClient.post<ActivateAccountResponseDTO>(
            ENDPOINTS.DRIVER.ACTIVATE_ACCOUNT,
            data
        );
        return response.data;
    },

    verifyActivateAccountOtp: async (data: VerifyOtpRequestDTO): Promise<VerifyOtpResponseDTO> => {
        const response = await apiClient.post<VerifyOtpResponseDTO>(
            ENDPOINTS.DRIVER.ACTIVATE_ACCOUNT_VERIFY_OTP,
            data
        );
        return response.data;
    },

    resendActivateAccountOtp: async (data: ResendOtpRequestDTO): Promise<{ message: string }> => {
        const response = await apiClient.post<{ message: string }>(
            ENDPOINTS.DRIVER.ACTIVATE_ACCOUNT_RESEND_OTP,
            data
        );
        return response.data;
    },

    login: async (data: LoginRequestDTO): Promise<LoginResponseDTO> => {
        const formData = new FormData();
        formData.append('phone_number', data.phone_number);
        formData.append('password', data.password);
        formData.append('expected_role', data.expected_role);

        const response = await apiClient.post<LoginResponseDTO>(
            ENDPOINTS.AUTH.LOGIN,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        return response.data;
    },

    forgotPasswordRequest: async (data: ForgotPasswordRequestDTO): Promise<ForgotPasswordRequestResponseDTO> => {
        const formData = new FormData();
        formData.append('phone_number', data.phone_number);
        formData.append('expected_role', data.expected_role);

        const response = await apiClient.post<ForgotPasswordRequestResponseDTO>(
            ENDPOINTS.AUTH.FORGOT_PASSWORD,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        return response.data;
    },

    forgotPasswordVerifyOtp: async (data: ForgotPasswordVerifyOtpRequestDTO): Promise<ForgotPasswordVerifyOtpResponseDTO> => {
        const response = await apiClient.post<ForgotPasswordVerifyOtpResponseDTO>(
            ENDPOINTS.AUTH.FORGOT_PASSWORD_VERIFY_OTP,
            data
        );
        return response.data;
    },

    forgotPasswordResendOtp: async (data: ResendOtpRequestDTO): Promise<{ message: string }> => {
        const response = await apiClient.post<{ message: string }>(
            ENDPOINTS.AUTH.FORGOT_PASSWORD_RESEND_OTP,
            data
        );
        return response.data;
    },

    resetPassword: async (data: ResetPasswordRequestDTO): Promise<{ message: string }> => {
        const response = await apiClient.post<{ message: string }>(
            ENDPOINTS.AUTH.RESET_PASSWORD,
            data
        );
        return response.data;
    },
};