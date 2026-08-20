import { useState, useCallback } from 'react';
import { HomeDashboardData } from '../types/home.types';
import { useMainDrawer } from '../../../navigation/hooks/useMainDrawer';
import { navigate } from '../../../navigation/rootTypes';
import { homeApi } from '../services/homeApi';
import {
  StatisticsResponseDTO,
  TodayStatsResponse,
  UpdateDriverStatusRequest,
} from '../services/dto/home.dto';
import { useCurrentUser } from '../../../core/store/userStore';
import { useEffect } from 'react';
import { refreshProfile } from '../../profile/utils/ProfileUtils';
import { useProfileStore } from '../../profile/store/useProfileStore';
import { useDriverStore } from '../../../core/store/useDriverStore';

export const useHomeViewModel = () => {
  const { openSidebar } = useMainDrawer();
  const [todayStats, setTodayStats] = useState<TodayStatsResponse | null>(null);
  const [statistics, setStatistics] = useState<StatisticsResponseDTO | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const user = useCurrentUser();
  const { userProfile } = useProfileStore();
  const setDriverStatus = useDriverStore(state => state.setStatus);

  const fetchTodayStats = useCallback(async () => {
    try {
      const stats = await homeApi.getTodayStats();

      setTodayStats(stats);
      setDriverStatus(stats.data.driver_status);
    } catch (error) {
      console.log('Failed to fetch today stats', error);
    }
  }, [setDriverStatus]);

  useEffect(() => {
    fetchTodayStats();
  }, [fetchTodayStats]);

  const fetchStatistics = useCallback(async () => {
    try {
      const stats = await homeApi.getStatistics();
      setStatistics(stats);
    } catch (error) {
      console.log('Failed to fetch statistics', error);
    }
  }, []);

  useEffect(() => {
    fetchStatistics();
  }, [fetchStatistics]);

  useEffect(() => {
    refreshProfile().catch(error => {
      console.log('Failed to fetch profile', error);
    });
  }, [setDriverStatus]);

  const formatDuration = (minutes: number) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;

    if (h === 0) return `${m}m`;
    return `${h}h ${m}m`;
  };

  const onlineTime = todayStats
    ? formatDuration(todayStats.data.duration_minutes)
    : '0m';

  const LinkRatingToString = (rating?: number) => {
    if (!rating) {
      return '';
    }
    if (rating > 4) {
      return 'Excellent';
    } else if (rating > 3) {
      return 'Good';
    } else {
      return 'Bad';
    }
  };
  const LinkCompletionMessageToRating = (rating?: number) => {
    if (!rating) {
      return "You're online again! Good job Captain.";
    }
    if (rating > 4) {
      return 'Rating is SUPER, Keep it up!';
    } else if (rating > 3) {
      return 'Most things are best when average, not rating though...';
    } else {
      return "Maybe it's time to work harder inn'it?";
    }
  };

  const dashboardData: HomeDashboardData = {
    driverName: user?.first_name || 'Captain',
    onlineTime: onlineTime,
    status: todayStats?.data.driver_status || 'OFFLINE',
    completionMessage: LinkCompletionMessageToRating(
      user?.rating ?? userProfile.ratingAvg,
    ),
    stats: {
      totalTrips: statistics?.data.total_completed_trips.toString() ?? '0',
      dailyEarnings: statistics?.data.today_income.toString() ?? '0',
      weeklyEarnings: statistics?.data.weekly_income.toString() ?? '0',
      monthlyEarnings: statistics?.data.monthly_income.toString() ?? '0',
      avgRating: user?.rating?.toString() ?? '0',
      ratingStatus: LinkRatingToString(user?.rating ?? userProfile.ratingAvg),
      todaysActive: onlineTime,
      activeStatus:
        todayStats?.data.driver_status === 'ONLINE' || 'ON_TRIP'
          ? 'Active'
          : 'Inactive',
    },
    weeklyTrends: [
      { day: 'Mon', value: statistics?.data.trips_this_week.Monday ?? 0 },
      { day: 'Tue', value: statistics?.data.trips_this_week.Tuesday ?? 0 },
      { day: 'Wed', value: statistics?.data.trips_this_week.Wednesday ?? 0 },
      { day: 'Thu', value: statistics?.data.trips_this_week.Thursday ?? 0 },
      { day: 'Fri', value: statistics?.data.trips_this_week.Friday ?? 0 },
      { day: 'Sat', value: statistics?.data.trips_this_week.Saturday ?? 0 },
      { day: 'Sun', value: statistics?.data.trips_this_week.Sunday ?? 0 },
    ],
    metrics: {
      weeklyCompletionRate:
        statistics?.data.completion_stats.this_week.completed.count ?? 0,
      completedPercentage:
        statistics?.data.completion_stats.this_week.completed.percentage ?? 0,
      cancelledPercentage:
        statistics?.data.completion_stats.this_week.cancelled_by_driver
          .percentage ?? 0,
      cancelledByRiderPercentage:
        statistics?.data.completion_stats.this_week.cancelled_by_rider
          .percentage ?? 0,

      dailyCompleted:
        statistics?.data.completion_stats.today.completed.percentage ?? 0,
      dailyCancelled:
        statistics?.data.completion_stats.today.cancelled_by_driver
          .percentage ?? 0,
      dailyCancelledByRider:
        statistics?.data.completion_stats.today.cancelled_by_rider.percentage ??
        0,
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
      const request: UpdateDriverStatusRequest = {
        status: nextStatus,
      };

      setTodayStats(prev =>
        prev
          ? {
              ...prev,
              data: {
                ...prev.data,
                driver_status: nextStatus,
              },
            }
          : prev,
      );

      const response = await homeApi.updateDriverStatus(request);
      const confirmedStatus = response?.data?.driver_status ?? nextStatus;
      setTodayStats(prev => prev ? { ...prev, data: { ...prev.data, driver_status: confirmedStatus } } : prev);
      setDriverStatus(confirmedStatus);
    } catch (error: any) {
      console.log(
        'Failed to update driver status:',
        error?.response?.data ?? error,
      );
    } finally {
      setLoading(false);
    }
  }, [todayStats, loading, setDriverStatus]);

  const onHistoryPress = () => {
    navigate('Main', {
      screen: 'MainTabs',
      params: {
        screen: 'ActivityTab',
        params: { screen: 'ActivitiesMain' },
      },
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





