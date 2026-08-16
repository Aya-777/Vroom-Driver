import LocationService, {
  Location,
} from './LocationService';
import PermissionService from './PermissionService';
import { useRideStore } from '../../../modules/ride/store/useRideStore';

export type DriverLocationMode =
  | 'OFFLINE'
  | 'ONLINE'
  | 'ACCEPTED'
  | 'PICKUP'
  | 'ON_TRIP';

class DriverLocationManager {
  private watchId: number | null = null;
  private currentMode: DriverLocationMode = 'OFFLINE';
  private isStarting = false;

  async setMode(mode: DriverLocationMode) {
    if (this.currentMode === mode) {
      return;
    }

    console.log(
      `[DriverLocationManager] Mode: ${this.currentMode} → ${mode}`,
    );

    this.currentMode = mode;

    if (mode === 'OFFLINE') {
      this.stop();
      return;
    }

    await this.restartWatching();
  }

  private async restartWatching() {
    if (this.isStarting) {
      return;
    }

    this.isStarting = true;

    try {
      this.stopWatcherOnly();

      const granted =
        await PermissionService.requestLocationPermission();

      if (!granted) {
        console.log(
          '[DriverLocationManager] Location permission denied',
        );
        return;
      }

      const currentLocation =
        await LocationService.getCurrentLocation();

      this.updateLocation(currentLocation);

      const isOnTrip = this.currentMode === 'ACCEPTED' || this.currentMode === 'PICKUP' || this.currentMode === 'ON_TRIP';

      const interval = isOnTrip ? 2 : 15;

      console.log(
        `[DriverLocationManager] Starting watcher: ${interval}s `,
      );

      this.watchId = LocationService.watchLocation(
        location => {
          this.updateLocation(location);
        },
        interval,
        error => {
          console.log(
            '[DriverLocationManager] Location error:',
            error,
          );
        },
      );
    } catch (error) {
      console.log(
        '[DriverLocationManager] Failed to start location:',
        error,
      );
    } finally {
      this.isStarting = false;
    }
  }

  private updateLocation(location: Location) {
    const setLocation =
      useRideStore.getState().setLocation;

    setLocation([
      location.longitude,
      location.latitude,
    ]);

    console.log(
      '[DriverLocationManager] Location:',
      location,
    );

    // Later:
    // this.sendLocationToBackend(location);
  }

  private stopWatcherOnly() {
    if (this.watchId !== null) {
      LocationService.stopWatching(this.watchId);
      this.watchId = null;
    }
  }

  stop() {
    this.stopWatcherOnly();

    console.log(
      '[DriverLocationManager] Location watching stopped',
    );
  }
}

export default new DriverLocationManager();