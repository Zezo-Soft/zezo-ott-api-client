import { AxiosHeaders, AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import {
  ICategoryActions,
  ICreateCategory,
  IGetCategories,
  IGetCategoriesData,
  IGetCategoriesQuery,
  IGetManageCategories,
  IUpdateCategory,
} from "./categories.types";
import qs from "qs";
import { IPaginatedResponse } from "../../../types";
import { filterNonNull } from "../../../utils";

class CategoriesService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Creates a new category.
   *
   * @param payload The category data to send to the server.
   * @param headers Optional headers to include in the request.
   * @returns A promise that resolves to the server's response containing the ID of the new category.
   */
  async create(
    payload: ICreateCategory,
    headers?: AxiosHeaders
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "POST",
      url: "/api/v1/categories",
      data: payload,
      headers: headers || {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Updates an existing category.
   *
   * @param id The ID of the category to update.
   * @param payload The category data to update on the server.
   * @param headers Optional headers to include in the request.
   * @returns A promise that resolves to the server's response containing the ID of the updated category.
   */
  async update(
    id: string,
    payload: IUpdateCategory,
    headers?: AxiosHeaders
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "PUT",
      url: `/api/v1/categories/${id}`,
      data: payload,
      headers: headers || {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Deletes categories by their IDs.
   *
   * @param ids An array of category IDs to delete.
   * @returns A promise that resolves to the server's response containing the count of deleted categories.
   */
  async delete(
    ids: string[]
  ): Promise<AxiosResponse<{ deletedCount: number }>> {
    return this.request({
      method: "DELETE",
      url: "/api/v1/categories",
      data: { ids },
    });
  }

  /**
   * Performs an action on multiple categories.
   *
   * @param payload The payload containing the action to perform and the IDs of the categories.
   * The available actions are "active", "inactive", "trash", "pending", and "blocked".
   * @returns A promise that resolves to the server's response containing the count of updated categories.
   */
  async actions(
    payload: ICategoryActions
  ): Promise<AxiosResponse<{ updatedCount: number }>> {
    return this.request({
      method: "PATCH",
      url: "/api/v1/categories",
      data: payload,
    });
  }

  /**
   * Retrieves a list of categories for management.
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
   * @returns A promise that resolves to the server's response containing the list of categories for management.
   */
  async getManage(
    query?: IGetCategoriesQuery
  ): Promise<AxiosResponse<IPaginatedResponse<IGetManageCategories>>> {
    if (query) {
      return this.request({
        method: "GET",
        url: `/api/v1/categories/manage?${qs.stringify(filterNonNull(query))}`,
      });
    }
    return this.request({
      method: "GET",
      url: "/api/v1/categories/manage",
    });
  }

  /**
   * Retrieves a list of categories.
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
   * @returns A promise that resolves to the server's response containing the list of categories.
   */
  async list(
    query?: IGetCategoriesQuery
  ): Promise<AxiosResponse<IGetCategoriesData>> {
    if (query) {
      return this.request({
        method: "GET",
        url: `/api/v1/categories?${qs.stringify(filterNonNull(query))}`,
      });
    }
    return this.request({
      method: "GET",
      url: "/api/v1/categories",
    });
  }

  /**
   * Fetches the list of categories.
   * @deprecated Use the `list` method instead.
   * @returns A promise that resolves to the server's response containing
   * the categories data.
   */
  async get(): Promise<AxiosResponse<IGetCategories>> {
    return this.request({
      method: "GET",
      url: "/api/categories",
    });
  }
}

export default CategoriesService;
