import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SegmentedCircularProgress from './SegmentedCircularProgress';
import { HomeDashboardData } from '../types/home.types';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/home/rideWeeklyStatus.styles';
import { useTranslation } from 'react-i18next';

type Props = {
  dashboardData: HomeDashboardData;
};

const RideWeeklyStatus = ({ dashboardData }: Props) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['home']);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{t('rideWeeklyStatus')}</Text>

      <View style={styles.content}>
        {/* Segmented circle */}
        <SegmentedCircularProgress
          size={130}
          strokeWidth={22}
          centerText={`${dashboardData.metrics.weeklyCompletionRate}%`}
          centerTextColor={colors.textPrimary}
          segments={[
            {
              percentage: dashboardData.metrics.completedPercentage,
              color: colors.primary,
            },
            {
              percentage: dashboardData.metrics.cancelledPercentage,
              color: colors.backgroundSoft,
            },
            {
              percentage: dashboardData.metrics.cancelledByRiderPercentage,
              color: colors.neutral,
            },
          ]}
          backgroundColor={colors.surface}
        />

        {/* Legend */}
        <View style={styles.legend}>
          <View style={styles.legendRow}>
            <View style={[styles.dot, { backgroundColor: colors.primary }]} />

            <Text style={styles.label}>{t('completed')}</Text>

            <Text style={styles.value}>{dashboardData.metrics.completedPercentage}{'%'}</Text>
          </View>

          <View style={styles.legendRow}>
            <View style={[styles.dot, { backgroundColor: colors.backgroundSoft }]} />

            <Text style={styles.label}>{t('cancelled')}</Text>

            <Text style={styles.value}>{dashboardData.metrics.cancelledPercentage}{'%'}</Text>
          </View>

          <View style={styles.legendRow}>
            <View style={[styles.dot, { backgroundColor: colors.neutral }]} />

            <Text style={styles.label} numberOfLines={2} adjustsFontSizeToFit>
              {t('cancelledByRider')}
            </Text>

            <Text style={styles.value}>{dashboardData.metrics.cancelledByRiderPercentage}{'%'}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RideWeeklyStatus;