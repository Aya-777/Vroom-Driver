import { PusherEvent } from '@pusher/pusher-websocket-react-native';
import { useRideStore } from '../store/useRideStore';
import { tripApi } from './tripApi';

class RideRealtimeService {
  handleEvent(event: PusherEvent) {
    try {
      const data = JSON.parse(event.data);

      console.log('[RideRealtime] Event:', event.eventName);
      console.log('[RideRealtime] Data:', data);

      switch (event.eventName) {
        case 'trip.cancelled':
          this.handleTripCancelled(data);
          break;
        
        case 'safety.alert.created':
          // to be handled
          break;

        default:
          console.log('[RideRealtime] Unhandled event:', event.eventName);
      }
    } catch (error) {
      console.error('[RideRealtime] Failed to handle event:', error);
    }
  }

  private async handleTripCancelled(data: { trip_id: number; status: string }) {
    const { activeRide, clearRide, setActiveRide } = useRideStore.getState();

    if (!activeRide) {
      return;
    }

    if (activeRide.id !== data.trip_id) {
      return;
    }

    clearRide();
    setActiveRide(null);
  }
}

export const rideRealtimeService = new RideRealtimeService();
