import { AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import { IGetCategories } from "./categories.types";

class CategoriesService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Fetches the list of categories.
   *
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
