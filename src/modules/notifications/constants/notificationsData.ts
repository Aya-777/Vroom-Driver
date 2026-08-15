import { NotificationItem } from '../types/notifications.types';

export const notificationsData: NotificationItem[] = [
  {
    id: 1,
    trip_id: 125,
    title: 'Ride Accepted',
    body: 'Ahmed accepted your ride request.',
    type: 'ride',
    created_at: '2 min ago',
    is_read: false,
  },
  {
    id: 2,
    trip_id: 126,
    title: 'Driver Arrived',
    body: 'Your driver has arrived at the pickup point.',
    type: 'ride',
    created_at: '15 min ago',
    is_read: true,
  },
  {
    id: 3,
    trip_id: null,
    title: 'Welcome',
    body: 'Thanks for joining Vroom driver.',
    type: 'system',
    created_at: 'Yesterday',
    is_read: true,
  },
];
