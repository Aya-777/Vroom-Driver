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
import Info from '../../../assets/svg/common/info.svg';

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
          <View style={styles.statusBox}>
            <View>
              <Text style={styles.serviceStatusTitle}>Service Status</Text>
              <Text style={styles.serviceStatusSubtitle}>Ready for Trips</Text>
            </View>
            <Switch
              value={dashboardData.isOnline}
              onValueChange={toggleOnlineStatus}
              trackColor={{ false: '#334155', true: '#38BDF8' }}
              thumbColor={'#FFFFFF'}
            />
          </View>

          {/* Stats Grid */}
          <DashboardStatsGrid stats={dashboardData.stats} />

          {/* Improvement Banner */}
          <View style={styles.bannerCard}>
            <Info width={20} height={20} fill="#38BDF8" />
            <Text style={styles.bannerText}>
              {dashboardData.completionMessage}
            </Text>
          </View>

          {/* Weekly Trends Section */}
          <View style={styles.sectionCard}>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>WEEKLY TRENDS</Text>
              <Text style={styles.sectionSubtitle}>Last 7 Days</Text>
            </View>
            <View style={styles.chartContainer}>
              {/* Implement your chart view or SVG polyline graph here */}
              <View style={styles.chartAxisRow}>
                {dashboardData.weeklyTrends.map((item, index) => (
                  <Text key={index} style={styles.chartDayText}>
                    {item.day}
                  </Text>
                ))}
              </View>
            </View>
          </View>

          {/* Ride Weekly Status Section */}
          <View style={styles.sectionCard}>
            <Text style={[styles.sectionTitle, { marginBottom: 16 }]}>
              RIDE WEEKLY STATUS
            </Text>
            <View style={styles.metricRow}>
              {/* Circular representation can go here */}
              <Text style={[styles.cardValue, { fontSize: 28 }]}>
                {dashboardData.metrics.weeklyCompletionRate}%
              </Text>
              <View style={styles.metricLegendBox}>
                <View style={styles.legendItem}>
                  <View style={styles.legendDotText}>
                    <View
                      style={[
                        styles.dotIndicator,
                        { backgroundColor: '#38BDF8' },
                      ]}
                    />
                    <Text style={styles.legendText}>Completed</Text>
                  </View>
                  <Text style={styles.legendValue}>
                    {dashboardData.metrics.completedPercentage}%
                  </Text>
                </View>
                <View style={styles.legendItem}>
                  <View style={styles.legendDotText}>
                    <View
                      style={[
                        styles.dotIndicator,
                        { backgroundColor: '#64748B' },
                      ]}
                    />
                    <Text style={styles.legendText}>Cancelled</Text>
                  </View>
                  <Text style={styles.legendValue}>
                    {dashboardData.metrics.cancelledPercentage}%
                  </Text>
                </View>
                <View style={styles.legendItem}>
                  <View style={styles.legendDotText}>
                    <View
                      style={[
                        styles.dotIndicator,
                        { backgroundColor: '#475569' },
                      ]}
                    />
                    <Text style={styles.legendText}>Cancelled By Rider</Text>
                  </View>
                  <Text style={styles.legendValue}>
                    {dashboardData.metrics.cancelledByRiderPercentage}%
                  </Text>
                </View>
              </View>
            </View>
          </View>

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
