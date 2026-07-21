import React from 'react';
import { View, Text, Switch } from 'react-native';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/home.styles';

interface DashboardDataProps {
  dashboardData?: {
    weeklyTrends: { day: string }[];
  };
}

export const WeeklyTrendsFlowChart: React.FC<DashboardDataProps> = ({
  dashboardData,
}) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.sectionCard}>
      <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionTitle}>WEEKLY TRENDS</Text>
        <Text style={styles.sectionSubtitle}>Last 7 Days</Text>
      </View>
      <View style={styles.chartContainer}>
        {/* Implement your chart view or SVG polyline graph here */}
        <View style={styles.chartAxisRow}>
          {dashboardData?.weeklyTrends.map((item, index) => (
            <Text key={index} style={styles.chartDayText}>
              {item.day}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};
