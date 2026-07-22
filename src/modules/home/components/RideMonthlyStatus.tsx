import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/home.styles';
import { useTranslation } from 'react-i18next';

interface DashboardInfo {
  metrics?: {
    monthlyCompleted?: number;
    monthlyCancelled?: number;
    monthlyCancelledByRider?: number;
    weeklyCompletionRate?: number;
    completedPercentage?: number;
    cancelledPercentage?: number;
    cancelledByRiderPercentage?: number;
  };
}
interface DashboardDataProps {
  dashboardData?: DashboardInfo;
}

export const RideMonthlyStatus: React.FC<DashboardDataProps> = ({
  dashboardData,
}) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['home']);

  return (
    <View style={styles.monthlySection}>
      <Text style={[styles.sectionTitle, { marginBottom: 12 }]}>
        {t('rideMonthlyStatus')}
      </Text>
      <View style={styles.monthlyContainer}>
        <View style={styles.monthlyItem}>
          <Text style={[styles.cardValue, { fontSize: 16 }]}>
            {dashboardData?.metrics?.monthlyCompleted}%
          </Text>
          <Text style={styles.monthlyText}>{t('completed')}</Text>
        </View>
        <View style={styles.monthlyItem}>
          <Text style={[styles.cardValue, { fontSize: 16 }]}>
            {dashboardData?.metrics?.monthlyCancelled}%
          </Text>
          <Text style={styles.monthlyText}>{t('cancelled')}</Text>
        </View>
        <View style={styles.monthlyItem}>
          <Text style={[styles.cardValue, { fontSize: 16 }]}>
            {dashboardData?.metrics?.monthlyCancelledByRider}%
          </Text>
          <Text style={styles.monthlyText}>{t('cancelledByRider')}</Text>
        </View>
      </View>
    </View>
  );
};
