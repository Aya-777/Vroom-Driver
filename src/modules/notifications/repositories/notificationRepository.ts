import { apiClient } from '../../../core/network/apiClient';
import { ENDPOINTS } from '../../../core/network/endpoints';

interface DeviceTokenResponse {
  'status code': number;
  message: string;
  data: {
    id: number;
    token: string;
    platform: string;
  };
}

export async function registerDeviceToken(
  token: string,
  platform: 'android' | 'ios',
): Promise<number> {
  const response = await apiClient.post<DeviceTokenResponse>(
    ENDPOINTS.NOTIFICATIONS.DEVICE_TOKENS,
    { token, platform: platform.toUpperCase() },
  );
  return response.data.data.id;
}

export async function deactivateDeviceToken(deviceTokenId: number) {
  return apiClient.patch(ENDPOINTS.NOTIFICATIONS.DEACTIVATE(deviceTokenId));
}
