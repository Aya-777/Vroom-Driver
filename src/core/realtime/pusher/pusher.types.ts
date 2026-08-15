import { TripStatus } from '../../../modules/ride/types/RideState';

export interface TripDriverAssignedEvent {
  trip_id: number;
  driver_id: number;
  driver_name: string;
  status: TripStatus;
}

export interface TripSearchFailedEvent {
  trip_id: number;
  status: TripStatus;
}

export interface TripCancelledEvent {
  trip_id: number;
  status: TripStatus;
}

export interface TripDriverLocationUpdatedEvent {
  trip_id: number;
  driver_id: number;
  latitude: number;
  longitude: number;
}