import { useCallback, useEffect, useRef, useState } from 'react';
import { useMainDrawer } from '../../../navigation/hooks/useMainDrawer';
import { getTripHistory, getTripHistoryByUrl } from '../services/historyApi';
import { TripHistoryItemDTO } from '../services/dto/tripHistory.dto';
import { Activity, ActivityFilterTab } from '../types/activities.types';
import {
  ACTIVITY_TABS,
  STATUS_PARAM_BY_TAB,
  SCHEDULED_PARAM_BY_TAB,
  toDisplayStatus,
} from '../constants/activitiesData';

const mapTripToActivity = (trip: TripHistoryItemDTO): Activity => {
  const pickup = trip.stops.find(s => s.stop_type === 'PICKUP');
  const dropoff = trip.stops.find(s => s.stop_type === 'DROP_OFF');
  const dateSource = trip.ended_at ?? trip.cancelled_at ?? trip.scheduled_at ?? trip.requested_at;

  return {
id: String(trip.id),
    rawStatus: trip.status,
    displayStatus: toDisplayStatus(trip.status, trip.is_scheduled),
    pickupLocation: pickup?.address ?? '',
    dropoffLocation: dropoff?.address ?? '',
    date: new Date(dateSource).toLocaleString(),
    price: trip.price ? Number(trip.price) : null,
    currency: 'SP',
    riderName: trip.rider_name ?? 'None',
    rideType: trip.vehicle_type ?? '-',
    distance: trip.distance,
    duration: trip.duration,
    cancellationReason: trip.cancellation_reason,
    stops: trip.stops,
    isScheduled: trip.is_scheduled,
    scheduledAt: trip.scheduled_at,
  };
};

export const useActivitiesViewModel = () => {
  const { openSidebar } = useMainDrawer();

  const [selectedStatus, setSelectedStatus] =
    useState<ActivityFilterTab>('All');
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const nextUrlRef = useRef<string | null>(null);

  const loadInitial = useCallback(async (tab: ActivityFilterTab) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getTripHistory({
        status: STATUS_PARAM_BY_TAB[tab],
        scheduled: SCHEDULED_PARAM_BY_TAB[tab],
      });
      setActivities(response.results.map(mapTripToActivity));
      nextUrlRef.current = response.next;
    } catch (e) {
      setError(
        'Failed to load activities' +
          (e instanceof Error ? `: ${e.message}` : ''),
      );
      setActivities([]);
      nextUrlRef.current = null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadInitial(selectedStatus);
  }, [selectedStatus, loadInitial]);

  const refresh = useCallback(() => loadInitial(selectedStatus), [loadInitial, selectedStatus]);

  const loadMore = useCallback(async () => {
    if (!nextUrlRef.current || isLoadingMore || isLoading) return;

    setIsLoadingMore(true);
    try {
      const response = await getTripHistoryByUrl(nextUrlRef.current);
      setActivities(prev => [
        ...prev,
        ...response.results.map(mapTripToActivity),
      ]);
      nextUrlRef.current = response.next;
    } catch (e) {
      setError(
        'Failed to load more activities' +
          (e instanceof Error ? `: ${e.message}` : ''),
      );
    } finally {
      setIsLoadingMore(false);
    }
  }, [isLoadingMore, isLoading]);

  return {
    refresh,
    statuses: ACTIVITY_TABS,
    selectedStatus,
    setSelectedStatus,
    activities,
    isLoading,
    isLoadingMore,
    error,
    loadMore,
    openSidebar,
  };
};




