import { AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import {
  IUserExportQueryPayload,
  IUserQueryPayload,
  IUserResponse,
} from "./user.types";
import qs from "qs";
import { filterNonNull } from "../../../utils";

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

  /**
   * Retrieves a list of users.
   *
   * @param query An object of query parameters to filter the results.
   * The available query parameters are:
   * - `page`: The page number to retrieve.
   * - `limit`: The number of items to retrieve per page.
   * - `order`: The order to sort the results by. The available values are `asc` and `desc`.
   * - `fields`: An array of column names to include in the results.
   * - `q`: A search query to filter the results by.
   * - `filters`: An object of filter values to filter the results by.
   * - `populate`: An array of populate options to include associated data in the results.
   * - `id`: A user ID to retrieve a single user.
   * @returns A promise that resolves to the server's response containing the list of users.
   */
  async get(query?: IUserQueryPayload): Promise<AxiosResponse<IUserResponse>> {
    if (query) {
      return this.request({
        method: "GET",
        url: `api/v1/users?${qs.stringify(filterNonNull(query))}`,
      });
    }
    return this.request({
      method: "GET",
      url: "api/v1/users",
    });
  }
}

export default UserService;
