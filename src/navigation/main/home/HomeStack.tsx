import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../../modules/home/screens/HomeScreen';
import SelectRideScreen from '../../../modules/ride/screens/SelectRideScreen';
import RideDetailsScreen from '../../../modules/ride/screens/ExtraDetailsScreen';
import RideConfirmationScreen from '../../../modules/ride/screens/RideConfirmationScreen';
import DriverFoundScreen from '../../../modules/ride/screens/DriverFoundScreen';
import { HomeStackParamList } from './homeTypes';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false , }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />

      <Stack.Screen
        name="SelectRide"
        component={SelectRideScreen}
      />

      <Stack.Screen
        name="RideDetails"
        component={RideDetailsScreen}
      />

      <Stack.Screen
        name="ConfirmRide"
        component={RideConfirmationScreen}
      />

      <Stack.Screen
        name="DriverFound"
        component={DriverFoundScreen}
      />
    </Stack.Navigator>
  );
}