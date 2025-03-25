import { AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import { IPlatform } from "../payments/payments.types";
import { IAuthMethods } from "./auth.methods.types";

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
}

export default AuthMethodsService;
