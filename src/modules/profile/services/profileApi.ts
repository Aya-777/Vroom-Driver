import { apiClient } from '../../../core/network/apiClient';
import { ENDPOINTS } from '../../../core/network/endpoints';
import { ProfileResponseDto } from './dto/profile.dto';

export const profileApi = {
    getMyProfile: async (): Promise<ProfileResponseDto> => {
        const { data } = await apiClient.get<ProfileResponseDto>(ENDPOINTS.USERS.ME);
        return data;
    },

    requestPhoneChange: async (newPhoneNumber: string): Promise<void> => {
        await apiClient.post(ENDPOINTS.USERS.CHANGE_PHONE_REQUEST, {
            new_phone_number: newPhoneNumber,
        });
    },

    resendPhoneChange: async (): Promise<void> => {
        await apiClient.post(ENDPOINTS.USERS.CHANGE_PHONE_RESEND);
    },

    verifyPhoneChange: async (otp: string): Promise<void> => {
        await apiClient.post(ENDPOINTS.USERS.CHANGE_PHONE_VERIFY, { otp });
    },

    changePassword: async (input: {
        oldPassword: string;
        newPassword: string;
        confirmPassword: string;
    }): Promise<void> => {
        await apiClient.patch(ENDPOINTS.USERS.CHANGE_PASSWORD, {
            old_password: input.oldPassword,
            new_password: input.newPassword,
            confirm_password: input.confirmPassword,
        });
    },
};