export type DriverStatus = 'ONLINE' | 'OFFLINE';

export interface UpdateDriverStatusRequest {
  status: DriverStatus;
}

export interface UpdateDriverStatusResponse {
  'status code': number;
  message: string;
  data: {
    driver_status: DriverStatus;
  };
}