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
        // "x-platform": "web",
        // "x-country-code": "IN",
        // "x-language": "en",
        ...(options.headers || {}),
      },
    });

    // Attach user-provided interceptors
    if (options.interceptors?.request) {
      this.client.interceptors.request.use(
        (config) =>
          options.interceptors!.request!(config as AxiosRequestConfig) as any
      );
    }

    if (options.interceptors?.response || options.interceptors?.responseError) {
      this.client.interceptors.response.use(
        options.interceptors.response || ((r) => r),
        options.interceptors.responseError || ((e) => Promise.reject(e))
      );
    }
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
