import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Vehicle } from '../../../modules/profile/types/profile.types';

export type ProfileStackParamList = {
  ProfileHome: undefined;
  Settings: undefined;
  VehicleDetails: { vehicle: Vehicle };
  EditProfile:
  | { firstName?: string; lastName?: string; phone?: string; profileImage?: string | null }
  | undefined;
  ChangePhone: undefined;
  ChangePhoneOtp: { newPhone: string };
  ChangePassword: undefined;
  PaymentMethods: undefined;
  Safety: undefined;
};

export type ProfileStackScreenProps<T extends keyof ProfileStackParamList> =
  NativeStackScreenProps<ProfileStackParamList, T>;
