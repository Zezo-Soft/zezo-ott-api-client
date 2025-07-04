import { AxiosHeaders, AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import {
  ICreateReel,
  IFeedReel,
  IListReelsQuery,
  IReel,
  IReelActions,
  IUpdateReel,
} from "./reels.types";
import { IPaginatedResponse } from "../../../types";
import qs from "qs";
import { filterNonNull } from "../../../utils";
class ReelsService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Creates a new reel.
   *
   * @param payload The reel data to send to the server.
   * @param headers Optional headers to include in the request.
   * @returns A promise that resolves to the server's response containing the ID of the new reel.
   */
  async create(
    payload: ICreateReel,
    headers?: AxiosHeaders
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "POST",
      url: "/api/v1/reels",
      data: payload,
      headers: headers || {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Updates an existing reel.
   *
   * @param id The ID of the reel to update.
   * @param payload The reel data to update on the server.
   * @param headers Optional headers to include in the request.
   * @returns A promise that resolves to the server's response.
   */
  async update(
    id: string,
    payload: IUpdateReel,
    headers?: AxiosHeaders
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "PUT",
      url: `/api/v1/reels/${id}`,
      data: payload,
      headers: headers || {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Performs an action on multiple reels.
   *
   * @param payload The payload containing the action to perform and the IDs of the reels.
   * The available actions are "active", "inactive", "trash", "pending", and "blocked".
   * @returns A promise that resolves to the server's response containing the count of modified reels.
   */
  async actions(
    payload: IReelActions
  ): Promise<AxiosResponse<{ modifiedCount: number }>> {
    return this.request({
      method: "PATCH",
      url: "/api/v1/reels",
      data: payload,
    });
  }

  /**
   * Deletes reels by their IDs.
   *
   * @param ids An array of reel IDs to delete.
   * @returns A promise that resolves to the server's response containing the count of deleted reels.
   */
  async delete(
    ids: string[]
  ): Promise<AxiosResponse<{ deletedCount: number }>> {
    return this.request({
      method: "DELETE",
      url: "/api/v1/reels",
      data: { ids },
    });
  }

  /**
   * Fetches a list of reels from the server.
   *
   * @param payload Optional query parameters to filter and sort the reels.
   * @returns A promise that resolves to the server's response containing a paginated list of reels.
   */
  async list<T = IReel>(
    payload?: IListReelsQuery
  ): Promise<AxiosResponse<IPaginatedResponse<T>>> {
    return this.request({
      method: "GET",
      url: `/api/v1/reels?${qs.stringify(filterNonNull(payload || {}))}`,
    });
  }

  /**
   * Fetches a list of reels from the server, which can be used as a feed.
   *
   * @param payload Optional query parameters to filter and sort the reels.
   * @returns A promise that resolves to the server's response containing a paginated list of reels.
   */
  async feed<T = IFeedReel>(
    payload?: IListReelsQuery
  ): Promise<AxiosResponse<IPaginatedResponse<T>>> {
    return this.request({
      method: "GET",
      url: `/api/v1/reels/feed?${qs.stringify(filterNonNull(payload || {}))}`,
    });
  }
}

export default ReelsService;
