import { apiClient } from '../../../core/network/apiClient';
import { ENDPOINTS } from '../../../core/network/endpoints';
import {
  ApiSuccessResponse,
  TripDto,
  TripId,
  TripLocationDto,
  TripRouteDto,
  TripStatusChoiceDto,
} from './dto/trip.dto';

export const tripApi = {
  getCurrentTrip: async (): Promise<TripDto | null> => {
    try {
      const { data } = await apiClient.get<ApiSuccessResponse<TripDto>>(
        ENDPOINTS.TRIPS.CURRENT,
      );
      return data.data;
    } catch (error: any) {
      if (error?.response?.status === 404) return null;
      throw error;
    }
  },

  getTripById: async (tripId: TripId): Promise<TripDto> => {
    const { data } = await apiClient.get<ApiSuccessResponse<TripDto>>(
      ENDPOINTS.TRIPS.BY_ID(tripId),
    );
    return data.data;
  },

  getTripLocation: async (tripId: TripId): Promise<TripLocationDto> => {
    const { data } = await apiClient.get<ApiSuccessResponse<TripLocationDto>>(
      ENDPOINTS.TRIPS.LOCATION(tripId),
    );
    return data.data;
  },

  getStatusChoices: async (): Promise<TripStatusChoiceDto[]> => {
    const { data } = await apiClient.get<TripStatusChoiceDto[]>(
      ENDPOINTS.TRIPS.STATUS_CHOICES,
    );
    return data;
  },

  getTripRoute: async (tripId: TripId): Promise<TripRouteDto> => {
    const { data } = await apiClient.get<ApiSuccessResponse<TripRouteDto>>(
      ENDPOINTS.TRIPS.ROUTE(tripId),
    );
    return data.data;
  },

  acceptTrip: async (tripId: TripId): Promise<void> => {
    await apiClient.post(ENDPOINTS.TRIPS.ACCEPT(tripId));
  },

  cancelTrip: async (
    tripId: TripId,
    cancellationReason = 'Cancelled by driver',
  ): Promise<void> => {
    await apiClient.post(ENDPOINTS.TRIPS.CANCEL(tripId), {
      cancellation_reason: cancellationReason,
    });
  },

  completeTrip: async (tripId: TripId): Promise<void> => {
    await apiClient.post(ENDPOINTS.TRIPS.COMPLETE(tripId));
  },

  markArrived: async (tripId: TripId): Promise<void> => {
    await apiClient.post(ENDPOINTS.TRIPS.I_AM_HERE(tripId));
  },

  resendTripPin: async (tripId: TripId): Promise<void> => {
    await apiClient.post(ENDPOINTS.TRIPS.RESEND_PIN(tripId));
  },

  verifyTripPin: async (tripId: TripId, pin: string): Promise<void> => {
    await apiClient.post(ENDPOINTS.TRIPS.VERIFY_PIN(tripId), { pin });
  },

  
  // SOS
    sosPress: async (id: number) => {
      await apiClient.post(
        ENDPOINTS.TRIPS.SOS(id)
      );
      return;
    },

    areYouSafePress: async (id: number, is_safe: boolean) => {
      await apiClient.post(
        ENDPOINTS.TRIPS.AREUSAFE(id),
        { is_safe: is_safe }
      );
      return;
    }
};
