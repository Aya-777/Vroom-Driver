import { createNavigationContainerRef, NavigatorScreenParams, CommonActions } from '@react-navigation/native';
import { AuthStackParamList } from './auth/authTypes';
import { MainTabsParamList } from './main/mainTypes';

export type RootStackParamList = {
  Splash: undefined;
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  MainTabs: NavigatorScreenParams<MainTabsParamList>;
  Notifications: undefined;
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate<RouteName extends keyof RootStackParamList>(
  name: RouteName,
  params?: RootStackParamList[RouteName]
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.navigate({
        name: name as string,
        params: params,
      })
    );
  } else {
    console.warn('[NavigationRef] Attempted to navigate before container was ready.');
  }
}
export function resetAndNavigate(screenName: keyof RootStackParamList) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: screenName }],
      })
    );
  }
}