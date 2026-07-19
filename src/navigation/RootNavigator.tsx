import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef, RootStackParamList } from './rootTypes';

import { useAuthLoggedIn } from '../core/store/authStore';
import MainDrawer from './main/MainDrawer';
import AuthStack from './auth/AuthStack';
import SplashScreen from '../modules/auth/screens/SplashScreen';
import { deepLinkingConfig } from './deepLinkingConfig';
import NotificationsScreen from '../modules/notifications/screens/NotificationsScreen';
import { isRTL } from '../core/i18n/utils/isRTL';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const isLoggedIn = useAuthLoggedIn();
  const [isSplashComplete, setIsSplashComplete] = useState(false);

  return (
    <NavigationContainer
      linking={deepLinkingConfig}
      ref={navigationRef}
      direction = {isRTL() ? 'rtl' : 'ltr'}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isSplashComplete ? (
          <Stack.Screen name="Splash">
            {(props) => (
              <SplashScreen
                {...props}
                onAnimationEnd={() => setIsSplashComplete(true)}
              />
            )}
          </Stack.Screen>
        ) : isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen
              name="Main"
              component={MainDrawer}
            />
            <Stack.Screen
              name="Notifications"
              component={NotificationsScreen}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="AuthStack"
              component={AuthStack}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}