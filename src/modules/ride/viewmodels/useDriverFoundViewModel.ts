import { driverMock } from '../constants/driverData';
import { useEffect } from 'react';

export function useDriverFoundViewModel() {
  // لاحقاً هون ممكن تجيب data من API / socket

  const handleBackPress = () => {
  };

  return {
    driver: driverMock,
    handleBackPress,
  };
}
