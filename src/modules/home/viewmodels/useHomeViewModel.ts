import { useState, useCallback } from 'react';
import { HomeDashboardData } from '../types/home.types';
import { useMainDrawer } from '../../../navigation/hooks/useMainDrawer';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { homeApi } from '../services/homeApi';
import { DriverStatus, TodayStatsResponse, UpdateDriverStatusRequest } from '../services/dto/home.dto';
import { useCurrentUser } from '../../../core/store/userStore';
import { useEffect } from 'react';

type Navigation = DrawerContentComponentProps['navigation'];

export const useHomeViewModel = (navigation: Navigation) => {
  const { openSidebar } = useMainDrawer();

  const [todayStats, setTodayStats] = useState<TodayStatsResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const user = useCurrentUser();

const fetchTodayStats = useCallback(async () => {
  try {
    const stats = await homeApi.getTodayStats();

    setTodayStats(stats);
  } catch (error) {
    console.log('Failed to fetch today stats', error);
  }
}, []);

  useEffect(() => {
    fetchTodayStats();
  }, [fetchTodayStats]);

  const formatDuration = (minutes: number) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;

    if (h === 0) return `${m}m`;
    return `${h}h ${m}m`;
  };

  const onlineTime = todayStats ? formatDuration(todayStats.data.duration_minutes) : '0m';

  const dashboardData: HomeDashboardData = {
    driverName: user?.first_name || 'Captain',
    onlineTime: onlineTime,
    status: todayStats?.data.driver_status || 'OFFLINE', 
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
      todaysActive: onlineTime,
      activeStatus: todayStats?.data.driver_status === 'ONLINE' || 'ON_TRIP' ? 'Active' : 'Inactive',
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

  const toggleOnlineStatus = useCallback(async () => {
    if (loading) {
      return;
    }
    const currentStatus = todayStats?.data.driver_status ?? 'OFFLINE';
    const nextStatus = currentStatus === 'ONLINE' ? 'OFFLINE' : 'ONLINE';

    try {
      setLoading(true);
      const request : UpdateDriverStatusRequest = {
        status: nextStatus,
      }
            
      setTodayStats(prev =>
        prev
        ? {
          ...prev,
          data: {
            ...prev.data,
            driver_status: nextStatus,
          },
        }
        : prev
      );

      await homeApi.updateDriverStatus(request);
      
    } catch (error: any) {
      console.log(
        'Failed to update driver todayStats:',
        error?.response?.data ?? error,
      );
    } finally {
      setLoading(false);
    }
}, [todayStats, loading, fetchTodayStats]);

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