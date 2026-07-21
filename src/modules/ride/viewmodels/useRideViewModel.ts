import { useState } from 'react';
import { RideState } from '../types/RideState';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../../navigation/main/home/homeTypes';

export function useRideViewModel() {
  const [rideState, setRideState] = useState(RideState.TAKE_RIDE);
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const goToTripAccepted = () =>
    setRideState(RideState.TRIP_STARTED);

  const goToTripStarted = () =>
    setRideState(RideState.TRIP_STARTED);

  const resetRide = () =>
    setRideState(RideState.TAKE_RIDE);
  
  const handleBackPress = () => {
    navigation.goBack();
  };
  
  return {
    rideState,

    handleBackPress,
    goToTripStarted,
    goToTripAccepted,
    resetRide,
  };
}