/**
 * @author Naresh Dhamu
 * @lastModified Sat 28 Jun 2025 at 05:30 PM
 */
import { AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import { IHistory, IHistoryUpdate } from "./history.types";

class HistoryService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Fetches the history data from the server.
   *
   * @param query Optional query string for filtering (e.g., "?user=123")
   * @returns AxiosResponse with IHistory data
   */
  async get(query?: string): Promise<AxiosResponse<IHistory>> {
    return this.request({
      method: "GET",
      url: query ? `api/history${query}` : "api/history",
    });
  }

  /**
   * Updates a history entry on the server.
   *
   * @param payload The history update payload
   * @returns AxiosResponse with updated IHistory data
   */
  async update(payload: IHistoryUpdate): Promise<AxiosResponse<IHistory>> {
    return this.request({
      method: "PUT",
      url: "api/history",
      data: payload,
    });
  }
}

export default HistoryService;
