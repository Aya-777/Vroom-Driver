import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { ScrollView, View } from 'react-native';

import LinearBg from '../../../shared/components/LinearBg';

import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/home/home.styles';
import { useHomeViewModel } from '../viewmodels/useHomeViewModel';

import Header from '../components/HomeHeader';
import { WelcomeAndLiveStatus } from '../components/Welcome&LiveStatus';
import { navigate } from '../../../navigation/rootTypes';
import { DashboardStatsGrid } from '../components/DashboardStatsGrid';
import { ServiceStatusBox } from '../components/ServiceStatusBox';
import { ImprovementBanner } from '../components/ImprovementBanner';
import WeeklyTrendsFlowChart from '../components/WeeklyTrendsFlowChart';
import RideWeeklyStatus from '../components/RideWeeklyStatus';
import RideDailyStatus from '../components/RideDailyStatus';
import { ActionButtons } from '../components/ActionButtons';

export default function HomeScreen() {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { dashboardData, toggleOnlineStatus, refreshHomeData, openSidebar, onHistoryPress } =
    useHomeViewModel();

  useFocusEffect(
    React.useCallback(() => {
      refreshHomeData();
    }, [refreshHomeData]),
  );

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
            status={dashboardData.status}
            toggleOnlineStatus={toggleOnlineStatus}
          />

          {/* Stats Grid */}
          <DashboardStatsGrid stats={dashboardData.stats} />

          {/* Improvement Banner */}
          <ImprovementBanner dashboardData={dashboardData} />

          {/* Weekly Trends Section */}
          <WeeklyTrendsFlowChart data={dashboardData.weeklyTrends} />

          {/* Ride Weekly Status Section */}
          <RideWeeklyStatus dashboardData={dashboardData} />

          {/* Ride Monthly Status Section */}
          <RideDailyStatus dashboardData={dashboardData} />

         </ScrollView>
      </View>
    </LinearBg>
  );
}


