export type DriverStatus = 'ONLINE' | 'OFFLINE' | 'ONTRIP';

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

export interface TodayStatsResponse {
  data: {
    date: string;
    duration_minutes: number;
    driver_status: 'ONLINE' | 'OFFLINE' | 'ONTRIP';
    last_seen: string;
  }
}