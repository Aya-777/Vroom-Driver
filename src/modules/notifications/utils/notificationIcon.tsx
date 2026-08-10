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
        case 'TRIP_STARTED':
        case 'TRIP_COMPLETED':
            return {
                Icon: RideIcon,
                color: colors.textSecondary,
                backgroundColor: colors.primary + '15',
            };

        case 'TRIP_CANCELLED':
        case 'TRIP_NO_DRIVER_FOUND':
        default:
            return {
                Icon: SystemIcon,
                color: '#D4AF37',
                backgroundColor: '#d4af37b3',
            };
    }
};