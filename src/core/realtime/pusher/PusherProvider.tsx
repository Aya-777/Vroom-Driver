import React, { useEffect } from 'react';
import { pusherService } from './PusherService';

interface PusherProviderProps {
  children: React.ReactNode;
  enabled: boolean;
}

export function PusherProvider({
  children,
  enabled,
}: PusherProviderProps) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    let mounted = true;

    const setup = async () => {
      try {
        await pusherService.connect();

        if (!mounted) {
          return;
        }

        const channels =
          await pusherService.subscribeToUserChannels();

        if (!mounted) {
          return;
        }

        console.log(
          '[Pusher] App subscribed to:',
          channels,
        );
      } catch (error) {
        console.error(
          '[Pusher] App setup failed:',
          error,
        );
      }
    };

    setup();

    return () => {
      mounted = false;
      pusherService.disconnect();
    };
  }, [enabled]);

  return <>{children}</>;
}