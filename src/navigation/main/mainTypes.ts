// src/navigation/main/mainTypes.ts
import { NavigatorScreenParams } from '@react-navigation/native';
import { HomeStackParamList } from './home/homeTypes';
import { ProfileStackParamList } from './profile/profileTypes';
// import { ActivityStackParamList } from './activity/activityTypes'; 

export type MainTabsParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  ActivityTab: undefined; // undefined until building the real ActivityStack
  ProfileTab: NavigatorScreenParams<ProfileStackParamList>;
};