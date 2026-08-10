export interface NotificationDTO {
  id: number;
  type: string;
  title: string;
  body: string;
  trip_id: number | null;
  is_read: boolean;
  created_at: string;
}

export interface NotificationsListResponse {
  'status code': number;
  message: string;
  data: NotificationDTO[];
}
