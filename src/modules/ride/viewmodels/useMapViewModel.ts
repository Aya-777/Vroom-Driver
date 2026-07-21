import { useEffect, useState } from 'react';

import PermissionService from '../../../core/services/location/PermissionService';
import LocationService from '../../../core/services/location/LocationService';

  // permission
  // getCurrentLocation()
  // watchLocation()
  // stopWatching()

export default function useMapViewModel() {
  const [location, setLocation] = useState<[number, number] | null>(null);

  useEffect(() => {
    let watchId: number;

    const initialize = async () => {
      const granted = await PermissionService.requestLocationPermission();

      if (!granted) return;

      // Get an initial location immediately
      const currentLocation = await LocationService.getCurrentLocation();

      setLocation([
        currentLocation.longitude,
        currentLocation.latitude,
      ]);

      // Then start listening for updates
      watchId = LocationService.watchLocation(newLocation => {
        setLocation([
          newLocation.longitude,
          newLocation.latitude,
        ]);
      });
    };

    initialize();

    return () => {
      if (watchId !== undefined) {
        LocationService.stopWatching(watchId);
      }
    };
  }, []);

  return {
    location,
  };
}