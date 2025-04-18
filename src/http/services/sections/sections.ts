import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import qs from "qs";
import { IGetSectionsQuery, ISection } from "./sections.types";
import { AxiosResponse } from "axios";

class SectionsService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Fetches the list of sections.
   *
   * @param query Optional query parameters to filter the sections.
   * @returns A promise that resolves to the server's response containing the list of sections.
   */

  async get(query?: IGetSectionsQuery): Promise<AxiosResponse<ISection>> {
    if (query) {
      return this.request({
        method: "GET",
        url: `/service/sections?${qs.stringify(query)}`,
      });
    }
    return this.request({
      method: "GET",
      url: "/service/sections",
    });
  }
}

export default SectionsService;
