import { useEffect } from 'react';
import DriverLocationManager from '../services/location/DriverLocationManager';
import { useDriverStore } from '../store/useDriverStore';
import { useRideStore } from '../../modules/ride/store/useRideStore';

export function DriverLocationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const driverStatus = useDriverStore(state => state.status);
  const activeRide = useRideStore(state => state.activeRide);


  useEffect(() => {
    let mode: Parameters<
      typeof DriverLocationManager.setMode
    >[0];

    if (driverStatus === 'OFFLINE') {
      mode = 'OFFLINE';
    } else if (activeRide) {
      mode = 'ON_TRIP';
    } else {
      mode = 'ONLINE';
    }

    DriverLocationManager.setMode(mode);
  }, [driverStatus, activeRide]);

  return <>{children}</>;
}