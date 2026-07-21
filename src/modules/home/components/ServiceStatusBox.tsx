import React from 'react';
import { View, Text, Switch } from 'react-native';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/home.styles';

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

  return (
    <View style={styles.statusBox}>
      <View>
        <Text style={styles.serviceStatusTitle}>Service Status</Text>
        <Text style={styles.serviceStatusSubtitle}>Ready for Trips</Text>
      </View>
      <Switch
        value={dashboardData?.isOnline}
        onValueChange={toggleOnlineStatus}
        trackColor={{ false: '#334155', true: '#38BDF8' }}
        thumbColor={'#FFFFFF'}
      />
    </View>
  );
};
