import { create } from 'zustand';
import { CurrentRide } from '../types/trip.types';

interface RideState {
  activeRide: Partial<CurrentRide> | null;
  setRideDetails: (details: Partial<CurrentRide>) => void;
  clearRide: () => void;

  location: [number, number] | null;
  setLocation: (location: [number, number]) => void;
  clearLocation: () => void;
}

export const useRideStore = create<RideState>((set) => ({
  activeRide: null,

  setRideDetails: (details) =>
    set((state) => ({
      activeRide: {
        ...state.activeRide,
        ...details,
      },
    })),

  clearRide: () =>
    set({
      activeRide: null,
    }),

  location: null,

  setLocation: (location) =>
    set({
      location,
    }),

  clearLocation: () =>
    set({
      location: null,
    }),
}));