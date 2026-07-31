import React from 'react';
import { View, Text, Switch } from 'react-native';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/home/home.styles';
import ForYouStartIcon from '../../../assets/svg/home/ForYouStar.svg';

interface DashboardDataProps {
  dashboardData?: {
    completionMessage: string;
  };
}

export const ImprovementBanner: React.FC<DashboardDataProps> = ({
  dashboardData,
}) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.bannerCard}>
      <ForYouStartIcon width={20} height={20} />
      <Text style={styles.bannerText}>{dashboardData?.completionMessage}</Text>
    </View>
  );
};
