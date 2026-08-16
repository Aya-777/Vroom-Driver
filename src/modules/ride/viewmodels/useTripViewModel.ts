import { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { tripApi } from '../services/tripApi';
import { TripStage } from '../types/trip.types';
import { useTripTimer } from '../hooks/useTripTimer';
import { TripId } from '../services/dto/trip.dto';
import { vehicleApi } from '../services/vehicleApi';
import { useRideStore } from '../store/useRideStore';

type TripAction = (tripId: TripId) => Promise<void>;

export function useTripViewModel(
  onTripCompleted: () => void,
  tripId?: TripId,
  onTripCancelled?: () => void,
) {
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);
  const {setRideDetails} = useRideStore();

  const {
    data: trip,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['trip', tripId ?? 'current'],
    queryFn: () =>
      tripId ? tripApi.getTripById(tripId) : tripApi.getCurrentTrip(),
    refetchInterval: 5000,
  });

  const stage: TripStage | null = trip?.status ?? null;
  const { formatted: timerText } = useTripTimer(stage === 'ON_TRIP');

  const runTripAction = useCallback(
    async (action: TripAction) => {
      if (!trip?.id) return null;

      try {
        await action(trip.id);

        const result = await refetch();

        return result.data ?? null;
      } catch {
        return null;
      }
    },
    [refetch, trip?.id],
  );

  const takeTrip = useCallback(async () => {
    const acceptedTrip = await runTripAction(tripApi.acceptTrip);

    if (acceptedTrip) {
      setRideDetails(acceptedTrip);
    }
  }, [runTripAction, setRideDetails]);

  const cancelTrip = useCallback(async () => {
    const didCancel = await runTripAction(tripApi.cancelTrip);
    if (didCancel) onTripCancelled?.();
  }, [runTripAction, onTripCancelled]);

  const markArrived = useCallback(async () => {
    await runTripAction(tripApi.markArrived);
  }, [runTripAction]);

  const resendPin = useCallback(async () => {
    await runTripAction(tripApi.resendTripPin);
  }, [runTripAction]);

  const onChangePin = useCallback(
    async (value: string) => {
      const digitsOnly = value.replace(/[^0-9]/g, '');
      setPin(digitsOnly);
      setPinError(false);

      if (digitsOnly.length === 4) {
        const didVerify = await runTripAction(tripIdentifier =>
          tripApi.verifyTripPin(tripIdentifier, digitsOnly),
        );
        setPinError(!didVerify);
      }
    },
    [runTripAction],
  );

  const completeTrip = useCallback(async () => {
    const didComplete = await runTripAction(tripApi.completeTrip);
    if (didComplete) onTripCompleted();
  }, [onTripCompleted, runTripAction]);

  const { data: vehicleTiers } = useQuery({
    queryKey: ['vehicle-tiers'],
    queryFn: vehicleApi.getVehicleTiers,
    staleTime: 1000 * 60 * 60,
  });

  const vehicleTierInfo =
    vehicleTiers?.find(t => t.id === trip?.vehicle_type) ?? null;

  return {
    trip,
    isLoading,
    stage,
    pin,
    pinError,
    timerText,
    takeTrip,
    cancelTrip,
    markArrived,
    resendPin,
    onChangePin,
    completeTrip,
    refetch,
    vehicleTierInfo,
  };
}
