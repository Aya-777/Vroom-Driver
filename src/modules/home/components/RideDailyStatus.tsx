import React from 'react';
import { View, Text} from 'react-native';
import CircularProgress from './CircularProgress';
import { HomeDashboardData } from '../types/home.types';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/home/rideDailyStatus.styles';
import { useTranslation } from 'react-i18next';

type Props = {
  dashboardData: HomeDashboardData;
};

const RideDailyStatus = ({ dashboardData }: Props) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['home']);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('RideDailyStatus')}</Text>

      <View style={styles.items}>
        {/* Completed */}
        <View style={styles.item}>
          <CircularProgress
            percentage={dashboardData.metrics.dailyCompleted}
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
            percentage={dashboardData.metrics.dailyCancelled}
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
            percentage={dashboardData.metrics.dailyCancelledByRider}
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

export default RideDailyStatus;
