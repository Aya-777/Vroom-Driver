export type NotificationType =
  | 'TRIP_REQUEST'
  | 'TRIP_ACCEPTED'
  | 'DRIVER_ARRIVED'
  | 'TRIP_STARTED'
  | 'TRIP_COMPLETED'
  | 'TRIP_NO_DRIVER_FOUND'
  | 'TRIP_CANCELLED';

type NotificationData = {
  type?: string;
  trip_id?: string;
};

type NavigateFn = (screen: string, params?: object) => void;

const DRIVER_NAVIGATION_MAP: Partial<
  Record<
    NotificationType,
    (data: NotificationData) => { screen: string; params?: object }
  >
> = {
  TRIP_REQUEST: data => ({
    screen: 'RideScreen',
    params: { tripId: data.trip_id },
  }),
  TRIP_CANCELLED: () => ({
    screen: 'RideScreen',
  }),
};

export function handleNotificationNavigation(
  data: NotificationData,
  navigate: NavigateFn,
) {
  const type = (data.type ?? '').toUpperCase() as NotificationType;
  const entry = DRIVER_NAVIGATION_MAP[type];

  if (!entry) {
    console.warn('Unhandled notification type:', type);
    return;
  }

  const { screen, params } = entry(data);
  navigate(screen, params);
}
