import { AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";

class UpgradeService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Sets up the access control list (ACL) for the application.
   *
   * This is a convenience method that you can call when you want to set up the
   * ACL. It is called automatically when you call `setup()` on the main
   * `ApiSdk` instance.
   *
   * @returns A promise that resolves to the server's response.
   */
  async autoSetupAcl(): Promise<AxiosResponse> {
    return this.request({
      method: "GET",
      url: "/api/v1/upgrade/acl",
    });
  }
}

export default UpgradeService;
