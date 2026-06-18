import { create } from 'zustand';
import { RideParams } from '../types/ride.types';

interface RideState {
  activeRide: Partial<RideParams>;
  setRideDetails: (details: Partial<RideParams>) => void;
  clearRide: () => void;
}

export const useRideStore = create<RideState>((set) => ({
  activeRide: {},
  setRideDetails: (details) => 
    set((state) => ({ activeRide: { ...state.activeRide, ...details } })),
  clearRide: () => set({ activeRide: {} }),
}));