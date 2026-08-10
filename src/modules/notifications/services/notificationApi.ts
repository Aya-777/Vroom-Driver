import { apiClient } from '../../../core/network/apiClient';
import { ENDPOINTS } from '../../../core/network/endpoints';
import {
  NotificationDTO,
  NotificationsListResponse,
} from './dto/notification.dto';

export async function fetchNotifications(): Promise<NotificationDTO[]> {
  const response = await apiClient.get<NotificationsListResponse>(
    ENDPOINTS.NOTIFICATIONS.LIST,
  );
  return response.data.data;
}

export async function markNotificationAsRead(id: number): Promise<void> {
  await apiClient.patch(ENDPOINTS.NOTIFICATIONS.MARK_READ(id));
}

export async function deleteNotificationApi(id: number): Promise<void> {
  await apiClient.delete(ENDPOINTS.NOTIFICATIONS.DELETE(id));
}
