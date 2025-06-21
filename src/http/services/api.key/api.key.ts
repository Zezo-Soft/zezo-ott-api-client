import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import qs from "qs";
import { AxiosResponse } from "axios";
import { IPaginatedResponse } from "../../../types";
import { filterNonNull } from "../../../utils";
import { IApiKey, ICreateApiKey, IUpdateApiKey } from "./api.key.types";

class ApiKeyService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Creates a new API key.
   *
   * @param payload The API key data to send to the server.
   * @returns A promise that resolves to the server's response containing the ID of the new API key.
   */
  async create(payload: ICreateApiKey): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "POST",
      url: "/api/v1/apikey",
      data: payload,
    });
  }

  /**
   * Lists API keys.
   *
   * @returns A promise that resolves to the server's response containing the list of API keys.
   */
  async list(id?: string): Promise<AxiosResponse<IApiKey>> {
    const query = qs.stringify(
      filterNonNull({
        id,
      })
    );
    return this.request({
      method: "GET",
      url: `/api/v1/apikey?${query}`,
    });
  }

  /**
   * Deletes an API key.
   *
   * @param id The ID of the API key to delete.
   * @returns A promise that resolves to the server's response.
   */
  async delete(id: string): Promise<AxiosResponse> {
    return this.request({
      method: "DELETE",
      url: `/api/v1/apikey/${id}`,
    });
  }

  /**
   * Updates an API key.
   *
   * @param id The ID of the API key to update.
   * @param payload The API key data to send to the server.
   * @returns A promise that resolves to the server's response.
   */
  async update(id: string, payload: IUpdateApiKey): Promise<AxiosResponse> {
    return this.request({
      method: "PUT",
      url: `/api/v1/apikey/${id}`,
      data: payload,
    });
  }
}

export default ApiKeyService;
