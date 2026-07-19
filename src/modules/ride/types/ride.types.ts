export type Car = {
  model: string;
  color: string;
  plate: string;
};

export type Driver = {
  name: string;
  onTheWayMessage: string;
  arrivedMessage: string;
  car: Car;
};

export interface RideValidationErrors {
  fromLocation?: string;
  toLocation?: string;
}

export interface RideParams {
  pickupLocation: string;
  dropoffLocation: string;
  selectedPerson: string;
  timeEstimate: string; 
  time: string;
  payment: string;
  vehicleType: string;
  price: string;
  contactPhone: string;
}