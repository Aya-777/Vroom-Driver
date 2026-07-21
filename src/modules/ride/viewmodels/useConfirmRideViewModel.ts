import { useState } from 'react';
import { useRideStore } from '../store/useRideStore';

export function useConfirmRideViewModel() {
  const [isLoading, setIsLoading] = useState(false);
  const rideData = useRideStore(state => state.activeRide);

  const handleFindDriver = async () => {
    // setIsLoading(true);
    // try {
    // const driver = await rideService.findDriver(rideDetails);
    // 2. Navigate on success
    // navigation.navigate('DriverFound', { driverId: driver.id });
    // } catch (error) {
    // 3. Handle errors (e.g., show an alert)
    // Alert.alert('Error', 'Could not find a driver. Please try again.');
    // } finally {
    // setIsLoading(false);
    // }
  };

  const handleBackPress = () => {};

  return { handleFindDriver, isLoading, handleBackPress, rideData };
}
