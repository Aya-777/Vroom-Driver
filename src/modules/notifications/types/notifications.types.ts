export interface NotificationItem {
  id: number;
  type: string;
  title: string;
  body: string;
  trip_id: number | null;
  is_read: boolean;
  created_at: string;
}

export type NotificationCardProps = {
  notification: NotificationItem;
  onPress?: (tripId: number | null) => void;
  onMarkAsRead?: () => void;
  onDelete?: () => void;
};
