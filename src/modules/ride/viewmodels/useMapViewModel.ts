import { useEffect, useState } from 'react';
import PermissionService from '../../../core/services/location/PermissionService';
import LocationService from '../../../core/services/location/LocationService';

export default function useMapViewModel() {
  const [location, setLocation] = useState<[number, number] | null>(null);

  return {
    location,
  };
}