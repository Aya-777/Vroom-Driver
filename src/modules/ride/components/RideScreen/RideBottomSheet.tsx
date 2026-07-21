import { Dispatch, SetStateAction } from 'react';
import { RideState } from '../../types/RideState';
import ExtraDetailsSheet from '../ExtraDetailsScreen/ExtraDetailsSheet';
import SelectRideSheet from '../SelectRideScreen/SelectRideSheet';
import RideConfirmationSheet from '../RideConfirmationScreen/RideConfirmationSheet';
import DriverFoundSheet from '../DriverFoundScreen/DriverFoundSheet';
import DriverArrivedSheet from '../DriverArrivedScreen/DriverArrivedSheet';
import TripStartedSheet from '../TripStartedScreen/TripStartedSheet';

type Props = {
  rideState: RideState;

  onSelectRideNext: () => void;
  onExtraDetailsNext: () => void;
  onRideConfirmed: () => void;
  onDriverFound: () => void;
  onTripStarted: () => void;
  onTripEnded: () => void;
};

export default function RideBottomSheet({
  rideState,
  onSelectRideNext,
  onExtraDetailsNext,
  onRideConfirmed,
  onDriverFound,
  onTripStarted,
  onTripEnded,
}: Props) {
  const renderSheet = () => {
    switch (rideState) {
      case RideState.SELECT_RIDE:
        return <SelectRideSheet onNextPress={onSelectRideNext} />;

      case RideState.EXTRA_DETAILS:
        return <ExtraDetailsSheet onNextPress={onExtraDetailsNext} />;

      case RideState.CONFIRM_RIDE:
        return <RideConfirmationSheet onNextPress={onRideConfirmed} />;

      case RideState.DRIVER_FOUND:
        return <DriverFoundSheet onDriverFound={onDriverFound} />;

      case RideState.DRIVER_ARRIVED:
        return <DriverArrivedSheet onTripStarted={onTripStarted} />;

      case RideState.TRIP_STARTED:
        return <TripStartedSheet onTripEnded={onTripEnded} />;
    }
  };
  return <>{renderSheet()}</>;
}
