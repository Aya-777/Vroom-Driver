import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/home.styles';

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

  return (
    <View style={styles.sectionCard}>
      <Text style={[styles.sectionTitle, { marginBottom: 16 }]}>
        RIDE WEEKLY STATUS
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
              <Text style={styles.legendText}>Completed</Text>
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
              <Text style={styles.legendText}>Cancelled</Text>
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
              <Text style={styles.legendText}>Cancelled By Rider</Text>
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
