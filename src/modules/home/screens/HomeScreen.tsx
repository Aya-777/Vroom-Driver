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
import { Text, Switch } from 'react-native';
import { DashboardStatsGrid } from '../components/DashboardStatsGrid';
import History from '../../../assets/svg/common/history.svg';
import Support from '../../../assets/svg/home/ForYouStar.svg';
import { ServiceStatusBox } from '../components/ServiceStatusBox';
import { ImprovementBanner } from '../components/ImprovementBanner';
import { WeeklyTrendsFlowChart } from '../components/WeeklyTrendsFlowChart';
import { RideWeeklyStatus } from '../components/RideWeeklyStatus';

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
          <ServiceStatusBox dashboardData={dashboardData} toggleOnlineStatus={toggleOnlineStatus}/>

          {/* Stats Grid */}
          <DashboardStatsGrid stats={dashboardData.stats} />

          {/* Improvement Banner */}
          <ImprovementBanner dashboardData={dashboardData}/>
          
          {/* Weekly Trends Section */}
          <WeeklyTrendsFlowChart dashboardData={dashboardData}/>

          {/* Ride Weekly Status Section */}
          <RideWeeklyStatus dashboardData={dashboardData}/>

          {/* Ride Monthly Status Section */}
          <View style={styles.monthlySection}>
            <Text style={[styles.sectionTitle, { marginBottom: 12 }]}>
              RIDE MONTHLY STATUS
            </Text>
            <View style={styles.monthlyContainer}>
              <View style={styles.monthlyItem}>
                <Text style={[styles.cardValue, { fontSize: 16 }]}>
                  {dashboardData.metrics.monthlyCompleted}%
                </Text>
                <Text style={styles.monthlyText}>Completed</Text>
              </View>
              <View style={styles.monthlyItem}>
                <Text style={[styles.cardValue, { fontSize: 16 }]}>
                  {dashboardData.metrics.monthlyCancelled}%
                </Text>
                <Text style={styles.monthlyText}>Cancelled</Text>
              </View>
              <View style={styles.monthlyItem}>
                <Text style={[styles.cardValue, { fontSize: 16 }]}>
                  {dashboardData.metrics.monthlyCancelledByRider}%
                </Text>
                <Text style={styles.monthlyText}>Cancelled By Rider</Text>
              </View>
            </View>
          </View>

          {/* Quick Actions (History & Support) */}
          <View style={styles.actionButtonsRow}>
            <View style={styles.actionButton}>
              <History width={18} height={18} color={colors.textPrimary} />
              <Text style={styles.actionButtonText}>History</Text>
            </View>
            <View style={styles.actionButton}>
              <Support width={18} height={18} color={colors.textPrimary} />
              <Text style={styles.actionButtonText}>Support</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </LinearBg>
  );
}
