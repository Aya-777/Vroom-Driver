
export interface DriverStats {
  totalTrips: string;
  totalTripsTrend: string;
  dailyEarnings: string;
  dailyEarningsTrend: string;
  weeklyEarnings: string;
  monthlyEarnings: string;
  avgRating: string;
  ratingStatus: string;
  todaysActive: string;
  activeStatus: string;
}

export interface WeeklyTrendPoint {
  day: string;
  value: number;
}

export interface RideStatusMetrics {
  weeklyCompletionRate: number;
  completedPercentage: number;
  cancelledPercentage: number;
  cancelledByRiderPercentage: number;
  monthlyCompleted: number;
  monthlyCancelled: number;
  monthlyCancelledByRider: number;
}

export interface HomeDashboardData {
  driverName: string;
  onlineTime: string;
  isOnline: boolean;
  completionMessage: string;
  stats: DriverStats;
  weeklyTrends: WeeklyTrendPoint[];
  metrics: RideStatusMetrics;
}