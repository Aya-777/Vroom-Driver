import { apiClient } from '../../network/apiClient';
import { ENDPOINTS } from '../../network/endpoints';

export interface UpdateLocationRequest {
  latitude: number;
  longitude: number;
}

export const locationApi = {
  updateLocation: async (
    location: UpdateLocationRequest,
  ) => {
    const response = await apiClient.post(
      ENDPOINTS.LOCATION.UPDATE,
      location,
    );

    return response.data;
  },
};