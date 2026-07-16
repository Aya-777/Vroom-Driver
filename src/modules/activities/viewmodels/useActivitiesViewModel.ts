import { useState } from 'react';
import { RideStatus } from '../types/activities.types';
import { ACTIVITIES, ACTIVITY_STATUSES } from '../constants/activitiesData';

export const useActivitiesViewModel = () => {
    const [selectedStatus, setSelectedStatus] = useState<RideStatus>('Ongoing');

    const activities = ACTIVITIES;
    const isLoading = false;
    const error = null;

    const filteredActivities = activities.filter(
        activity => activity.status === selectedStatus
    );

    filteredActivities.map(activity => ({
        id: activity.id,
        rideType: activity.vehicleType,
        pickup: activity.pickupLocation,
        destination: activity.dropoffLocation,
        date: activity.date,
        fare: `${activity.price} ${activity.currency}`,
        distance: activity.distance
            ? `${activity.distance} km`
            : undefined,
    }));

    return {
        statuses: ACTIVITY_STATUSES,
        selectedStatus,
        setSelectedStatus,
        activities: filteredActivities,
        isLoading,
        error,
    };
};