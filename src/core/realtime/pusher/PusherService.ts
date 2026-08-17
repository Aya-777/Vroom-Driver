import {
  Pusher,
  PusherEvent,
  PusherAuthorizerResult,
} from '@pusher/pusher-websocket-react-native';

import { apiClient } from '../../network/apiClient';
import { ENDPOINTS } from '../../network/endpoints';
import { PUSHER_CONFIG } from '../../config/realtime.config';
import { rideRealtimeService } from '../../../modules/ride/services/rideRealTimeService';

const PUSHER_AUTH_ENDPOINT = ENDPOINTS.PUSHER.AUTH;

class PusherService {
  private pusher = Pusher.getInstance();
  private initialized = false;
  private eventListener?: (event: PusherEvent) => void;

  private async getAvailableChannels(): Promise<string[]> {
    try {
      console.log('[Pusher] Discovering available channels...');

      const response = await apiClient.get(
        ENDPOINTS.PUSHER.CHANNELS,
      );

      const channels = response.data?.data?.channels ?? [];

      console.log('[Pusher] Available channels:', channels);

      return channels;
    } catch (error) {
      console.error(
        '[Pusher] Failed to discover channels:',
        error,
      );

      throw error;
    }
  }

  async subscribeToUserChannels(): Promise<string[]> {
    await this.init();

    const channels = await this.getAvailableChannels();

    for (const channelName of channels) {
      await this.subscribe(channelName);
    }

    return channels;
  }

  async init(): Promise<void> {
    if (this.initialized) {
      return;
    }

    await this.pusher.init({
      apiKey: PUSHER_CONFIG.key,
      cluster: PUSHER_CONFIG.cluster,
      useTLS: PUSHER_CONFIG.useTLS,

      onAuthorizer: this.authorizeChannel.bind(this),

      onConnectionStateChange: (currentState, previousState) => {
        console.log(
          `[Pusher] Connection: ${previousState} → ${currentState}`,
        );
      },

      onError: (message, code, error) => {
        console.error(
          `[Pusher] Error: ${message}`,
          {
            code,
            error,
          },
        );
      },

      onSubscriptionSucceeded: (channelName, data) => {
        console.log(
          `[Pusher] Successfully subscribed: ${channelName}`,
          data,
        );
      },

      onSubscriptionError: (message, error) => {
        console.error(
          `[Pusher] Subscription error: ${message}`,
          error,
        );
      },

      onEvent: (event: PusherEvent) => {
        console.log('🔥🔥🔥 PUSHER EVENT RECEIVED 🔥🔥🔥');
        console.log('Event name:', event.eventName);
        console.log('Event data:', event.data);
        this.eventListener?.(event);
        rideRealtimeService.handleEvent(event);
      },
    });

    this.initialized = true;

    console.log('[Pusher] Initialized');
  }
  
  setEventListener(
    listener: (event: PusherEvent) => void,
  ): void {
    this.eventListener = listener;
  }

  private async authorizeChannel(
    channelName: string,
    socketId: string,
  ): Promise<PusherAuthorizerResult> {
    try {
      console.log('[Pusher] Authorizing channel:', {
        channelName,
        socketId,
      });

      const response = await apiClient.post(
        PUSHER_AUTH_ENDPOINT,
        {
          channel_name: channelName,
          socket_id: socketId,
        },
      );

      console.log('[Pusher] Authorization successful:', channelName);

      return response.data;
    } catch (error) {
      console.error(
        '[Pusher] Channel authorization failed:',
        error,
      );

      throw error;
    }
  }

  async connect(): Promise<void> {
    await this.init();

    console.log('[Pusher] Connecting...');

    await this.pusher.connect();
  }

  async disconnect(): Promise<void> {
    console.log('[Pusher] Disconnecting...');

    for (const channelName of this.subscribedChannels) {
      await this.pusher.unsubscribe({
        channelName,
      });
    }

    this.subscribedChannels.clear();

    await this.pusher.disconnect();
  }

  async subscribe(channelName: string): Promise<void> {
    await this.init();

    if (this.subscribedChannels.has(channelName)) {
      console.log(
        '[Pusher] Already subscribed to:',
        channelName,
      );
      return;
    }

    console.log('[Pusher] Subscribing to:', channelName);

    await this.pusher.subscribe({
      channelName,
    });

    this.subscribedChannels.add(channelName);
  }

  private subscribedChannels = new Set<string>();

  async unsubscribe(channelName: string): Promise<void> {
    console.log('[Pusher] Unsubscribing from:', channelName);

    await this.pusher.unsubscribe({
      channelName,
    });

    this.subscribedChannels.delete(channelName);
  }

  getSocketId(): Promise<string> {
    return this.pusher.getSocketId();
  }
}

export const pusherService = new PusherService();