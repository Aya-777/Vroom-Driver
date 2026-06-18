import { apiClient } from '../../../core/network/apiClient';
import { ENDPOINTS } from '../../../core/network/endpoints';
import {
    SignupRequestDTO,
    SignupResponseDTO,
    VerifyOtpRequestDTO,
    VerifyOtpResponseDTO,
    ResendOtpRequestDTO
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
};