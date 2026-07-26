import Geolocation from 'react-native-geolocation-service';

export type Location = {
  latitude: number;
  longitude: number;
};

class LocationService {

  getCurrentLocation(): Promise<Location> {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
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
    onError?: (error: any) => void,
  ) {
    return Geolocation.watchPosition(
      position => {
        onLocationChanged({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        console.log(position);
      },
      error => {
        onError?.(error);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 0,
        interval: 2000,
        fastestInterval: 2000,
      },
    );
  }

  stopWatching(watchId: number) {
    Geolocation.clearWatch(watchId);
  }
}

export default new LocationService();