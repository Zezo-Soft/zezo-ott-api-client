import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import { IWebsiteSetting } from "./settings.types";

class SettingsService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  async getSettings(): Promise<IWebsiteSetting> {
    return this.request({
      method: "GET",
      url: "/api/settings",
    });
  }
}

export default SettingsService;
