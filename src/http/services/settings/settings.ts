import { AxiosHeaders, AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import {
  IGetManageSettingsQuery,
  IUpdateSettings,
  IUpdateSocialMedia,
  IWebSetting,
  IWebsiteSetting,
} from "./settings.types";
import qs from "qs";
import { filterNonNull } from "../../../utils";

class SettingsService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Retrieves the list of website settings for management.
   * @param query Optional query parameters to filter and sort the results.
   * @returns The list of website settings for management.
   */
  async getManage<T = IWebSetting>(
    query?: IGetManageSettingsQuery
  ): Promise<AxiosResponse<T>> {
    return this.request({
      method: "GET",
      url: `/api/v1/settings/manage?${qs.stringify(
        filterNonNull(query || {})
      )}`,
    });
  }

  /**
   * Retrieves the list of website settings.
   * @param query Optional query parameters to filter and sort the results.
   * @returns The list of website settings.
   */
  async get<T = IWebSetting>(
    query?: IGetManageSettingsQuery
  ): Promise<AxiosResponse<T>> {
    return this.request({
      method: "GET",
      url: `/api/v1/settings?${qs.stringify(filterNonNull(query || {}))}`,
    });
  }

  /**
   * Updates the website settings.
   *
   * @param payload The settings data to update on the server.
   * @param headers Optional headers to include in the request.
   * @returns A promise that resolves to the server's response containing the ID of the updated settings.
   */
  async update(
    payload: IUpdateSettings,
    headers?: AxiosHeaders
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "PUT",
      url: "/api/v1/settings",
      data: payload,
      headers: headers || {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Updates the social media settings.
   *
   * @param payload The social media settings data to update on the server.
   * @param headers Optional headers to include in the request.
   * @returns A promise that resolves to the server's response containing the ID of the updated settings.
   */
  async updateSocialMedia(
    payload: IUpdateSocialMedia,
    headers?: AxiosHeaders
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "PATCH",
      url: "/api/v1/settings/social-media",
      data: payload,
      headers: headers || {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Fetches the website settings.
   * @deprecated Use the `get` method instead.
   * @returns The website settings.
   */
  async getSettings(): Promise<AxiosResponse<IWebsiteSetting>> {
    return this.request({
      method: "GET",
      url: "/api/settings",
    });
  }
}

export default SettingsService;
