import { useNavigation } from '@react-navigation/native';
import { HomeStackScreenProps } from '../../../navigation/main/home/homeTypes';
import { useState } from 'react';
import { useRideStore } from '../store/useRideStore';

export function useConfirmRideViewModel() {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<HomeStackScreenProps<'ConfirmRide'>['navigation']>();
  const rideData = useRideStore((state) => state.activeRide);

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
    navigation.navigate('DriverFound', {driverId: '1'});  
  };

  const handleBackPress = () => {
    navigation.goBack();
  }

  return { handleFindDriver, isLoading, handleBackPress, rideData };
}