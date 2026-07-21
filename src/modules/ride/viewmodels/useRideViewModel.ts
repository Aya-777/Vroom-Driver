import { useState } from 'react';
import { RideState } from '../types/RideState';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../../navigation/main/home/homeTypes';

export function useRideViewModel() {
  const [rideState, setRideState] = useState(RideState.SELECT_RIDE);
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const goToExtraDetails = () =>
    setRideState(RideState.EXTRA_DETAILS);

  const goToRideConfirmation = () =>
    setRideState(RideState.CONFIRM_RIDE);

  const goToDriverFound = () =>
    setRideState(RideState.DRIVER_FOUND);

  const goToDriverArrived = () =>
    setRideState(RideState.DRIVER_ARRIVED);

  const goToTripStarted = () =>
    setRideState(RideState.TRIP_STARTED);

  const resetRide = () =>
    setRideState(RideState.SELECT_RIDE);
  
  const handleBackPress = () => {
    navigation.goBack();
  };
  
  return {
    rideState,

    handleBackPress,
    goToExtraDetails,
    goToRideConfirmation,
    goToDriverFound,
    goToDriverArrived,
    goToTripStarted,
    resetRide,
  };
}