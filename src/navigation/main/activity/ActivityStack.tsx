import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityStackParamList } from './activityTypes';
import ActivitiesScreen from '../../../modules/activities/screens/ActivitiesScreen';

const Stack = createNativeStackNavigator<ActivityStackParamList>();

export default function ActivityStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ActivitiesMain" component={ActivitiesScreen} />
        </Stack.Navigator>
    );
}