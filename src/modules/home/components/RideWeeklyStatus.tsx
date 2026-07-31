import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SegmentedCircularProgress from './SegmentedCircularProgress';
import { HomeDashboardData } from '../types/home.types';

type Props = {
  dashboardData: HomeDashboardData;
}

const RideWeeklyStatus = ({dashboardData} : Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        RIDE WEEKLY STATUS
      </Text>

      <View style={styles.content}>

        {/* Segmented circle */}
        <SegmentedCircularProgress
          size={130}
          strokeWidth={22}
          centerText={`${dashboardData.metrics.weeklyCompletionRate}%`}
          segments={[
            {
              percentage: dashboardData.metrics.completedPercentage,
              color: '#DED5FF',
            },
            {
              percentage: dashboardData.metrics.cancelledPercentage,
              color: '#182A5B',
            },
            {
              percentage: dashboardData.metrics.cancelledByRiderPercentage,
              color: '#29324B',
            },
          ]}
          backgroundColor="#1B2B60"
        />

        {/* Legend */}
        <View style={styles.legend}>

          <View style={styles.legendRow}>
            <View
              style={[
                styles.dot,
                { backgroundColor: '#DED5FF' },
              ]}
            />

            <Text style={styles.label}>
              Completed
            </Text>

            <Text style={styles.value}>
              85%
            </Text>
          </View>

          <View style={styles.legendRow}>
            <View
              style={[
                styles.dot,
                { backgroundColor: '#182A5B' },
              ]}
            />

            <Text style={styles.label}>
              Cancelled
            </Text>

            <Text style={styles.value}>
              10%
            </Text>
          </View>

          <View style={styles.legendRow}>
            <View
              style={[
                styles.dot,
                { backgroundColor: '#29324B' },
              ]}
            />

            <Text style={styles.label}>
              Cancelled By Rider
            </Text>

            <Text style={styles.value}>
              5%
            </Text>
          </View>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2C3D7E',
    borderRadius: 18,
    padding: 24,
  },

  title: {
    color: '#DED8FF',
    fontSize: 21,
    fontWeight: '500',
    letterSpacing: 0.5,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },

  legend: {
    flex: 1,
    marginLeft: 25,
    gap: 20,
  },

  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dot: {
    width: 13,
    height: 13,
    borderRadius: 7,
    marginRight: 12,
  },

  label: {
    flex: 1,
    color: '#E1DAFF',
    fontSize: 13,
  },

  value: {
    color: '#E1DAFF',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default RideWeeklyStatus;