import { Dispatch, SetStateAction } from 'react';
import { RideState } from '../../types/RideState';
import TripStartedSheet from '../TripStartedScreen/TripStartedSheet';
import TakeRideSheet from '../TakeRideScreen/TakeRideSheet';

type Props = {
  rideState: RideState;
  onTakeRide: () => void;
  onTripEnded: () => void;
};

export default function RideBottomSheet({
  rideState,
  onTakeRide,
  onTripEnded,
}: Props) {
  const renderSheet = () => {
    switch (rideState) {

      case RideState.TAKE_RIDE:
        return <TakeRideSheet onTakeTrip={onTakeRide} />;

      case RideState.TRIP_STARTED:
        return <TripStartedSheet onTripEnded={onTripEnded} />;
    }
  };
  return <>{renderSheet()}</>;
}
