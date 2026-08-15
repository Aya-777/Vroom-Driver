import { DriverStatus } from "../services/dto/home.dto";

export interface DriverStats {
  totalTrips: string;
  dailyEarnings: string;
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
  dailyCompleted: number;
  dailyCancelled: number;
  dailyCancelledByRider: number;
}

export interface HomeDashboardData {
  driverName: string;
  onlineTime: string;
  status: DriverStatus;
  completionMessage: string;
  stats: DriverStats;
  weeklyTrends: WeeklyTrendPoint[];
  metrics: RideStatusMetrics;
}