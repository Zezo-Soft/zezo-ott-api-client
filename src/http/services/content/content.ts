import { AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import { IContent, IContentSeasons, ITvod } from "./content.types";

class ContentService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Fetches the list of content.
   *
   * @param query the search query
   * @returns response from the server
   */
  async get(query?: string): Promise<AxiosResponse<IContent>> {
    return this.request({
      method: "GET",
      url: `/service/content${query || ""}`,
    });
  }

  /**
   * Fetches the list of content seasons.
   *
   * @param query the search query
   * @returns response from the server containing the list of content seasons
   */
  async getSeasons(query?: string): Promise<AxiosResponse<IContentSeasons[]>> {
    return this.request({
      method: "GET",
      url: `/service/content/seasons${query || ""}`,
    });
  }

  /**
   * Checks if a content has been bought or rented by the current user.
   * @param contentId the id of the content to check
   * @returns a boolean indicating if the content has been bought or rented
   */
  async getIsContentBuyedOrRented(contentId: string): Promise<boolean> {
    const response = await this.request({
      method: "GET",
      url: `/api/content/buy-or-rent/${contentId}`,
    });

    if (response?.data?.status === "valid") {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Fetches the list of content available for rent or buy.
   *
   * @param queryString the query string
   * @returns a promise that resolves to the server's response containing the list of content available for rent or buy
   */
  async getTvod(queryString?: string): Promise<ITvod> {
    return this.request({
      method: "GET",
      url: `/service/content/tvod${queryString || ""}`,
    });
  }
}

export default ContentService;
