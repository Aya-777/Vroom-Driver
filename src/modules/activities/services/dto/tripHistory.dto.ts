export interface TripHistoryStopDTO {
  id: number;
  address: string;
  order: number;
  stop_type: 'PICKUP' | 'STOP' | 'DROP_OFF';
}

export type TerminalTripStatus =
  | 'COMPLETED'
  | 'CANCELLED_BY_RIDER'
  | 'CANCELLED_BY_DRIVER';

export interface TripHistoryItemDTO {
  id: number;
  status: TerminalTripStatus;
  stops: TripHistoryStopDTO[];
  driver_name: string | null;
  vehicle_type: string | null;
  price: string | null;
  distance: number | null;
  duration: number | null;
  payment_method: string;
  cancellation_reason: string | null;
  cancelled_at: string | null;
  requested_at: string;
  ended_at: string | null;
}

export interface PaginatedResult<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface ApiEnvelope<T> {
  'status code': number;
  message: string;
  data: T;
}
