import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type HomeStackParamList = {
  HomeScreen: undefined;       
  
  SelectRide: undefined;
  RideDetails: undefined;
  ConfirmRide: undefined;
  
  DriverFound: { driverId: string };
  TakeRide: { driverId: string };
  DriverArrived: { driverId: string };
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> = 
  NativeStackScreenProps<HomeStackParamList, T>;