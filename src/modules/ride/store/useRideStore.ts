import { create } from 'zustand';
import { CurrentRide } from '../types/trip.types';

interface RideState {
  activeRide: CurrentRide | null;
  setActiveRide: (ride: CurrentRide | null) => void;
  clearRide: () => void;

  location: [number, number] | null;
  setLocation: (location: [number, number]) => void;
  clearLocation: () => void;
  
  sosVisible: boolean;
  sosAlertId: number | null;

  setSOSVisible: (visible: boolean) => void;
  setSOSAlertId: (alertId: number | null) => void;

}

export const useRideStore = create<RideState>((set) => ({
  activeRide: null,

  setActiveRide: (ride) =>
    set({
      activeRide: ride,
    }),

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
    
  sosVisible: false,
  sosAlertId: null,

  setSOSVisible: visible => set({ sosVisible: visible }),

  setSOSAlertId: alertId => set({ sosAlertId: alertId }),
}));