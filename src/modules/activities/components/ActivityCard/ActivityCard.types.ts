import { createStyles } from './ActivityCard.styles';

export interface ActivityCardProps {
    rideType: string;
    pickup: string;
    destination: string;
    date: string;
    fare: string;
    distance?: string;
    onPress?: () => void;
    onDelete?: () => void;
}

export interface LocationRowProps {
    isDestination?: boolean;
    text: string;
    styles: ReturnType<typeof createStyles>;

}