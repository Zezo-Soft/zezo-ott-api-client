import { AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import {
  ICreateReleasePopupResponse,
  IReleasePopupResponse,
  IUpdateReleasePopupResponse,
} from "./release.popup.types";

class ReleasePopupService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Creates a new release popup.
   *
   * @param contentId The ID of the content for which the release popup is being created.
   * @returns A promise that resolves to the server's response containing the release popup ID.
   */
  async create(
    contentId: string
  ): Promise<AxiosResponse<ICreateReleasePopupResponse>> {
    return this.request({
      method: "POST",
      url: "/api/release",
      data: { contentId },
    });
  }

  /**
   * Updates the release popup.
   *
   * @param contentId The ID of the content for which the release popup is being updated.
   * @returns A promise that resolves to the server's response containing the release popup ID.
   */
  async update(
    contentId: string
  ): Promise<AxiosResponse<IUpdateReleasePopupResponse>> {
    return this.request({
      method: "PUT",
      url: "/api/release",
      data: {
        contentId,
      },
    });
  }

  /**
   * Deletes the release popup.
   *
   * @returns A promise that resolves to the server's response.
   */
  async delete() {
    return this.request({
      method: "DELETE",
      url: "/api/release",
    });
  }

  /**
   * Fetches the release popup.
   *
   * @returns A promise that resolves to the server's response containing the release popup data.
   */
  async get(): Promise<AxiosResponse<{ data: IReleasePopupResponse }>> {
    return this.request({
      method: "GET",
      url: "/api/release",
    });
  }
}

export default ReleasePopupService;
