import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import { ICheckout, IPlatform } from "./payments.types";

class PaymentService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Initializes a payment
   *
   * @param payload the checkout payload
   * @returns response from the server
   */
  async checkout(payload: ICheckout) {
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
  async ready(payload: IPlatform) {
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
