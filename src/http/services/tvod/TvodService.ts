import BaseService from "../baseService";
import { IOptions } from "../../api-sdk";

export class TvodService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  async getPurchaseList(query: string, headers?: Record<string, string>) {
    return this.request({
      method: "GET",
      url: `/service/content/tvod${query || ""}`,
      headers,
    });
  }
}

export default TvodService;
