import { driverMock } from '../constants/driverData';
import { useNavigation } from '@react-navigation/native';
import { HomeStackScreenProps } from '../../../navigation/main/home/homeTypes';
import { useEffect } from 'react';

export function useDriverFoundViewModel() {
  // لاحقاً هون ممكن تجيب data من API / socket
  const navigation =
    useNavigation<HomeStackScreenProps<'DriverFound'>['navigation']>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('DriverArrived', { driverId: 'some-id-value' });
    }, 3000);
    // IMPORTANT: Clear the timer if the component unmounts
    // to prevent memory leaks or navigation errors
    return () => clearTimeout(timer);
  }, [navigation]);

  return {
    driver: driverMock,
    handleBackPress,
  };
}
