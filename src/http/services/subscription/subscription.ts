import { AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import {
  ISubscriptionQuery,
  ISubscriptions,
  ISubscriptionUpdate,
} from "./subscription.types";
import qs from "qs";
import { filterNonNull } from "../../../utils";

class SubscriptionService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Initializes a new subscription on the server.
   *
   * @returns A promise that resolves to the server's response containing the ID of the new subscription.
   */
  async initNew(): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "POST",
      url: "/api/v1/subscriptions",
    });
  }

  /**
   * Deletes a subscription by its ID.
   *
   * @param id The ID of the subscription to delete.
   * @returns A promise that resolves to the server's response containing the ID of the deleted subscription.
   */
  async delete(id: string): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "DELETE",
      url: `/api/v1/subscriptions/${id}`,
    });
  }

  /**
   * Updates an existing subscription on the server.
   *
   * @param id The ID of the subscription to update.
   * @param payload The subscription data to update on the server.
   * @returns A promise that resolves to the server's response containing the ID of the updated subscription.
   */
  async update(
    id: string,
    payload: ISubscriptionUpdate
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "PUT",
      url: `/api/v1/subscriptions/${id}`,
      data: payload,
    });
  }

  /**
   * Fetches the list of subscriptions.
   *
   * @returns A promise that resolves to the server's response containing the list of subscriptions.
   */
  async get(): Promise<AxiosResponse<ISubscriptions>> {
    return this.request({
      method: "GET",
      url: "/api/subscriptions",
    });
  }

  /**
   * Retrieves a list of subscriptions for management.
   *
   * @param query Optional query parameters to filter the results.
   * The available query parameters are:
   * - `page`: The page number to retrieve.
   * - `limit`: The number of items to retrieve per page.
   * - `order`: The order to sort the results by. The available values are `asc` and `desc`.
   * - `fields`: An array of column names to include in the results.
   * - `q`: A search query to filter the results by.
   * - `filters`: An object of filter values to filter the results by.
   * - `populate`: An array of populate options to include associated data in the results.
   * @returns A promise that resolves to the server's response containing the list of subscriptions for management.
   */
  async getManage(
    query?: ISubscriptionQuery
  ): Promise<AxiosResponse<ISubscriptions>> {
    return this.request({
      method: "GET",
      url:
        "/api/v1/subscriptions/manage" +
        (query ? `?${qs.stringify(filterNonNull(query))}` : ""),
    });
  }
}

export default SubscriptionService;
