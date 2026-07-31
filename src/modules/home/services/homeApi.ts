import { apiClient } from '../../../core/network/apiClient';
import { ENDPOINTS } from '../../../core/network/endpoints';
import {
  DriverStatus,
  UpdateDriverStatusRequest,
  UpdateDriverStatusResponse,
} from './dto/home.dto';

export const homeApi = {
  updateDriverStatus: async (
    status: UpdateDriverStatusRequest,
  ): Promise<UpdateDriverStatusResponse> => {
    console.log("callingapi");
    const response = await apiClient.patch<UpdateDriverStatusResponse>(
      ENDPOINTS.DRIVER.STATUS,
      status,
    );

    return response.data;
  },
};
