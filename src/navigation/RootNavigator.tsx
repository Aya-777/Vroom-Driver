import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
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
import { DriverLocationProvider } from '../core/providers/DriverLocationProvider';

const Stack = createNativeStackNavigator<RootStackParamList>();

function PushNotificationsHandler({ isLoggedIn }: { isLoggedIn: boolean }) {
  usePushNotifications(isLoggedIn, handleNotificationNavigation);
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

      {isAppReady && isLoggedIn ? (
        <DriverLocationProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Group>
              <Stack.Screen name="Main" component={MainDrawer} />
              <Stack.Screen
                name="Notifications"
                component={NotificationsScreen}
              />
            </Stack.Group>
          </Stack.Navigator>
        </DriverLocationProvider>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!isAppReady ? (
            <Stack.Screen name="Splash">
              {props => (
                <SplashScreen
                  {...props}
                  onAnimationEnd={() => setIsSplashComplete(true)}
                />
              )}
            </Stack.Screen>
          ) : (
            <Stack.Group>
              <Stack.Screen name="AuthStack" component={AuthStack} />
            </Stack.Group>
          )}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}