export interface IViewCount {
  content_id: string;
  episode_id: string | null;
  /**
   * @deprecated
   */
  ip_address?: string | null;
  platform: "web" | null;
  /**
   * @deprecated
   */
  city?: string | null;
  /**
   * @deprecated
   */
  location?: string | null;
  /**
   * @deprecated
   */
  region?: string | null;
  /**
   * @deprecated
   */
  timezone?: string | null;
}

export interface IWatchTimeCount {
  content_id: string;
  episode_id: string | null;
  time: number;
  platform: "web";
}

export type TTimePeriod =
  | "today"
  | "last_24_hours"
  | "last_3_days"
  | "last_7_days"
  | "last_14_days"
  | "last_30_days"
  | "last_60_days"
  | "this_week"
  | "this_month"
  | "this_year"
  | "all_time"
  | "custom";

export interface IReadContentAnalyticsQueryPayload {
  timePeriod?: TTimePeriod;
  startDate?: string;
  endDate?: string;
  content_id?: string;
}

export interface IReadLatestContentAnalyticsResponse {
  views: {
    _id: string;
    count: number;
  }[];
  watchTime: {
    _id: string;
    time: number;
  }[];
}

export interface IReadUsersAnalyticsQueryPayload {
  timePeriod?: TTimePeriod;
  startDate?: string;
  endDate?: string;
}

export interface IReadUsersAnalyticsResponse {
  totalUsers: number;
  users: { _id: string; count: number }[];
  subscriber: number;
}

export interface IReadContentReportAnalyticsResponse {
  total: number;
  totalPublic: number;
  totalPrivate: number;
}

export interface IReadRevenueAnalyticsQueryPayload {
  timePeriod?: TTimePeriod;
  startDate?: string;
  endDate?: string;
  revenue_type?: "tvod" | "svod" | "other";
  tvodId?: string;
  tvodType?: "rent" | "buy" | "other";
  status?: "created" | "paid" | "failed" | "attempted";
}

export interface IReadRevenueAnalyticsResponse {
  razorpay: number;
  UPI: number;
  cashfree: number;
  subpaisa: number;
  payumoney: number;
  stripe: number;
  ccavenue: number;
  phonepe: number;
}

export interface IGetTvodAnalyticsQueryPayload {
  timePeriod?: TTimePeriod;
  id?: string;
  from?: string;
  to?: string;
}

export interface IGetTvodAnalyticsResponse {
  total_bought: number;
  total_rented: number;
  date: string;
}
