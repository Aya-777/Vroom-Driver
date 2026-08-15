import { apiClient } from '../../../core/network/apiClient';
import { ENDPOINTS } from '../../../core/network/endpoints';
import {
  DriverStatus,
  StatisticsResponseDTO,
  UpdateDriverStatusRequest,
  UpdateDriverStatusResponse,
} from './dto/home.dto';
import { TodayStatsResponse } from './dto/home.dto';

export const homeApi = {
  updateDriverStatus: async (
    status: UpdateDriverStatusRequest,
  ): Promise<UpdateDriverStatusResponse> => {
    const response = await apiClient.patch<UpdateDriverStatusResponse>(
      ENDPOINTS.DRIVER.STATUS,
      status,
    );

    return response.data;
  },

  getTodayStats: async () : Promise<TodayStatsResponse> => {
    const response = await apiClient.get<TodayStatsResponse>(ENDPOINTS.DRIVER.TODAY_STATS);
    return response.data;
  },

  getStatistics: async ()=>{
    const response = await apiClient.get<StatisticsResponseDTO>(ENDPOINTS.DRIVER.STATISTICS);
    return response.data;
  }
};
