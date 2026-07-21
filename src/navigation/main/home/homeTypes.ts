import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type HomeStackParamList = {
  HomeScreen: undefined;
  Ride: undefined;    
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> = 
  NativeStackScreenProps<HomeStackParamList, T>;