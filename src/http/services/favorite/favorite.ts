import { AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import {
  IAddToFavorites,
  IIsFavorite,
  IRemoveFromFavorites,
  IFavoriteContentItem,
} from "./favorite.types";

class FavoriteService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Add a content to the user's favorites.
   * @param payload The ID of the content to add
   * @returns Server response
   */
  async addToFavorites(payload: IAddToFavorites) {
    return this.request({
      method: "POST",
      url: "/api/favorite",
      data: payload,
    });
  }

  /**
   * Check if a content is already in user's favorites.
   * @param payload The ID of the content to check
   * @returns Boolean or content info from server
   */
  async getIsFavorite(payload: IIsFavorite) {
    return this.request({
      method: "GET",
      url: `/api/favorite?content_id=${payload.id}`,
    });
  }

  /**
   * Remove a content from user's favorites.
   * @param payload The ID of the content to remove
   * @returns Server response
   */
  async removeFromFavorites(payload: IRemoveFromFavorites) {
    return this.request({
      method: "DELETE",
      url: `/api/favorite/${payload.id}`,
    });
  }

  /**
   * Get all favorite contents for the logged-in user.
   * @returns List of user's favorite content items
   */
  async get(): Promise<AxiosResponse<IFavoriteContentItem[]>> {
    return this.request({
      method: "GET",
      url: "/api/favorite",
    });
  }
}

export default FavoriteService;
