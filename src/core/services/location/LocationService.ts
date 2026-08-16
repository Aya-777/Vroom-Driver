import Geolocation from 'react-native-geolocation-service';

export type Location = {
  longitude: number;
  latitude: number;
};

class LocationService {
  getCurrentLocation(): Promise<Location> {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => {
          resolve({
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
          });
        },
        error => {
          reject(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        },
      );
    });
  }

  watchLocation(
  onLocationChanged: (location: Location) => void,
  intervalSeconds: number,
  onError?: (error: any) => void,
) {
  const interval = intervalSeconds * 1000;

  const watchId = Geolocation.watchPosition(
    position => {
      
      onLocationChanged({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      });
    },
    error => {
      console.log(
        '[LocationService] GPS ERROR',
        error,
      );

      onError?.(error);
    },
    {
      enableHighAccuracy: true,
      interval,
      fastestInterval: interval,
      distanceFilter: 0,
    },
  );

  
  return watchId;
}

  stopWatching(watchId: number) {
    Geolocation.clearWatch(watchId);
  }
}

export default new LocationService();