import { useCallback, useState } from 'react';
import { reviewApi, SubmitTripReviewPayload } from '../services/review.service';

export function useReview(tripId: number) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const submitReview = useCallback(async (payload: SubmitTripReviewPayload): Promise<boolean> => {
    setIsSubmitting(true);
    setError(null);
    try {
      await reviewApi.submitTripReview(tripId, payload);
      return true;
    } catch (requestError) {
      setError(requestError);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  }, [tripId]);

  return { submitReview, isSubmitting, error };
}
