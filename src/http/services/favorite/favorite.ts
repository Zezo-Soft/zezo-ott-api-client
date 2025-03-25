import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import {
  IAddToFavorites,
  IIsFavorite,
  IRemoveFromFavorites,
} from "./favorite.types";

class FavoriteService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Add a content to the user's favorites.
   * @param payload the id of the content to add
   * @returns response from the server
   */
  async addToFavorites(payload: IAddToFavorites) {
    return this.request({
      method: "POST",
      url: "/api/favorite",
      data: payload,
    });
  }

  /**
   * Checks if a content is in the user's favorites.
   * @param payload the id of the content to check
   * @returns response from the server indicating if the content is a favorite
   */
  async getIsFavorite(payload: IIsFavorite) {
    return this.request({
      method: "GET",
      url: `/api/favorite?content_id=" + ${payload.id}`,
    });
  }

  /**
   * Removes a content from the user's favorites.
   * @param payload the id of the content to remove
   * @returns response from the server
   */

  async removeFromFavorites(payload: IRemoveFromFavorites) {
    return this.request({
      method: "DELETE",
      url: `/api/favorite/${payload.id}`,
    });
  }
}

export default FavoriteService;
