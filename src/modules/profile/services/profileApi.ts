import { apiClient } from '../../../core/network/apiClient';
import { ENDPOINTS } from '../../../core/network/endpoints';
import { ProfileResponseDto } from './dto/profile.dto';

export const profileApi = {
    getMyProfile: async (): Promise<ProfileResponseDto> => {
        const { data } = await apiClient.get<ProfileResponseDto>(ENDPOINTS.USERS.ME);
        return data;
    },
};