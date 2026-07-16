import { RideStatus, Activity } from '../types/activities.types';

export const ACTIVITY_STATUSES: RideStatus[] = [
    'Ongoing',
    'Pending',
    'Accepted',
    'Completed',
    'Cancelled',
];

export const ACTIVITIES: Activity[] = [
    {
        id: '1',
        status: 'Ongoing',
        pickupLocation: 'Oslo Central Station',
        dropoffLocation: 'Airport Terminal 2',
        date: 'Today • 4:30 PM',
        price: 245,
        currency: 'SP',
        vehicleType: 'Economy',
    },
    {
        id: '2',
        status: 'Completed',
        pickupLocation: 'National Theatre',
        dropoffLocation: 'Oslo City',
        date: 'Yesterday • 8:15 PM',
        price: 180,
        currency: 'SP',
        vehicleType: 'Standard',
    },
];