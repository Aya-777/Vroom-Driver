import { useEffect } from 'react';
import DriverLocationManager from '../services/location/DriverLocationManager';
import { useDriverStore } from '../store/useDriverStore';
import { useRideStore } from '../../modules/ride/store/useRideStore';

export function DriverLocationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const driverStatus = useDriverStore(
    state => state.status,
  );

  const activeRide = useRideStore(
    state => state.activeRide,
  );
  console.log('provider ', driverStatus);

  useEffect(() => {
    if (driverStatus === 'OFFLINE') {
      DriverLocationManager.setMode('OFFLINE');
      return;
    }else if(driverStatus === 'ONLINE'){
      DriverLocationManager.setMode('ONLINE');
    }else{
      DriverLocationManager.setMode('ON_TRIP')
    }

  }, [driverStatus, activeRide]);

  return <>{children}</>;
}