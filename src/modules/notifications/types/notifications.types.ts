export type NotificationType =
    | 'ride'
    | 'payment'
    | 'promotion'
    | 'system';

export interface NotificationItem {
    id: string;
    user_id: string;
    trip_id: string | null;
    title: string;
    body: string;
    type: NotificationType;
    created_at: string;
    isRead?: boolean;
}

export type NotificationCardProps = {
    notification: NotificationItem;
    onPress?: (tripId: string | null) => void;
    onMarkAsRead?: () => void;
    onDelete?: () => void;
};