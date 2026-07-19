import React from 'react';
import { View, Text } from 'react-native';
import type { Driver } from '../../types/ride.types';
import type { ThemeColors } from '../../../../core/theme/theme.types';
import type { createStyles } from '../../styles/driver.styles';
import CarIcon from '../../../../assets/svg/common/ride.svg';
import { useTranslation } from 'react-i18next';

type CarDetailsCardProps = {
  driver: Driver;
  styles: ReturnType<typeof createStyles>;
  colors: ThemeColors;
};

export default function CarDetailsCard({ driver, styles, colors }: CarDetailsCardProps) {
  const {t} = useTranslation('driverFound');
  return (
    <View style={styles.carDetailsCard}>
      <View style={styles.carIconContainer}>
        <CarIcon fill={colors.surface} />
      </View>

      <View style={styles.carInfoTextDetails}>
        <Text style={styles.carDetailsTitle}>
          {t('carDetails')}
        </Text>

        <Text style={styles.carModelText}>
          {driver.car.model}
        </Text>

        <View style={styles.plateRow}>
          <Text style={styles.carColorText}>
            {driver.car.color}
          </Text>
        </View>
      </View>
    </View>
  );
}