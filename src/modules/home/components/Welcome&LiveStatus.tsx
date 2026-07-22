import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/home.styles';
import { useTranslation } from 'react-i18next';

interface DashboardInfo {
  driverName?: string;
  onlineTime?: string;
}

interface DashboardDataProps {
  dashboardData?: DashboardInfo;
}

export const WelcomeAndLiveStatus: React.FC<DashboardDataProps> = ({
  dashboardData,
}) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['home']);

  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.greetingText}>
        {t('goodEvening')} {dashboardData?.driverName}
      </Text>
      <View style={styles.statusIndicatorRow}>
        <View style={styles.onlineDot} />
        <Text style={styles.statusText}>
          {dashboardData?.onlineTime? t('online') : t('offline')} {dashboardData?.onlineTime}
        </Text>
      </View>
    </View>
  );
};
