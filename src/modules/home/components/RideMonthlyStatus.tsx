import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/home.styles';

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

  return (
    <View style={styles.monthlySection}>
      <Text style={[styles.sectionTitle, { marginBottom: 12 }]}>
        RIDE MONTHLY STATUS
      </Text>
      <View style={styles.monthlyContainer}>
        <View style={styles.monthlyItem}>
          <Text style={[styles.cardValue, { fontSize: 16 }]}>
            {dashboardData?.metrics?.monthlyCompleted}%
          </Text>
          <Text style={styles.monthlyText}>Completed</Text>
        </View>
        <View style={styles.monthlyItem}>
          <Text style={[styles.cardValue, { fontSize: 16 }]}>
            {dashboardData?.metrics?.monthlyCancelled}%
          </Text>
          <Text style={styles.monthlyText}>Cancelled</Text>
        </View>
        <View style={styles.monthlyItem}>
          <Text style={[styles.cardValue, { fontSize: 16 }]}>
            {dashboardData?.metrics?.monthlyCancelledByRider}%
          </Text>
          <Text style={styles.monthlyText}>Cancelled By Rider</Text>
        </View>
      </View>
    </View>
  );
};
