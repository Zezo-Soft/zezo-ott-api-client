import { AxiosHeaders, AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import { IPaginatedResponse } from "../../../types";
import qs from "qs";
import { filterNonNull } from "../../../utils";
import {
  IActionCast,
  ICast,
  ICastCreate,
  ICastQuery,
  IManageCast,
  IUpdateCast,
} from "./cast.types";

class CastService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Creates a new cast entry.
   *
   * @param payload The cast data to send to the server.
   * @param headers Optional headers to include in the request.
   * @returns A promise that resolves to the server's response containing the ID of the new cast entry.
   */
  async create(
    payload: ICastCreate,
    headers?: AxiosHeaders
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "POST",
      url: "/api/v1/cast",
      data: payload,
      headers: headers || {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Updates an existing cast entry.
   *
   * @param id The ID of the cast entry to update.
   * @param payload The cast data to update on the server.
   * @param headers Optional headers to include in the request.
   * @returns A promise that resolves to the server's response containing the ID of the updated cast entry.
   */
  async update(
    id: string,
    payload: IUpdateCast,
    headers?: AxiosHeaders
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "PUT",
      url: `/api/v1/cast/${id}`,
      data: payload,
      headers: headers || {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Deletes cast entries by their IDs.
   *
   * @param ids An array of cast IDs to delete.
   * @returns A promise that resolves to the server's response containing the count of deleted cast entries.
   */
  async delete(
    ids: string[]
  ): Promise<AxiosResponse<{ deletedCount: number }>> {
    return this.request({
      method: "DELETE",
      url: "/api/v1/cast",
      data: { ids },
    });
  }

  /**
   * Performs an action on multiple cast entries.
   *
   * @param payload The payload containing the action to perform and the IDs of the cast entries.
   * The available actions can vary based on the implementation.
   * @returns A promise that resolves to the server's response containing the count of updated cast entries.
   */
  async actions(
    payload: IActionCast
  ): Promise<AxiosResponse<{ updatedCount: number }>> {
    return this.request({
      method: "PATCH",
      url: "/api/v1/cast",
      data: payload,
    });
  }

  /**
   * Retrieves a list of cast entries for management.
   *
   * @param query Optional query string for filtering (e.g., "?name=John")
   * @returns A promise that resolves to the server's response containing a paginated list of cast entries.
   */
  async getManage(
    query?: ICastQuery
  ): Promise<AxiosResponse<IPaginatedResponse<IManageCast>>> {
    if (query) {
      return this.request({
        method: "GET",
        url: `/api/v1/cast/manage?${qs.stringify(filterNonNull(query))}`,
      });
    }
    return this.request({
      method: "GET",
      url: "/api/v1/cast/manage",
    });
  }

  /**
   * Retrieves a list of cast entries.
   *
   * @param query Optional query string for filtering (e.g., "?name=John")
   * @returns A promise that resolves to the server's response containing a paginated list of cast entries.
   */
  async list(
    query?: ICastQuery
  ): Promise<AxiosResponse<IPaginatedResponse<ICast>>> {
    if (query) {
      return this.request({
        method: "GET",
        url: `/api/v1/cast?${qs.stringify(filterNonNull(query))}`,
      });
    }
    return this.request({
      method: "GET",
      url: "/api/v1/cast",
    });
  }
}

export default CastService;
