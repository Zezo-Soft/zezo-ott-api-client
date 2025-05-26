import { AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import { IUserExportQueryPayload } from "./user.types";
import qs from "qs";

class UserService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Export users as a CSV file.
   *
   * @param query An object of query parameters to filter the results.
   * The available query parameters are:
   * - `from`: The start date of the export in ISO 8601 format.
   * - `to`: The end date of the export in ISO 8601 format.
   * - `format`: The format of the export file. The only available value is `csv`.
   * - `select`: The columns to include in the export. The available values are `all`, `email`, `name`, `phone`, `role`, `status`, `createdAt`, `updatedAt`.
   * @returns An AxiosResponse containing the exported file.
   */
  async export(query?: IUserExportQueryPayload): Promise<AxiosResponse<any>> {
    if (query) {
      return this.request({
        method: "GET",
        url: `/api/v1/users/export?${qs.stringify(query)}`,
      });
    }
    return this.request({
      method: "GET",
      url: "/api/v1/users/export",
    });
  }
}

export default UserService;
