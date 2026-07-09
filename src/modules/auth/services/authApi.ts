import { apiClient } from '../../../core/network/apiClient';
import { ENDPOINTS } from '../../../core/network/endpoints';
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
    ResetPasswordRequestDTO,
} from './dto/auth.dto';

export const authApi = {

    signup: async (data: SignupRequestDTO): Promise<SignupResponseDTO> => {
        const formData = new FormData();
        formData.append('first_name', data.first_name);
        formData.append('last_name', data.last_name);
        formData.append('phone_number', data.phone_number);
        formData.append('password', data.password);
        formData.append('confirm_password', data.confirm_password);

        if (data.profile_image) {

            const localUri = data.profile_image;
            const filename = localUri.split('/').pop() || 'profile.jpg';
            const match = /\.(\w+)$/.exec(filename);
            const type = match ? `image/${match[1]}` : `image/jpeg`;

            formData.append('profile_image', {
                uri: localUri,
                name: filename,
                type,
            } as any);
        }

        const response = await apiClient.post<SignupResponseDTO>(
            ENDPOINTS.AUTH.SIGNUP,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        return response.data;
    },

    verifyOtp: async (data: VerifyOtpRequestDTO): Promise<VerifyOtpResponseDTO> => {
        const response = await apiClient.post<VerifyOtpResponseDTO>(
            ENDPOINTS.AUTH.VERIFY_OTP,
            data
        );
        return response.data;
    },

    resendOtp: async (data: ResendOtpRequestDTO): Promise<{ message: string }> => {
        const response = await apiClient.post<{ message: string }>(
            ENDPOINTS.AUTH.RESEND_OTP,
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

    resetPassword: async (data: ResetPasswordRequestDTO): Promise<{message: string}> => {
        const response = await apiClient.post<{message: string}>(
            ENDPOINTS.AUTH.RESET_PASSWORD, 
            data

        );
        return response.data;
    },
};