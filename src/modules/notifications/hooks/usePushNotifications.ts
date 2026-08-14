import { useEffect, useRef } from 'react';
import { Platform } from 'react-native';
import {
  requestNotificationPermission,
  getFcmToken,
  onTokenRefresh,
  onForegroundMessage,
  onForegroundNotificationPress,
  onNotificationOpenedApp,
  getInitialNotification,
  displayForegroundNotification,
} from '../services/fcmService';
import { registerDeviceToken } from '../repositories/notificationRepository';
import { setDeviceTokenId } from '../../../core/store/authStore';

type NotificationData = {
  type?: string;
  trip_id?: string;
};

export function usePushNotifications(
  isAuthenticated: boolean,
  onNotificationTap: (data: NotificationData) => void,
) {
  const registeredRef = useRef(false);
  const callbackRef = useRef(onNotificationTap);
  callbackRef.current = onNotificationTap;

  useEffect(() => {
    if (!isAuthenticated || registeredRef.current) return;

    (async () => {
      const granted = await requestNotificationPermission();
      if (!granted) return;

      const token = await getFcmToken();
      if (token) {
        const id = await registerDeviceToken(
          token,
          Platform.OS as 'android' | 'ios',
        );
        setDeviceTokenId(id);
        registeredRef.current = true;
      }
    })();

    const unsubscribeRefresh = onTokenRefresh(async newToken => {
      const id = await registerDeviceToken(
        newToken,
        Platform.OS as 'android' | 'ios',
      );
      setDeviceTokenId(id);
    });

    const unsubscribeForeground = onForegroundMessage(async remoteMessage => {
      await displayForegroundNotification(remoteMessage);
    });

    const unsubscribeNotificationPress = onForegroundNotificationPress(data => {
      callbackRef.current(data as NotificationData);
    });

    const unsubscribeOpened = onNotificationOpenedApp(remoteMessage => {
      if (remoteMessage?.data) {
        callbackRef.current(remoteMessage.data as NotificationData);
      }
    });

    getInitialNotification().then(remoteMessage => {
      if (remoteMessage?.data) {
        callbackRef.current(remoteMessage.data as NotificationData);
      }
    });

    return () => {
      unsubscribeRefresh();
      unsubscribeForeground();
      unsubscribeNotificationPress();
      unsubscribeOpened();
    };
  }, [isAuthenticated]);
}
