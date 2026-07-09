import { driverMock } from '../constants/driverData';
import { useNavigation } from '@react-navigation/native';
import { HomeStackScreenProps } from '../../../navigation/main/home/homeTypes';

export function useDriverHereViewModel() {
  // لاحقاً هون ممكن تجيب data من API / socket
  const navigation = useNavigation<HomeStackScreenProps<'DriverFound'>['navigation']>();

  const handleBackPress = () => {
    navigation.goBack();
  }

  return {
    driver: driverMock,
    handleBackPress
  };
}