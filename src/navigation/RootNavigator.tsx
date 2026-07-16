import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef, RootStackParamList } from './rootTypes';

import { useAuthLoggedIn } from '../core/store/authStore';
import MainTabs from './main/MainTabs';
import AuthStack from './auth/AuthStack';
import SplashScreen from '../modules/auth/screens/SplashScreen';
import { deepLinkingConfig } from './deepLinkingConfig';
import NotificationsScreen from '../modules/notifications/screens/NotificationsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const isLoggedIn = useAuthLoggedIn();
  const [isSplashComplete, setIsSplashComplete] = useState(false);

  return (
    <NavigationContainer
      linking={deepLinkingConfig}
      ref={navigationRef}
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
              name="MainTabs"
              component={MainTabs}
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