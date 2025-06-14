import { AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import { IPlatform } from "../payments/payments.types";
import {
  IAuthMethods,
  IAuthProviderResponse,
  IAuthProviderUpdatePayload,
  IGetAuthProviderQueryPayload,
} from "./auth.methods.types";
import qs from "qs";

class AuthMethodsService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Retrieves the available authentication methods for the specified platform.
   *
   * @param payload - The platform for which to retrieve authentication methods.
   * @returns A promise that resolves to an object containing the success status,
   *          a message, and an array of available authentication methods (email or phone).
   */
  async loginMethods(payload: IPlatform): Promise<AxiosResponse<IAuthMethods>> {
    return this.request({
      method: "GET",
      url: `/service/auth-provider?select=${payload.platform}`,
    });
  }

  /**
   * Initializes the auth provider.
   *
   * @returns A promise that resolves to the server's response.
   */
  async init(): Promise<AxiosResponse> {
    return this.request({
      method: "GET",
      url: "/service/auth-provider/initiate",
    });
  }

  /**
   * Fetches the list of configured private auth providers.
   *
   * @param query An object of query parameters to filter the results.
   * The available query parameters are:
   * - `select`: The columns to include in the results.
   * - `fields`: The columns to include in the results.
   * @returns A promise that resolves to the server's response containing the list of private auth providers.
   */
  async get(
    query?: IGetAuthProviderQueryPayload
  ): Promise<AxiosResponse<IAuthProviderResponse>> {
    if (query) {
      return this.request({
        method: "GET",
        url: `/service/auth-provider/private?${qs.stringify(query)}`,
      });
    }
    return this.request({
      method: "GET",
      url: "/service/auth-provider/private",
    });
  }

  /**
   * Updates the authentication provider configuration.
   *
   * @param payload The payload containing the updated configuration for the authentication provider.
   * @returns A promise that resolves to the server's response.
   */
  async update(payload: IAuthProviderUpdatePayload): Promise<AxiosResponse> {
    return this.request({
      method: "PUT",
      url: "/service/auth-provider",
      data: payload,
    });
  }
}

export default AuthMethodsService;
