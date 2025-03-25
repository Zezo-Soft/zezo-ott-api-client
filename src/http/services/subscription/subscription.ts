import { AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import { ISubscriptions } from "./subscription.types";

class SubscriptionService extends BaseService {
  constructor(options: IOptions) {
    super(options);
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
}

export default SubscriptionService;
