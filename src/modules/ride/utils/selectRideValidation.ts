// utils/selectRideValidation.ts
import { RideValidationErrors } from '../types/ride.types';

// Return keys that map to your translation files
export const validateRideInputs = (from: string, to: string) => {
  const errors: { [key: string]: string } = {}; // Use string keys
  
  if (!from.trim()) {
    errors.fromLocation = 'pickupRequired';
  }
  
  if (!to.trim()) {
    errors.toLocation = 'destinationRequired';
  }

  if (from.trim() && to.trim() && from.trim().toLowerCase() === to.trim().toLowerCase()) {
    errors.toLocation = 'sameInputs';
  }

  return errors;
};