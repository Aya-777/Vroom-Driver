import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/home.styles';
import { useTranslation } from 'react-i18next';

interface DashboardInfo {
  metrics?: {
    weeklyCompletionRate?: number;
    completedPercentage?: number;
    cancelledPercentage?: number;
    cancelledByRiderPercentage?: number;
  };
}

interface DashboardDataProps {
  dashboardData?: DashboardInfo;
}

export const RideWeeklyStatus: React.FC<DashboardDataProps> = ({
  dashboardData,
}) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['home']);

  return (
    <View style={styles.sectionCard}>
      <Text style={[styles.sectionTitle, { marginBottom: 16 }]}>
        {t('rideWeeklyStatus')}
      </Text>
      <View style={styles.metricRow}>
        {/* Circular representation can go here */}
        <Text style={[styles.cardValue, { fontSize: 28 }]}>
          {dashboardData?.metrics?.weeklyCompletionRate}%
        </Text>
        <View style={styles.metricLegendBox}>
          <View style={styles.legendItem}>
            <View style={styles.legendDotText}>
              <View
                style={[styles.dotIndicator, { backgroundColor: '#38BDF8' }]}
              />
              <Text style={styles.legendText}>{t('completed')}</Text>
            </View>
            <Text style={styles.legendValue}>
              {dashboardData?.metrics?.completedPercentage}%
            </Text>
          </View>
          <View style={styles.legendItem}>
            <View style={styles.legendDotText}>
              <View
                style={[styles.dotIndicator, { backgroundColor: '#64748B' }]}
              />
              <Text style={styles.legendText}>{t('cancelled')}</Text>
            </View>
            <Text style={styles.legendValue}>
              {dashboardData?.metrics?.cancelledPercentage}%
            </Text>
          </View>
          <View style={styles.legendItem}>
            <View style={styles.legendDotText}>
              <View
                style={[styles.dotIndicator, { backgroundColor: '#475569' }]}
              />
              <Text style={styles.legendText}>{t('cancelledByRider')}</Text>
            </View>
            <Text style={styles.legendValue}>
              {dashboardData?.metrics?.cancelledByRiderPercentage}%
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
