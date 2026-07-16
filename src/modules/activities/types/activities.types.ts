export type RideStatus =
    | 'Completed'
    | 'Cancelled'
    | 'Ongoing'
    | 'Pending'
    | 'Accepted';

export interface Activity {
    id: string;
    status: RideStatus;
    pickupLocation: string;
    dropoffLocation: string;
    date: string;
    price: number;
    currency: string;
    vehicleType: string;
    driverName?: string;
    driverAvatar?: string;
    distance?: number;
    duration?: number;
}

export interface ActivitiesState {
    selectedStatus: RideStatus;
    activities: Activity[];
    isLoading: boolean;
    error: string | null;
}

export interface ActivityDetailsSheetProps {
    visible: boolean;
    activity: Activity | null;

    onClose: () => void;
    onReview: () => void;
    onReride: () => void;
}