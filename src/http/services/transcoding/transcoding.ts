import { AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import qs from "qs";
import { filterNonNull } from "../../../utils";
import {
  IListTranscodingQuery,
  ITranscoderJobResponse,
  ITranscodingJob,
} from "./transcoding.types";

class TranscodingService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Creates a new transcoding job.
   *
   * @param payload The data for the new transcoding job.
   * @returns A promise that resolves to the server's response.
   */
  async create(payload: ITranscodingJob): Promise<AxiosResponse> {
    return this.request({
      method: "POST",
      url: "/api/v1/transcoding",
      data: payload,
    });
  }

  /**
   * Retrieves a list of transcoding jobs from the server.
   *
   * @param payload Optional query parameters to filter the transcoding jobs.
   * @returns A promise that resolves to the server's response containing a list of transcoding jobs.
   */
  async list(
    payload?: IListTranscodingQuery
  ): Promise<AxiosResponse<ITranscoderJobResponse>> {
    return this.request({
      method: "GET",
      url: `/api/v1/transcoding?${qs.stringify(filterNonNull(payload || {}))}`,
    });
  }

  /**
   * Deletes a transcoding job by its ID.
   *
   * @param id The ID of the transcoding job to delete.
   * @returns A promise that resolves to the server's response containing the ID of the deleted transcoding job.
   */
  async delete(id: string): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "DELETE",
      url: `/api/v1/transcoding/${id}`,
    });
  }
}

export default TranscodingService;
