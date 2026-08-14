import { navigate } from '../../../navigation/rootTypes';

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
};

export function handleNotificationNavigation(data: NotificationData) {
  const type = (data.type ?? '').toUpperCase() as NotificationType;
  const tripId = Number(data.trip_id);

  if (type !== 'TRIP_REQUEST' || !Number.isInteger(tripId) || tripId <= 0) {
    console.warn('Unhandled notification or invalid trip ID:', data);
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
