import { ActivityFilterTab } from '../types/activities.types';
import { TerminalTripStatus } from '../services/dto/tripHistory.dto';

export const ACTIVITY_TABS: ActivityFilterTab[] = [
  'All',
  'Completed',
  'Cancelled',
  'Rejected',
];

export const STATUS_PARAM_BY_TAB: Record<
  ActivityFilterTab,
  string | undefined
> = {
  All: undefined,
  Completed: 'COMPLETED',
  Cancelled: 'CANCELLED_BY_DRIVER',
  Rejected: 'CANCELLED_BY_RIDER',
};

export const toDisplayStatus = (
  rawStatus: TerminalTripStatus,
): 'Completed' | 'Cancelled' | 'Rejected' => {
  if (rawStatus === 'COMPLETED') return 'Completed';
  if (rawStatus === 'CANCELLED_BY_DRIVER') return 'Cancelled';
  return 'Rejected'; // CANCELLED_BY_RIDER
};
