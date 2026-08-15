export type DriverStatus = 'ONLINE' | 'OFFLINE' | 'ONTRIP';

export interface UpdateDriverStatusRequest {
  status: DriverStatus;
}

export interface UpdateDriverStatusResponse {
  'status code': number;
  message: string;
  data: {
    driver_status: DriverStatus;
  };
}

export interface TodayStatsResponse {
  data: {
    date: string;
    duration_minutes: number;
    driver_status: 'ONLINE' | 'OFFLINE' | 'ONTRIP';
    last_seen: string;
  }
}

export interface StatisticsResponseDTO {
  "status code": number,
  message: string,
  data: {
    total_completed_trips: number,
    trips_this_week: {
      Monday: number,
      Tuesday: number,
      Wednesday: number,
      Thursday: number,
      Friday: number,
      Saturday: number,
      Sunday: number
    },
    completion_stats: {
      today: {
        completed: {
          count:number,
          percentage: number
        },
        cancelled_by_driver: {
          count:number,
          percentage: number
        },
        cancelled_by_rider: {
          count:number,
          percentage: number
        }
      },
      this_week: {
        completed: {
          count: number,
          percentage: number
        },
        cancelled_by_driver: {
          count:number,
          percentage: number
        },
        cancelled_by_rider: {
          count: number,
          percentage: number
        }
      }
    },
    today_income: number,
    weekly_income: number,
    monthly_income: number
  }
}