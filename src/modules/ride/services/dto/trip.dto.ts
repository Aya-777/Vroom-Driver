export type TripId = number;

export type TripStatus =
  | 'PENDING'
  | 'ACCEPTED'
  | 'PICKUP'
  | 'ON_TRIP'
  | 'COMPLETED'
  | 'CANCELLED_BY_RIDER'
  | 'CANCELLED_BY_DRIVER';

export interface TripUserDto {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  profile_image: string | null;
  rating: number;
}

export interface TripStopDto {
  id: number;
  address: string;
  order: number;
  stop_type: string;
  latitude: number | null;
  longitude: number | null;
}

export interface TripVehicleDto {
  id: number;
  car_brand: string;
  car_model: string;
  color: string;
  plate_number: string;
}

export interface TripDto {
  id: TripId;
  status: TripStatus;
  payment_method: string;
  estimated_distance: number | string | null;
  estimated_duration: number | null;
  estimated_price: number | string | null;
  actual_distance: number | string | null;
  actual_duration: number | null;
  actual_price: number | string | null;
  requested_at: string;
  accepted_at: string | null;
  started_at: string | null;
  ended_at: string | null;
  cancelled_at: string | null;
  is_for_someone_else: boolean;
  passenger_contact_phone: string | null;
  stops: TripStopDto[];
  rider: TripUserDto | null;
  driver: TripUserDto | null;
  vehicle: TripVehicleDto | null;
}

export interface TripLocationDto {
  latitude: number;
  longitude: number;
  last_updated: string;
}

export interface TripStatusChoiceDto {
  key: TripStatus;
  label: string;
}

export type TripRouteDto = Record<string, unknown> | unknown[] | null;

export interface ApiSuccessResponse<T> {
  'status code': number;
  message: string;
  data: T;
}

