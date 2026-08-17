import { TripId, TripStatus, TripStopDto, TripUserDto, TripVehicleDto } from '../services/dto/trip.dto';

export const TripStage = {
  DETAILS: 'PENDING',
  EN_ROUTE: 'ACCEPTED',
  PIN_ENTRY: 'PICKUP',
  IN_PROGRESS: 'ON_TRIP',
  COMPLETED: 'COMPLETED',
  CANCELLED_BY_RIDER: 'CANCELLED_BY_RIDER',
  CANCELLED_BY_DRIVER: 'CANCELLED_BY_DRIVER',
} as const satisfies Record<string, TripStatus>;

export type TripStage = TripStatus;

export type Rider = {
  name: string;
  avatar?: string;
  phone?: string;
};


export interface CurrentRide {
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
    vehicle_type: number; 
    rider: TripUserDto | null;
    driver: TripUserDto | null;
    vehicle: TripVehicleDto | null;
}
