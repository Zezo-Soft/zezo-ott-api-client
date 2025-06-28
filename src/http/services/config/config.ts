import { AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import qs from "qs";
import {
  IConfigData,
  ICreateConfigPayload,
  IDeleteConfigPayload,
  IGetConfigPayload,
  IUpdateConfigPayload,
} from "./config.types";

class ConfigService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Creates a new config.
   *
   * @param payload The config data to send to the server.
   * @returns A promise that resolves to the server's response.
   */
  async create(payload: ICreateConfigPayload): Promise<AxiosResponse<any>> {
    return this.request({
      method: "POST",
      url: "/api/v1/config",
      data: payload,
    });
  }

  /**
   * Updates an existing config.
   *
   * @param payload The config data to update on the server.
   * @returns A promise that resolves to the server's response.
   */
  async update(payload: IUpdateConfigPayload): Promise<AxiosResponse<any>> {
    return this.request({
      method: "PUT",
      url: "/api/v1/config",
      data: payload,
    });
  }

  /**
   * Deletes a config based on the provided payload.
   *
   * @param payload The config data identifying which config to delete.
   * @returns A promise that resolves to the server's response.
   */
  async delete(payload: IDeleteConfigPayload): Promise<AxiosResponse<any>> {
    return this.request({
      method: "DELETE",
      url: "/api/v1/config",
      data: payload,
    });
  }

  /**
   * Fetches a list of config data from the server based on the provided query.
   *
   * @param query The query to filter the results by.
   * @returns A promise that resolves to the server's response containing the list of config data.
   */
  async get(query: IGetConfigPayload): Promise<AxiosResponse<IConfigData[]>> {
    return this.request({
      method: "GET",
      url: `/api/v1/config?${qs.stringify(query)}`,
    });
  }
}

export default ConfigService;
