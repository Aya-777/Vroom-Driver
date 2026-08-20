import RideIcon from '../../../assets/svg/common/ride.svg';
import SystemIcon from '../../../assets/svg/common/notifications.svg';
import { ThemeColors } from '../../../core/theme/theme.types';

type NotificationAppearance = {
    Icon: React.ElementType;
    color: string;
    backgroundColor: string;
};

export const getNotificationIcon = (
    type: string,
    colors: ThemeColors,
): NotificationAppearance => {
    switch (type.toUpperCase()) {
        case 'TRIP_REQUEST':
        case 'TRIP_ACCEPTED':
        case 'DRIVER_ARRIVED':
        case 'TRIP_STARTED':
        case 'TRIP_COMPLETED':
        case 'PAYMENT_CONFIRMED':
        case 'SCHEDULED_TRIP_REMINDER':
        case 'SCHEDULED_TRIP_ACCEPTED':
            return {
                Icon: RideIcon,
                color: colors.textSecondary,
                backgroundColor: colors.primary + '15',
            };

        case 'TRIP_CANCELLED':
        case 'TRIP_NO_DRIVER_FOUND':
        case 'COMPLAINT_RECEIVED':
        case 'CONTACT_US_RECEIVED':
        case 'SAFETY_ALERT':
        default:
            return {
                Icon: SystemIcon,
                color: '#D4AF37',
                backgroundColor: '#d4af37b3',
            };
    }
};
