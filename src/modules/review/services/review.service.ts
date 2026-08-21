import { apiClient } from '../../../core/network/apiClient';
import { ENDPOINTS } from '../../../core/network/endpoints';

export type SubmitTripReviewPayload = {
  rating: number;
  comment?: string;
  is_complaint?: boolean;
};

export const reviewApi = {
  submitTripReview: async (tripId: number, payload: SubmitTripReviewPayload): Promise<void> => {
    await apiClient.post(ENDPOINTS.TRIPS.SUBMIT_REVIEW(tripId), {
      rating: payload.rating,
      comment: payload.comment ?? '',
      is_complaint: payload.is_complaint ?? false,
    });
  },
};
