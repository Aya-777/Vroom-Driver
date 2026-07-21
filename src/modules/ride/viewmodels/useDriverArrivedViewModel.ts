import { driverMock } from '../constants/driverData';

export function useDriverArrivedViewModel() {

  const handleBackPress = () => {
  };

  return {
    driver: driverMock,
    handleBackPress,
  };
}
