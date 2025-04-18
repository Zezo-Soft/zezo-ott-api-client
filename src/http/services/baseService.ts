import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { IOptions } from "../api-sdk";

class BaseService {
  protected client: AxiosInstance;

  constructor(options: IOptions) {
    this.client = axios.create({
      baseURL: options.baseUrl,
      withCredentials: options?.withCredentials || false,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  protected async request(config: AxiosRequestConfig) {
    try {
      return await this.client.request(config);
    } catch (error) {
      throw error;
    }
  }
}

export default BaseService;
