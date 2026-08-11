import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../../core/theme/useTheme';
import { createStyles } from '../../styles/trip.styles';
import { useTranslation } from 'react-i18next';
import { useRideStore } from '../../store/useRideStore';

import ClockIcon from '../../../../assets/svg/common/schedule.svg';
import PriceIcon from '../../../../assets/svg/payment/price.svg';
import CarIcon from '../../../../assets/svg/common/ride.svg';
import CashIcon from '../../../../assets/svg/payment/cash.svg';

export default function TripDetailsGrid() {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const { t } = useTranslation(['trip', 'common']);
    const activeRide = useRideStore(state => state.activeRide);

    const items = [
        { icon: <ClockIcon width={16} height={16} fill={colors.primary} />, label: t('time'), value: activeRide.timeEstimate ?? 'N/A' },
        { icon: <PriceIcon width={16} height={16} fill={colors.primary} />, label: t('totalPrice'), value: activeRide.price ?? 'N/A' },
        { icon: <CarIcon width={16} height={16} fill={colors.primary} />, label: t('selectedCar'), value: activeRide.vehicleType ?? 'N/A' },
        { icon: <CashIcon width={16} height={16} fill={colors.primary} />, label: t('payment'), value: activeRide.payment ?? 'N/A' },
    ];

    return (
        <View style={styles.detailsGrid}>
            {items.map((item, i) => (
                <View key={i} style={styles.detailsBox}>
                    <View style={styles.detailsBoxHeader}>
                        {item.icon}
                        <Text style={styles.detailsBoxTitle}>{item.label}</Text>
                    </View>
                    <Text style={styles.detailsBoxValue}>{item.value}</Text>
                </View>
            ))}
        </View>
    );
}