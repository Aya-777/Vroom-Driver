import { create } from 'zustand';
import { CurrentRide } from '../types/trip.types';

interface RideState {
  activeRide: Partial<CurrentRide>;
  setRideDetails: (details: Partial<CurrentRide>) => void;
  clearRide: () => void;

  location: [number, number] | null;
  setLocation: (location: [number, number]) => void;
  clearLocation: () => void;
}

export const useRideStore = create<RideState>((set) => ({
  activeRide: {},

  setRideDetails: (details) =>
    set((state) => ({
      activeRide: {
        ...state.activeRide,
        ...details,
      },
    })),

  clearRide: () =>
    set({
      activeRide: {},
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