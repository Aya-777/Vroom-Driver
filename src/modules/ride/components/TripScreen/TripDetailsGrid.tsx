import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../../../core/theme/useTheme';
import { createStyles } from '../../styles/trip.styles';
import { useTranslation } from 'react-i18next';
import DetailBox from './DetailBox';
import { TripDto } from '../../services/dto/trip.dto';
import { VehicleTierDto } from '../../services/vehicleApi';

import ClockIcon from '../../../../assets/svg/common/schedule.svg';
import PriceIcon from '../../../../assets/svg/payment/price.svg';
import CarIcon from '../../../../assets/svg/common/ride.svg';
import CashIcon from '../../../../assets/svg/payment/cash.svg';

type Props = {
  trip?: TripDto | null;
  vehicleTierInfo?: VehicleTierDto | null;
};

export default function TripDetailsGrid({ trip, vehicleTierInfo }: Props) {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['trip', 'common']);

  const vehicleName =
    [trip?.vehicle?.car_brand, trip?.vehicle?.car_model].filter(Boolean).join(' ') ||
    vehicleTierInfo?.label ||
    'N/A';

  const items = [
    { icon: <ClockIcon width={16} height={16} fill={colors.primary} />, title: t('time'), value: trip?.estimated_duration?.toString() ?? 'N/A' },
    { icon: <PriceIcon width={16} height={16} fill={colors.primary} />, title: t('totalPrice'), value: trip?.estimated_price?.toString() ?? 'N/A' },
    { icon: <CarIcon width={16} height={16} fill={colors.primary} />, title: t('selectedCar'), value: vehicleName },
    { icon: <CashIcon width={16} height={16} fill={colors.primary} />, title: t('payment'), value: trip?.payment_method ?? 'N/A' },
  ];

  return (
    <View style={styles.grid}>
      {items.map((item, i) => (
        <DetailBox key={i} icon={item.icon} title={item.title} value={item.value} />
      ))}
    </View>
  );
}