import { navigate } from '../../../navigation/rootTypes';
import { findNotificationById } from '../services/notificationApi';

export type NotificationType =
  | 'TRIP_REQUEST'
  | 'TRIP_ACCEPTED'
  | 'DRIVER_ARRIVED'
  | 'TRIP_STARTED'
  | 'TRIP_COMPLETED'
  | 'TRIP_NO_DRIVER_FOUND'
  | 'TRIP_CANCELLED';

export type NotificationData = {
  type?: string;
  trip_id?: string | number;
  notification_id?: string | number;
};

function asPositiveInteger(value: string | number | undefined): number | null {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
}

async function resolveTripId(data: NotificationData): Promise<number | null> {
  const directTripId = asPositiveInteger(data.trip_id);
  if (directTripId) return directTripId;

  const notificationId = asPositiveInteger(data.notification_id);
  if (!notificationId) return null;

  try {
    const notification = await findNotificationById(notificationId);
    return notification?.trip_id ?? null;
  } catch (error) {
    console.warn('Failed to resolve notification trip ID:', error);
    return null;
  }
}

export async function handleNotificationNavigation(data: NotificationData) {
  const type = (data.type ?? '').toUpperCase() as NotificationType;
  if (type !== 'TRIP_REQUEST') {
    console.warn('Unhandled notification type:', data);
    return;
  }

  const tripId = await resolveTripId(data);
  if (!tripId) {
    console.warn('Trip request notification does not resolve to a trip:', data);
    return;
  }

  navigate('Main', {
    screen: 'MainTabs',
    params: {
      screen: 'HomeTab',
      params: {
        screen: 'Trip',
        params: { tripId },
      },
    },
  });
}
