import { useCallback, useEffect, useRef, useState } from 'react';
import { useMainDrawer } from '../../../navigation/hooks/useMainDrawer';
import { getTripHistory, getTripHistoryByUrl } from '../services/historyApi';
import { TripHistoryItemDTO } from '../services/dto/tripHistory.dto';
import { Activity, ActivityFilterTab } from '../types/activities.types';
import {
  ACTIVITY_TABS,
  STATUS_PARAM_BY_TAB,
  toDisplayStatus,
} from '../constants/activitiesData';

const mapTripToActivity = (trip: TripHistoryItemDTO): Activity => {
  const pickup = trip.stops.find(s => s.stop_type === 'PICKUP');
  const dropoff = trip.stops.find(s => s.stop_type === 'DROP_OFF');
  const dateSource = trip.ended_at ?? trip.cancelled_at ?? trip.requested_at;

  return {
    id: String(trip.id),
    rawStatus: trip.status,
    displayStatus: toDisplayStatus(trip.status),
    pickupLocation: pickup?.address ?? '',
    dropoffLocation: dropoff?.address ?? '',
    date: new Date(dateSource).toLocaleString(),
    price: trip.actual_price ? Number(trip.actual_price) : null,
    currency: 'SP',
    vehicleType: trip.vehicle ? `Vehicle #${trip.vehicle}` : '-',
    distance: trip.actual_distance,
    duration: trip.actual_duration,
    cancellationReason: trip.cancellation_reason,
    riderId: trip.rider,
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
