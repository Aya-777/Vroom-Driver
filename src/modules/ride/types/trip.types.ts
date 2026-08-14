import { TripStatus } from '../services/dto/trip.dto';

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

export interface RideParams {
  timeEstimate: string;
  price: string;
  vehicleType: string;
  payment: string;
  pickupLocation?: string;
  dropoffLocation?: string;
  contactPhone?: string;
};
