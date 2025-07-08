import { AxiosHeaders, AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import { IPaginatedResponse } from "../../../types";
import qs from "qs";
import { filterNonNull } from "../../../utils";
import {
  IActionGenre,
  ICreateGenre,
  IGenre,
  IListGenre,
  IListGenreQuery,
  IUpdateGenre,
} from "./genres.types";
class GenresService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Creates a new genre.
   *
   * @param payload The genre data to send to the server.
   * @returns A promise that resolves to the server's response containing the ID of the new genre.
   */
  async create(payload: ICreateGenre): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "POST",
      url: "/api/v1/genre",
      data: payload,
    });
  }

  /**
   * Updates an existing genre.
   *
   * @param id The ID of the genre to update.
   * @param payload The genre data to update on the server.
   * @returns A promise that resolves to the server's response containing the ID of the updated genre.
   */
  async update(
    id: string,
    payload: IUpdateGenre
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "PUT",
      url: `/api/v1/genre/${id}`,
      data: payload,
    });
  }

  /**
   * Deletes one or more genres by their IDs.
   *
   * @param id An array of genre IDs to delete.
   * @returns A promise that resolves to the server's response containing the count of deleted genres.
   */
  async delete(id: string[]): Promise<AxiosResponse<{ deletedCount: number }>> {
    return this.request({
      method: "DELETE",
      url: "/api/v1/genre",
      data: { ids: id },
    });
  }

  /**
   * Performs an action on multiple genres.
   *
   * @param payload The payload containing the action to perform and the IDs of the genres.
   * The available actions are "active", "inactive", "trash", "pending", and "blocked".
   * @returns A promise that resolves to the server's response containing the count of updated genres.
   */
  async actions(
    payload: IActionGenre
  ): Promise<AxiosResponse<{ updatedCount: number }>> {
    return this.request({
      method: "PATCH",
      url: "/api/v1/genre/action",
      data: payload,
    });
  }

  /**
   * Fetches a list of genres from the server, which can be used to manage the genres.
   *
   * @param query Optional query parameters to filter and sort the genres.
   * @returns A promise that resolves to the server's response containing a paginated list of genres.
   */
  async listManage(
    query?: IListGenreQuery
  ): Promise<AxiosResponse<IPaginatedResponse<IListGenre>>> {
    return this.request({
      method: "GET",
      url: `/api/v1/genre/manage?${qs.stringify(filterNonNull(query || {}))}`,
    });
  }

  /**
   * Fetches a list of genres from the server.
   *
   * @param query Optional query parameters to filter and sort the genres.
   * @returns A promise that resolves to the server's response containing a paginated list of genres.
   */
  async list(
    query?: IListGenreQuery
  ): Promise<AxiosResponse<IPaginatedResponse<IGenre>>> {
    return this.request({
      method: "GET",
      url: `/api/v1/genre?${qs.stringify(filterNonNull(query || {}))}`,
    });
  }
}

export default GenresService;
