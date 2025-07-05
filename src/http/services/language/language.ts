import { AxiosHeaders, AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import {
  IActionLanguage,
  ICreateLanguage,
  IGetLanguageQuery,
  ILanguage,
  IManageLanguage,
  IUpdateLanguage,
} from "./language.types";
import { IPaginatedResponse } from "../../../types";
import qs from "qs";
import { filterNonNull } from "../../../utils";

class LanguageService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Creates a new language.
   *
   * @param payload The language data to send to the server.
   * @param headers Optional headers to include in the request.
   * @returns A promise that resolves to the server's response containing the ID of the new language.
   */
  async create(
    payload: ICreateLanguage,
    headers?: AxiosHeaders
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "POST",
      url: "/api/v1/language",
      data: payload,
      headers: headers || {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Updates an existing language.
   *
   * @param id The ID of the language to update.
   * @param payload The language data to update on the server.
   * @param headers Optional headers to include in the request.
   * @returns A promise that resolves to the server's response containing the ID of the updated language.
   */
  async update(
    id: string,
    payload: IUpdateLanguage,
    headers?: AxiosHeaders
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "PUT",
      url: `/api/v1/language/${id}`,
      data: payload,
      headers: headers || {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Deletes languages by their IDs.
   *
   * @param ids An array of language IDs to delete.
   * @returns A promise that resolves to the server's response containing the count of deleted languages.
   */
  async delete(
    ids: string[]
  ): Promise<AxiosResponse<{ deletedCount: number }>> {
    return this.request({
      method: "DELETE",
      url: "/api/v1/language",
      data: { ids },
    });
  }

  /**
   * Performs an action on multiple languages.
   *
   * @param payload The payload containing the action to perform and the IDs of the languages.
   * The available actions are "active", "inactive", "trash", "pending", and "blocked".
   * @returns A promise that resolves to the server's response containing the count of updated languages.
   */
  async actions(
    payload: IActionLanguage
  ): Promise<AxiosResponse<{ updatedCount: number }>> {
    return this.request({
      method: "PATCH",
      url: "/api/v1/language",
      data: payload,
    });
  }

  /**
   * Retrieves a list of languages for management.
   *
   * @param query Optional query parameters to filter the results.
   * The available query parameters are:
   * - `page`: The page number to retrieve.
   * - `limit`: The number of items to retrieve per page.
   * - `order`: The order to sort the results by. The available values are `asc` and `desc`.
   * - `fields`: An array of column names to include in the results.
   * - `q`: A search query to filter the results by.
   * - `filters`: An object of filter values to filter the results by.
   * - `populate`: An array of populate options to include associated data in the results.
   * @returns A promise that resolves to the server's response containing the list of languages for management.
   */
  async getManage(
    query?: IGetLanguageQuery
  ): Promise<AxiosResponse<IPaginatedResponse<IManageLanguage>>> {
    if (query) {
      return this.request({
        method: "GET",
        url: `/api/v1/language/manage?${qs.stringify(filterNonNull(query))}`,
      });
    }
    return this.request({
      method: "GET",
      url: "/api/v1/language/manage",
    });
  }

  /**
   * Retrieves a list of languages.
   *
   * @param query Optional query parameters to filter the results.
   * The available query parameters are:
   * - `page`: The page number to retrieve.
   * - `limit`: The number of items to retrieve per page.
   * - `order`: The order to sort the results by. The available values are `asc` and `desc`.
   * - `fields`: An array of column names to include in the results.
   * - `q`: A search query to filter the results by.
   * - `filters`: An object of filter values to filter the results by.
   * - `populate`: An array of populate options to include associated data in the results.
   * @returns A promise that resolves to the server's response containing the list of languages.
   */
  async list(
    query?: IGetLanguageQuery
  ): Promise<AxiosResponse<IPaginatedResponse<ILanguage>>> {
    if (query) {
      return this.request({
        method: "GET",
        url: `/api/v1/language?${qs.stringify(filterNonNull(query))}`,
      });
    }
    return this.request({
      method: "GET",
      url: "/api/v1/language",
    });
  }
}

export default LanguageService;
