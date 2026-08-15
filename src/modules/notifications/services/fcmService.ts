import { getApp } from '@react-native-firebase/app';
import notifee, { AndroidImportance, EventType } from '@notifee/react-native';
import {
  getMessaging,
  requestPermission,
  getToken,
  onTokenRefresh as _onTokenRefresh,
  onMessage,
  onNotificationOpenedApp as _onNotificationOpenedApp,
  getInitialNotification as _getInitialNotification,
  setBackgroundMessageHandler as _setBackgroundMessageHandler,
  AuthorizationStatus,
} from '@react-native-firebase/messaging';
import { Platform, PermissionsAndroid } from 'react-native';

const messagingInstance = getMessaging(getApp());

export async function requestNotificationPermission(): Promise<boolean> {
  if (Platform.OS === 'android' && Platform.Version >= 33) {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
    if (granted !== PermissionsAndroid.RESULTS.GRANTED) return false;
  }

  const authStatus = await requestPermission(messagingInstance);
  await notifee.requestPermission();
  return (
    authStatus === AuthorizationStatus.AUTHORIZED ||
    authStatus === AuthorizationStatus.PROVISIONAL
  );
}

export async function getFcmToken(): Promise<string | null> {
  try {
    return await getToken(messagingInstance);
  } catch (e) {
    console.warn('FCM getToken failed', e);
    return null;
  }
}

export function onTokenRefresh(callback: (token: string) => void) {
  return _onTokenRefresh(messagingInstance, callback);
}

export function onForegroundMessage(callback: (message: any) => void) {
  return onMessage(messagingInstance, callback);
}

export function onNotificationOpenedApp(callback: (message: any) => void) {
  return _onNotificationOpenedApp(messagingInstance, callback);
}

export async function getInitialNotification() {
  return _getInitialNotification(messagingInstance);
}

export function setBackgroundMessageHandler(
  handler: (message: any) => Promise<void>,
) {
  _setBackgroundMessageHandler(messagingInstance, handler);
}

export async function displayForegroundNotification(remoteMessage: any) {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    importance: AndroidImportance.HIGH,
  });

  await notifee.displayNotification({
    title: remoteMessage.notification?.title ?? remoteMessage.data?.title,
    body: remoteMessage.notification?.body ?? remoteMessage.data?.body,
    data: remoteMessage.data,
    android: {
      channelId,
      pressAction: { id: 'default' },
    },
  });
}


export function onForegroundNotificationPress(
  callback: (data: Record<string, string>) => void,
) {
  return notifee.onForegroundEvent(({ type, detail }) => {
    if (type === EventType.PRESS && detail.notification?.data) {
      callback(detail.notification.data as Record<string, string>);
    }
  });
}

export { EventType };
