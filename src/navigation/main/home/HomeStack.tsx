import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../../modules/home/screens/HomeScreen';
import TripScreen from '../../../modules/ride/screens/TripScreen';
import { HomeStackParamList, HomeStackScreenProps } from './homeTypes';

const Stack = createNativeStackNavigator<HomeStackParamList>();

function TripRoute({ navigation }: HomeStackScreenProps<'Trip'>) {
  return (
    <TripScreen
      // tripId={route.params.tripId}
      onBackPress={() => navigation.goBack()}
      onTripCompleted={() => navigation.goBack()}
    />
  );
}

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Trip" component={TripRoute} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}


