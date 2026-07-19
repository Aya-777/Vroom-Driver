import { NavigatorScreenParams } from '@react-navigation/native';
import { HomeStackParamList } from './home/homeTypes';
import { ProfileStackParamList } from './profile/profileTypes';
import { ActivityStackParamList } from './activity/activityTypes';

export type MainTabsParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  ActivityTab: NavigatorScreenParams<ActivityStackParamList>;
  ProfileTab: NavigatorScreenParams<ProfileStackParamList>;
};

export type MainDrawerParamList = {
  MainTabs: NavigatorScreenParams<MainTabsParamList>;
};
