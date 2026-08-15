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
        

        default:
          console.log('[RideRealtime] Unhandled event:', event.eventName);
      }
    } catch (error) {
      console.error('[RideRealtime] Failed to handle event:', error);
    }
  }
}

export const rideRealtimeService = new RideRealtimeService();
