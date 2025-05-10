import { AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import { ICountries, ICreateCountryPayload } from "./countries.types";

class CountriesService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Fetches the list of countries.
   *
   * @param query Optional search query to filter the countries.
   * @returns A promise that resolves to the server's response containing the countries data.
   */

  async get(query?: string): Promise<AxiosResponse<ICountries>> {
    if (query) {
      return this.request({
        method: "GET",
        url: `api/v1/countries${query}`,
      });
    }
    return this.request({
      method: "GET",
      url: "api/v1/countries",
    });
  }

  /**
   * Deletes countries by their IDs.
   *
   * @param ids An array of country IDs to delete.
   * @returns A promise that resolves to the server's response.
   */
  async delete(ids: string[]) {
    return this.request({
      method: "DELETE",
      url: "api/v1/countries",
      data: {
        id: ids,
      },
    });
  }

  /**
   * Creates a new country.
   *
   * @param payload The country data to send to the server.
   * @returns A promise that resolves to the server's response.
   */
  async create(payload: ICreateCountryPayload) {
    return this.request({
      method: "POST",
      url: "api/v1/countries",
      data: payload,
    });
  }

  /**
   * Initializes the country setup by making an automatic configuration request.
   *
   * @returns A promise that resolves to the server's response.
   */

  async init() {
    return this.request({
      method: "POST",
      url: "api/v1/countries/auto-setup",
    });
  }
}

export default CountriesService;
