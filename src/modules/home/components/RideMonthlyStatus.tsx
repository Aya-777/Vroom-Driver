import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CircularProgress from './CircularProgress';
import { HomeDashboardData } from '../types/home.types';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/home/rideMonthlyStatus.styles';
import { useTranslation } from 'react-i18next';

type Props = {
  dashboardData: HomeDashboardData;
}

const RideMonthlyStatus = ({dashboardData} : Props) => {
  
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['home']);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {t('rideMonthlyStatus')}
      </Text>

      <View style={styles.items}>

        {/* Completed */}
        <View style={styles.item}>
          <CircularProgress
            percentage={dashboardData.metrics.monthlyCompleted}
            size={98}
            strokeWidth={8}
            progressColor={colors.primary}
            backgroundColor={colors.neutral}
            textColor={colors.textPrimary}
            textSize={16}
          />


          <Text style={styles.label} numberOfLines={1} adjustsFontSizeToFit>
            {t('completed')}
          </Text>
        </View>

        {/* Cancelled */}
        <View style={styles.item}>
          <CircularProgress
            percentage={dashboardData.metrics.monthlyCancelled}
            size={98}
            strokeWidth={8}
            progressColor={colors.primary}
            backgroundColor={colors.neutral}
            textColor={colors.textPrimary}
            textSize={16}
          />

          <Text style={styles.label} numberOfLines={1} adjustsFontSizeToFit>
            {t('cancelled')}
          </Text>
        </View>

        {/* Cancelled by rider */}
        <View style={styles.item}>
          <CircularProgress
            percentage={dashboardData.metrics.monthlyCancelledByRider}
            size={98}
            strokeWidth={8}
            progressColor="#6E5E5E"
            backgroundColor={colors.neutral}
            textColor={colors.textPrimary}
            textSize={16}
          />

          <Text style={styles.label} numberOfLines={2} adjustsFontSizeToFit>
            {t('cancelledByRider')}
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