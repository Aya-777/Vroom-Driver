import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef, RootStackParamList } from './rootTypes';

import { useAuthLoggedIn, useAuthHasHydrated } from '../core/store/authStore';
import MainDrawer from './main/MainDrawer';
import AuthStack from './auth/AuthStack';
import SplashScreen from '../modules/auth/screens/SplashScreen';
import { deepLinkingConfig } from './deepLinkingConfig';
import NotificationsScreen from '../modules/notifications/screens/NotificationsScreen';
import { isRTL } from '../core/i18n/utils/isRTL';
import { usePushNotifications } from '../modules/notifications/hooks/usePushNotifications';
import { handleNotificationNavigation } from '../modules/notifications/utils/notificationNavigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

function PushNotificationsHandler({ isLoggedIn }: { isLoggedIn: boolean }) {
  const navigation = useNavigation();

  usePushNotifications(isLoggedIn, data => {
    handleNotificationNavigation(data, (screen, params) => {
      (navigation.navigate as (screen: string, params?: object) => void)(
        screen,
        params,
      );
    });
  });

  return null;
}

export default function RootNavigator() {
  const isLoggedIn = useAuthLoggedIn();
  const hasHydrated = useAuthHasHydrated();
  const [isSplashComplete, setIsSplashComplete] = useState(false);

  const isAppReady = isSplashComplete && hasHydrated;

  return (
    <NavigationContainer
      linking={deepLinkingConfig}
      ref={navigationRef}
      direction={isRTL() ? 'rtl' : 'ltr'}
    >
      <PushNotificationsHandler isLoggedIn={isLoggedIn} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAppReady ? (
          <Stack.Screen name="Splash">
            {(props) => <SplashScreen {...props} onAnimationEnd={() => setIsSplashComplete(true)} />}
          </Stack.Screen>
        ) : isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen name="Main" component={MainDrawer} />
            <Stack.Screen name="Notifications" component={NotificationsScreen} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="AuthStack" component={AuthStack} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}