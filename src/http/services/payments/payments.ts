import { AxiosResponse } from "axios";
import { IPaginatedResponse } from "../../../types";
import { filterNonNull } from "../../../utils";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import {
  ICheckout,
  IPayment,
  IPaymentsQuery,
  IPlatform,
} from "./payments.types";
import qs from "qs";

class PaymentService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Lists payments.
   *
   * @param query The query to filter the results by.
   * @returns A promise that resolves to the server's response containing the list of payments.
   */
  async list<T = IPayment>(
    query?: IPaymentsQuery
  ): Promise<AxiosResponse<IPaginatedResponse<T>>> {
    return this.request({
      method: "GET",
      url: `/api/v1/payments?${qs.stringify(filterNonNull(query || {}))}`,
    });
  }

  /**
   * Initializes a payment
   *
   * @param payload the checkout payload
   * @returns response from the server
   */
  async checkout(payload: ICheckout): Promise<AxiosResponse> {
    return this.request({
      method: "POST",
      url: "/api/v1/payments/checkout",
      data: payload,
    });
  }

  /**
   * Fetches the list of payment gateways that are ready to be used for checkout.
   * @param payload the platform to check
   * @returns response from the server
   */
  async ready(payload: IPlatform): Promise<AxiosResponse> {
    return this.request({
      method: "GET",
      url: "/api/v1/payments/ready",
      headers: {
        "X-Platform": payload.platform,
      },
    });
  }
}

export default PaymentService;
