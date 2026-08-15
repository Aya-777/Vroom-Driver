import { create } from 'zustand';
import { UserProfile } from '../types/profile.types';

interface ProfileState {
  userProfile: UserProfile;
  setUserProfile: (userProfile: UserProfile) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  userProfile: {
    id: 0,
    firstName: 'Captain',
    lastName: 'Jack Sparrow',
    phone: '',
    role: 'driver',
    accountStatus: '',
    ratingAvg: 0,
    profileImage: '',
    isActive: true,
  },

  setUserProfile: (userProfile) =>
    set({
      userProfile,
    }),
}));