import { apiClient } from '../../../core/network/apiClient';
import { ENDPOINTS } from '../../../core/network/endpoints';
import {
  TripHistoryItemDTO,
  PaginatedResult,
  ApiEnvelope,
} from './dto/tripHistory.dto';

export const getTripHistory = async (params?: {
  status?: string;
}): Promise<PaginatedResult<TripHistoryItemDTO>> => {
  const response = await apiClient.get<
    ApiEnvelope<PaginatedResult<TripHistoryItemDTO>>
  >(ENDPOINTS.TRIPS.HISTORY, { params });
  return response.data.data;
};

export const getTripHistoryByUrl = async (
  url: string,
): Promise<PaginatedResult<TripHistoryItemDTO>> => {
  const response = await apiClient.get<
    ApiEnvelope<PaginatedResult<TripHistoryItemDTO>>
  >(url);
  return response.data.data;
};
