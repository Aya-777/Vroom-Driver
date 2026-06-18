import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type HomeStackParamList = {
  HomeScreen: undefined;       
  
  SelectRide: undefined;
  RideDetails: undefined;
  ConfirmRide: undefined;
  
  DriverFound: { driverId: string };
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> = 
  NativeStackScreenProps<HomeStackParamList, T>;