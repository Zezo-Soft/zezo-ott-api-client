import { AxiosHeaders, AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import { IRegisterDevice, ISendPushNotification } from "./notifications.types";

class NotificationsService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Registers a device for notifications.
   * @param payload The device to register
   * @returns AxiosResponse from the server
   */
  async registerDevice(payload: IRegisterDevice): Promise<AxiosResponse> {
    return this.request({
      method: "POST",
      url: "/api/v1/notification/register-device",
      data: payload,
    });
  }

  /**
   * Sends a push notification to the specified devices.
   * @param payload The notification details to send
   * @returns AxiosResponse from the server
   */
  async sendPushNotification(
    payload: ISendPushNotification
  ): Promise<AxiosResponse> {
    return this.request({
      method: "POST",
      url: "/api/v1/notification/push",
      data: payload,
    });
  }
}

export default NotificationsService;
