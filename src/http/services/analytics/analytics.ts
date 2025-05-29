import { AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import {
  IReadContentReportAnalyticsResponse,
  IReadLatestContentAnalyticsQueryPayload,
  IReadLatestContentAnalyticsResponse,
  IReadRevenueAnalyticsQueryPayload,
  IReadRevenueAnalyticsResponse,
  IReadUsersAnalyticsQueryPayload,
  IReadUsersAnalyticsResponse,
  IViewCount,
  IWatchTimeCount,
} from "./analytics.types";
import qs from "qs";

class AnalyticsService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Increments the view count for a given content or episode.
   *
   * @param payload the content id, episode id, and other metadata
   * @returns response from the server
   */
  async countView(payload: IViewCount) {
    return this.request({
      method: "POST",
      url: "/views",
      data: payload,
    });
  }

  /**
   * Logs the watch time for a given content or episode.
   *
   * @param payload the content id, episode id, watch time, and other metadata
   * @returns response from the server
   */
  async countWatchTime(payload: IWatchTimeCount) {
    return this.request({
      method: "POST",
      url: "/watch-time",
      data: payload,
    });
  }

  /**
   * Reads the latest content analytics.
   *
   * @param query the query containing the filter options
   * @returns response from the server containing the latest content analytics
   */
  async readLatestContentAnalytics(
    query?: IReadLatestContentAnalyticsQueryPayload
  ): Promise<AxiosResponse<IReadLatestContentAnalyticsResponse>> {
    if (query) {
      return this.request({
        method: "GET",
        url: `/api/v1/analytics/latest-content?${qs.stringify(query)}`,
      });
    }
    return this.request({
      method: "GET",
      url: "/api/v1/analytics/latest-content",
    });
  }

  /**
   * Reads the users analytics.
   *
   * @param query the query containing the filter options
   * @returns response from the server containing the users analytics
   */
  async readUsersAnalytics(
    query?: IReadUsersAnalyticsQueryPayload
  ): Promise<AxiosResponse<IReadUsersAnalyticsResponse>> {
    if (query) {
      return this.request({
        method: "GET",
        url: `/api/v1/analytics/users?${qs.stringify(query)}`,
      });
    }
    return this.request({
      method: "GET",
      url: "/api/v1/analytics/users",
    });
  }

  /**
   * Reads the content report analytics.
   *
   * @returns response from the server containing the content report analytics
   */
  async readContentReportAnalytics(): Promise<
    AxiosResponse<IReadContentReportAnalyticsResponse>
  > {
    return this.request({
      method: "GET",
      url: "/api/v1/analytics/content-report",
    });
  }

  /**
   * Reads the revenue analytics.
   *
   * @param query Optional query parameters to filter the revenue analytics.
   * @returns A promise that resolves to the server's response containing the revenue analytics.
   */
  async readRevenueAnalytics(
    query?: IReadRevenueAnalyticsQueryPayload
  ): Promise<AxiosResponse<IReadRevenueAnalyticsResponse>> {
    if (query) {
      return this.request({
        method: "GET",
        url: `/api/v1/analytics/revenue-report?${qs.stringify(query)}`,
      });
    }
    return this.request({
      method: "GET",
      url: "/api/v1/analytics/revenue-report",
    });
  }
}

export default AnalyticsService;
