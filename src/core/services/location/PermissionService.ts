import { PermissionsAndroid, Platform } from 'react-native';

class PermissionService {
  async requestLocationPermission(): Promise<boolean> {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message:
              'Vroom Rider needs access to your location to show nearby drivers.',
            buttonPositive: 'Allow',
            buttonNegative: 'Deny',
          },
        );

        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (error) {
        console.error('Location permission error:', error);
        return false;
      }
    }

    return true;
  }
}

export default new PermissionService();