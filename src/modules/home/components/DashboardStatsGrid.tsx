import React from 'react';
import { View, Text } from 'react-native';
import { DriverStats } from '../types/home.types';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/home/home.styles';
import Car from '../../../assets/svg/common/ride.svg';
import Clock from '../../../assets/svg/common/schedule.svg';
import Star from '../../../assets/svg/common/star.svg';
import PriceIcon from '../../../assets/svg/payment/price.svg'
import { useTranslation } from 'react-i18next';

interface DashboardStatsGridProps {
  stats: DriverStats;
}

export const DashboardStatsGrid: React.FC<DashboardStatsGridProps> = ({
  stats,
}) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['home']);

  return (
    <>
      {/* Row 1 */}
      <View style={styles.gridRow}>
        <View style={styles.statsCard}>
          <View style={styles.cardHeaderRow}>
            <Car width={18} height={18} color={colors.textSecondary} />
          </View>
          <Text style={styles.cardValue}>{stats.totalTrips}</Text>
          <Text style={styles.cardLabel}>{t('totalTrips')}</Text>
        </View>

        <View style={styles.statsCard}>
          <View style={styles.cardHeaderRow}>
            <PriceIcon width={18} height={18} fill={colors.textSecondary}/>
          </View>
          <Text style={styles.cardValue}>{stats.dailyEarnings}</Text>
          <Text style={styles.cardLabel}>{t('daily')}</Text>
        </View>
      </View>

      {/* Row 2 */}
      <View style={styles.gridRow}>
        <View style={styles.statsCard}>
          <View style={styles.cardHeaderRow}>
            <PriceIcon width={18} height={18} fill={colors.textSecondary}/>
          </View>
          <Text style={styles.cardValue}>{stats.weeklyEarnings}</Text>
          <Text style={styles.cardLabel}>{t('weekly')}</Text>
        </View>

        <View style={styles.statsCard}>
          <View style={styles.cardHeaderRow}>
            <PriceIcon width={18} height={18} fill={colors.textSecondary}/>
          </View>
          <Text style={styles.cardValue}>{stats.monthlyEarnings}</Text>
          <Text style={styles.cardLabel}>{t('monthly')}</Text>
        </View>
      </View>

      {/* Row 3 */}
      <View style={styles.gridRow}>
        <View style={styles.statsCard}>
          <View style={styles.cardHeaderRow}>
            <Star width={18} height={18} color={colors.textSecondary} />
            <Text style={[styles.trendBadge, { color: '#38BDF8' }]}>
              {stats.ratingStatus}
            </Text>
          </View>
          <Text style={styles.cardValue}>{stats.avgRating}</Text>
          <Text style={styles.cardLabel}>{t('avgRating')}</Text>
        </View>

        <View style={styles.statsCard}>
          <View style={styles.cardHeaderRow}>
            <Clock width={18} height={18} color={colors.textSecondary} />
            <Text style={[styles.trendBadge, { color: '#38BDF8' }]}>
              {stats.activeStatus}
            </Text>
          </View>
          <Text style={styles.cardValue}>{stats.todaysActive}</Text>
          <Text style={styles.cardLabel}>{t('todaysActive')}</Text>
        </View>
      </View>
    </>
  );
};
