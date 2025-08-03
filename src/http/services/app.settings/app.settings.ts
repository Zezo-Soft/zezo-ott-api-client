import { AxiosHeaders, AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import qs from "qs";
import { filterNonNull } from "../../../utils";
import {
  IAndroidVersion,
  IAppPages,
  IAppSettings,
  ITheme,
  IThemeManage,
  IUpdateAppPages,
  IUpdateAppSettings,
  IUpdateAppSettingsType,
  IUpdateTheme,
} from "./app.settings.types";

class AppSettingsService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Updates app settings.
   *
   * @param payload The app settings data to update on the server.
   * @param type The type of app settings to update.
   * @param headers Optional headers to include in the request.
   * @returns A promise that resolves to the server's response containing a success flag and a message.
   */
  async update(
    payload: IUpdateAppSettings,
    type: IUpdateAppSettingsType,
    headers?: AxiosHeaders
  ): Promise<
    AxiosResponse<{
      success: boolean;
      message: string;
    }>
  > {
    return this.request({
      method: "PUT",
      url: `/api/v1/app/settings?type=${type}`,
      data: payload,
      headers: headers || {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Retrieves the current Android version.
   * @returns A promise that resolves to the server's response containing the current Android version.
   */
  async getAndroidVersion(): Promise<AxiosResponse<IAndroidVersion>> {
    return this.request({
      method: "GET",
      url: "/api/v1/app/settings/android",
    });
  }

  /**
   * Retrieves the list of pages.
   * @returns A promise that resolves to the server's response containing the list of pages.
   */
  async getPagesList(): Promise<AxiosResponse<IAppPages[]>> {
    return this.request({
      method: "GET",
      url: "/api/v1/app/settings/pages",
    });
  }

  /**
   * Updates the list of app pages.
   *
   * @param payload The list of pages to update on the server.
   * @returns A promise that resolves to the server's response containing a success message.
   */
  async updatePages(
    payload: IUpdateAppPages[]
  ): Promise<AxiosResponse<{ message: string }>> {
    return this.request({
      method: "PUT",
      url: "/api/v1/app/settings/pages",
      data: {
        appPages: payload,
      },
    });
  }

  /**
   * Retrieves the app settings.
   *
   * @param query Optional query parameters to filter the results.
   * @returns A promise that resolves to the server's response containing the app settings.
   */
  async getSettings(query?: {
    select?: string;
  }): Promise<AxiosResponse<IAppSettings>> {
    return this.request({
      method: "GET",
      url: `/api/v1/app/settings?${qs.stringify(filterNonNull(query || {}))}`,
    });
  }

  /**
   * Updates the theme of the app.
   *
   * @param id The ID of the theme to update.
   * @param payload The theme data to update on the server.
   * @returns A promise that resolves to the server's response containing a message.
   */
  async updateTheme(
    id: string,
    payload: IUpdateTheme
  ): Promise<AxiosResponse<{ message: string }>> {
    return this.request({
      method: "PUT",
      url: `/api/v1/app/color-scheme/${id}`,
      data: payload,
    });
  }

  /**
   * Initiates the theme.
   *
   * @returns A promise that resolves to the server's response containing a message.
   */
  async initTheme(): Promise<AxiosResponse<{ message: string }>> {
    return this.request({
      method: "POST",
      url: "/api/v1/app/color-scheme/initiate",
    });
  }

  /**
   * Retrieves the list of themes that can be managed.
   *
   * @returns A promise that resolves to the server's response containing the list of themes.
   */
  async getThemeManage(): Promise<AxiosResponse<IThemeManage[]>> {
    return this.request({
      method: "GET",
      url: "/api/v1/app/app-color-scheme/manage",
    });
  }

  /**
   * Fetches the list of themes.
   *
   * @returns A promise that resolves to the server's response containing the list of themes.
   */
  async getThemes(): Promise<AxiosResponse<ITheme[]>> {
    return this.request({
      method: "GET",
      url: "/api/v1/app/app-color-scheme",
    });
  }
}

export default AppSettingsService;
