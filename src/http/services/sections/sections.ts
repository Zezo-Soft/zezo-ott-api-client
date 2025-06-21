import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import qs from "qs";
import {
  ICreateSectionPayload,
  ICreateSectionStyle,
  IGetManageSectionsQuery,
  IGetSectionManageResponse,
  IGetSectionsQuery,
  IGetSectionStylesQuery,
  ISection,
  ISectionStyles,
  ISectionUpdate,
  IUpdateSectionStatusPayload,
  IUpdateSectionStyle,
} from "./sections.types";
import { AxiosResponse } from "axios";
import { IPaginatedResponse } from "../../../types";
import { filterNonNull } from "../../../utils";
import { IContentData } from "../content/content.types";

class SectionsService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Creates a new section.
   *
   * @param payload The section data to send to the server.
   * @returns A promise that resolves to the server's response containing the ID of the new section.
   */
  async create(
    payload: ICreateSectionPayload
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "POST",
      url: "/api/v1/sections",
      data: payload,
    });
  }

  /**
   * Retrieves a list of sections with content for management.
   *
   * @param query The query parameters to filter the results by.
   * The available query parameters are:
   * - `page`: The page number to retrieve.
   * - `limit`: The number of items to retrieve per page.
   * - `order`: The order to sort the results by. The available values are `asc` and `desc`.
   * - `fields`: An array of column names to include in the results.
   * - `q`: A search query to filter the results by.
   * - `filters`: An object of filter values to filter the results by.
   * - `populate`: An array of populate options to include associated data in the results.
   * @returns A promise that resolves to the server's response containing the list of sections with content for management.
   */
  async getManage(
    query?: IGetManageSectionsQuery
  ): Promise<AxiosResponse<IPaginatedResponse<IGetSectionManageResponse>>> {
    if (query) {
      return this.request({
        method: "GET",
        url: `/api/v1/sections/manage?${qs.stringify(filterNonNull(query))}`,
      });
    }
    return this.request({
      method: "GET",
      url: "/api/v1/sections/manage",
    });
  }

  /**
   * Deletes a section by ID.
   *
   * @param id The ID of the section to delete.
   * @returns A promise that resolves to the server's response containing the ID of the deleted section.
   */
  async deleteSection(id: string): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "DELETE",
      url: `/api/v1/sections/${id}`,
    });
  }

  /**
   * Updates the status of a section.
   *
   * @param payload The payload to send to the server to update the section status.
   * The payload should contain the `id` of the section to update and the `status` to set.
   * @returns A promise that resolves to the server's response containing the ID of the updated section.
   */
  async updateStatus(
    payload: IUpdateSectionStatusPayload
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "PUT",
      url: "/api/v1/sections/status",
      data: payload,
    });
  }

  /**
   * Updates the order of sections.
   *
   * @param orders An array of section IDs representing the new order.
   * @returns A promise that resolves to the server's response.
   */
  async updateOrder(orders: string[]): Promise<AxiosResponse> {
    return this.request({
      method: "PATCH",
      url: "/api/v1/sections/order",
      data: {
        orders,
      },
    });
  }

  /**
   * Updates a section.
   *
   * @param payload The payload containing the section details to update.
   * The payload should include:
   * - `id`: The ID of the section to update.
   * - `type`: The type of the section to update.
   * - `content_ids`: An array of content IDs associated with the section.
   * - `profile`: The profile for the section, which can be `kids`, `family`, or `none`.
   * - `name`: (Optional) The name of the section.
   * - `label`: (Optional) The label of the section.
   * - `category`: (Optional) The category of the section.
   * - `genre`: (Optional) The genre of the section.
   * @returns A promise that resolves to the server's response.
   */
  async update(payload: ISectionUpdate): Promise<AxiosResponse> {
    return this.request({
      method: "PUT",
      url: "/api/v1/sections",
      data: payload,
    });
  }

  /**
   * Creates a new section style.
   *
   * @param payload The payload to send to the server to create the section style.
   * The payload should contain the `name`, `description`, `style_key`, and `status` of the section style.
   * The `style_key` should be a unique identifier for the section style.
   * The `status` should be a boolean indicating whether the section style is active or not.
   * @returns A promise that resolves to the server's response.
   */
  async createSectionStyle(
    payload: ICreateSectionStyle
  ): Promise<AxiosResponse> {
    return this.request({
      method: "POST",
      url: "/api/v1/sections/styles",
      data: payload,
    });
  }

  /**
   * Deletes section styles by their IDs.
   *
   * @param ids An array of section style IDs to delete.
   * @returns A promise that resolves to the server's response.
   */
  async deleteSectionStyle(ids: string[]): Promise<AxiosResponse> {
    return this.request({
      method: "DELETE",
      url: "/api/v1/sections/styles/delete",
      data: { ids },
    });
  }

  /**
   * Updates a section style.
   *
   * @param id The ID of the section style to update.
   * @param payload The payload containing the section style details to update.
   * The payload should include:
   * - `name`: The name of the section style.
   * - `description`: The description of the section style.
   * - `style_key`: The unique identifier for the section style.
   * @returns A promise that resolves to the server's response.
   */
  async updateSectionStyle(
    id: string,
    payload: IUpdateSectionStyle
  ): Promise<AxiosResponse> {
    return this.request({
      method: "PUT",
      url: `/api/v1/sections/styles/${id}`,
      data: payload,
    });
  }

  /**
   * Gets a list of section styles.
   *
   * @param query The query parameters to use when retrieving the section styles.
   * The query parameters should include:
   * - `page`: The page number to retrieve.
   * - `limit`: The number of section styles to retrieve per page.
   * - `order`: The order to retrieve the section styles in.
   * - `sort_by`: The field to sort the section styles by.
   * - `q`: The search query to use when retrieving the section styles.
   * @returns A promise that resolves to the server's response.
   */
  async getSectionStyles(
    query?: IGetSectionStylesQuery
  ): Promise<AxiosResponse<IPaginatedResponse<ISectionStyles>>> {
    if (query) {
      return this.request({
        method: "GET",
        url: `/api/v1/sections/styles?${qs.stringify(filterNonNull(query))}`,
      });
    }
    return this.request({
      method: "GET",
      url: "/api/v1/sections/styles",
    });
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
