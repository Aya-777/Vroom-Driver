import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Vehicle } from '../../../modules/profile/types/profile.types';

export type ProfileStackParamList = {
  ProfileHome: undefined;
  VehicleDetails: { vehicle: Vehicle };
  EditProfile: undefined;
  PaymentMethods: undefined;
};

export type ProfileStackScreenProps<T extends keyof ProfileStackParamList> =
  NativeStackScreenProps<ProfileStackParamList, T>;