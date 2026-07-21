import React from 'react';
import { ScrollView, View } from 'react-native';

import LinearBg from '../../../shared/components/LinearBg';

import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/home.styles';
import { useHomeViewModel } from '../viewmodels/useHomeViewModel';

import Header from '../components/HomeHeader';
import { WelcomeAndLiveStatus } from '../components/Welcome&LiveStatus';
import { useHomeActions } from '../hooks/useHomeActions';
import { useTranslation } from 'react-i18next';
import { navigate } from '../../../navigation/rootTypes';
import { DashboardStatsGrid } from '../components/DashboardStatsGrid';
import { ServiceStatusBox } from '../components/ServiceStatusBox';
import { ImprovementBanner } from '../components/ImprovementBanner';
import { WeeklyTrendsFlowChart } from '../components/WeeklyTrendsFlowChart';
import { RideWeeklyStatus } from '../components/RideWeeklyStatus';
import { RideMonthlyStatus } from '../components/RideMonthlyStatus';
import { ActionButtons } from '../components/ActionButtons';

export default function HomeScreen() {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['home']);
  const { dashboardData, toggleOnlineStatus } = useHomeViewModel();

  const { openSidebar } = useHomeViewModel();

  return (
    <LinearBg
      colors={[colors.backgroundSoft, colors.background]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradientContainer}
    >
      <View style={styles.container}>
        {/* Global Shared Header */}
        <Header
          onMenuPress={openSidebar}
          onNotificationPress={() => navigate('Notifications')}
        />

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Welcome & Live Status */}
          <WelcomeAndLiveStatus dashboardData={dashboardData} />

          {/* Service Status Toggle Box */}
          <ServiceStatusBox
            dashboardData={dashboardData}
            toggleOnlineStatus={toggleOnlineStatus}
          />

          {/* Stats Grid */}
          <DashboardStatsGrid stats={dashboardData.stats} />

          {/* Improvement Banner */}
          <ImprovementBanner dashboardData={dashboardData} />

          {/* Weekly Trends Section */}
          <WeeklyTrendsFlowChart dashboardData={dashboardData} />

          {/* Ride Weekly Status Section */}
          <RideWeeklyStatus dashboardData={dashboardData} />

          {/* Ride Monthly Status Section */}
          <RideMonthlyStatus dashboardData={dashboardData} />

          {/* Quick Actions (History & Support) */}
          <ActionButtons onHistoryPress={() => {}} onSupportPress={() => {}} />
        </ScrollView>
      </View>
    </LinearBg>
  );
}
