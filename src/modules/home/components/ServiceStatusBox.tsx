import React from 'react';
import { View, Text, Switch } from 'react-native';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/home/home.styles';
import { useTranslation } from 'react-i18next';
import { DriverStatus } from '../services/dto/home.dto';

interface DashboardDataProps {
  status: DriverStatus;
  toggleOnlineStatus: () => void;
}

export const ServiceStatusBox: React.FC<DashboardDataProps> = ({
  status,
  toggleOnlineStatus,
}) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['home']);
  const isOnline = status === 'ONLINE';

  return (
    <View style={styles.statusBox}>
      <View>
        <Text style={styles.serviceStatusTitle}>{t('serviceStatus')}</Text>
        <Text style={styles.serviceStatusSubtitle}>{t('readyForTrips')}</Text>
      </View>
      <Switch
        value={isOnline}
        onValueChange={toggleOnlineStatus}
        trackColor={{ false: colors.neutral, true: colors.primary }}
        thumbColor={colors.textSecondary}
      />
    </View>
  );
};
