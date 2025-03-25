import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import { IViewCount, IWatchTimeCount } from "./analytics.types";

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
}

export default AnalyticsService;
