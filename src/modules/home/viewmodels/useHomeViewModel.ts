import { useState, useCallback } from 'react';
import { HomeDashboardData } from '../types/home.types';
import { useTranslation } from 'react-i18next';
import { useMainDrawer } from '../../../navigation/hooks/useMainDrawer';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MainTabsParamList } from '../../../navigation/main/mainTypes';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
type Navigation = DrawerContentComponentProps['navigation'];

export const useHomeViewModel = (navigation: Navigation) => {
  const { t } = useTranslation(['common', 'home']);
  const { openSidebar } = useMainDrawer();

  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  // Mock data representing transformed model-ready data
  const dashboardData: HomeDashboardData = {
    driverName: 'Alex',
    onlineTime: '4h 22m',
    isOnline,
    completionMessage: 'Your completion rate improved by 3% this week!',
    stats: {
      totalTrips: '1,248',
      totalTripsTrend: '+12%',
      dailyEarnings: '$142.50',
      dailyEarningsTrend: '+18%',
      weeklyEarnings: '$984.20',
      monthlyEarnings: '$4,290',
      avgRating: '4.98',
      ratingStatus: 'Excellent',
      todaysActive: '5.4h',
      activeStatus: 'Active',
    },
    weeklyTrends: [
      { day: 'Mon', value: 30 },
      { day: 'Tue', value: 45 },
      { day: 'Wed', value: 38 },
      { day: 'Thu', value: 70 },
      { day: 'Fri', value: 50 },
      { day: 'Sat', value: 40 },
      { day: 'Sun', value: 65 },
    ],
    metrics: {
      weeklyCompletionRate: 95,
      completedPercentage: 85,
      cancelledPercentage: 10,
      cancelledByRiderPercentage: 5,
      monthlyCompleted: 88,
      monthlyCancelled: 9.8,
      monthlyCancelledByRider: 2.2,
    },
  };

  const toggleOnlineStatus = useCallback(() => {
    setIsOnline(prev => !prev);
  }, []);

  const onHistoryPress = () => {
    navigation.navigate('MainTabs', {
      screen: 'ActivityTab',
    });
  };

  return {
    dashboardData,
    loading,
    toggleOnlineStatus,
    openSidebar,
    onHistoryPress,
  };
};

export type HomeViewModelReturn = ReturnType<typeof useHomeViewModel>;
