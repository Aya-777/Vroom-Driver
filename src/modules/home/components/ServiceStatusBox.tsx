import React from 'react';
import { View, Text, Switch } from 'react-native';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/home/home.styles';
import { useTranslation } from 'react-i18next';

interface DashboardDataProps {
  dashboardData?: {
    isOnline: boolean;
  };
  toggleOnlineStatus: () => void;
}

export const ServiceStatusBox: React.FC<DashboardDataProps> = ({
  dashboardData,
  toggleOnlineStatus,
}) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['home']);

  return (
    <View style={styles.statusBox}>
      <View>
        <Text style={styles.serviceStatusTitle}>{t('serviceStatus')}</Text>
        <Text style={styles.serviceStatusSubtitle}>{t('readyForTrips')}</Text>
      </View>
      <Switch
        value={dashboardData?.isOnline}
        onValueChange={toggleOnlineStatus}
        trackColor={{ false: colors.textMuted, true: colors.primary }}
        thumbColor={colors.textSecondary}
      />
    </View>
  );
};
