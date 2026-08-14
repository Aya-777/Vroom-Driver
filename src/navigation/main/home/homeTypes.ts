import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type HomeStackParamList = {
  HomeScreen: undefined;
  Trip: { tripId: number };
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  NativeStackScreenProps<HomeStackParamList, T>;
