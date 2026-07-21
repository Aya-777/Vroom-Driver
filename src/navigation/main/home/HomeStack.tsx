import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../../modules/home/screens/HomeScreen';
import { HomeStackParamList } from './homeTypes';
import RideScreen from '../../../modules/ride/screens/RideScreen';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Ride" component={RideScreen} />
    </Stack.Navigator>
  );
}
