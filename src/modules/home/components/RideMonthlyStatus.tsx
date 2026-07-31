import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CircularProgress from './CircularProgress';
import { HomeDashboardData } from '../types/home.types';

type Props = {
  dashboardData: HomeDashboardData;
}

const RideMonthlyStatus = ({dashboardData} : Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        RIDE MONTHLY STATUS
      </Text>

      <View style={styles.items}>

        {/* Completed */}
        <View style={styles.item}>
          <CircularProgress
            percentage={dashboardData.metrics.monthlyCompleted}
            size={98}
            strokeWidth={8}
            progressColor="#DED5FF"
            backgroundColor="#343A49"
            textColor="#FFFFFF"
            textSize={16}
          />


          <Text style={styles.label} numberOfLines={1} adjustsFontSizeToFit>
            Completed
          </Text>
        </View>

        {/* Cancelled */}
        <View style={styles.item}>
          <CircularProgress
            percentage={dashboardData.metrics.monthlyCancelled}
            size={98}
            strokeWidth={8}
            progressColor="#DED5FF"
            backgroundColor="#343A49"
            textColor="#FFFFFF"
            textSize={16}
          />

          <Text style={styles.label} numberOfLines={1} adjustsFontSizeToFit>
            Cancelled
          </Text>
        </View>

        {/* Cancelled by rider */}
        <View style={styles.item}>
          <CircularProgress
            percentage={dashboardData.metrics.monthlyCancelledByRider}
            size={98}
            strokeWidth={8}
            progressColor="#6E5E5E"
            backgroundColor="#343A49"
            textColor="#FFFFFF"
            textSize={16}
          />

          <Text style={styles.label} numberOfLines={2} adjustsFontSizeToFit>
            Cancelled By Rider
          </Text>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    marginBottom: 40,
  },

  title: {
    color: '#DED8FF',
    fontSize: 21,
    fontWeight: '500',
    letterSpacing: 0.5,
    marginBottom: 28,
  },

  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  item: {
    alignItems: 'center',
    width: '31%',
  },

  label: {
    color: '#DED8FF',
    fontSize: 14,
    marginTop: 16,
    textAlign: 'center',
  },
});

export default RideMonthlyStatus;