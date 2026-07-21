import { riderMock } from '../constants/riderData';
import { useEffect } from 'react';

export function useTakeRideViewModel() {
  // لاحقاً هون ممكن تجيب data من API / socket

  const handleBackPress = () => {};

  return {
    rider: riderMock,
    handleBackPress,
  };
}
