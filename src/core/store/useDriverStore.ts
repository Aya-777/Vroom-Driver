import { create } from 'zustand';

export type DriverStatus =
  | 'OFFLINE'
  | 'ONLINE'
  | 'ONTRIP';

interface DriverState {
  status: DriverStatus;
  setStatus: (status: DriverStatus) => void;
}

export const useDriverStore = create<DriverState>(set => ({
  status: 'OFFLINE',

  setStatus: status =>
    set({
      status,
    }),
}));