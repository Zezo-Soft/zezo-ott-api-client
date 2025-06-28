import { AxiosResponse } from "axios";
import { filterNonNull } from "../../../utils";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import {
  ICreateFolder,
  IFileDelete,
  IFinalizeMultipartUpload,
  IGetMultiPart,
  IGetMultiPartResponse,
  IListFilesQuery,
  IMultiPartResponse,
  ListObjectsOutput,
} from "./file.manager.types";
import qs from "qs";

class FileManagerService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Fetches a list of files from the server based on the provided query.
   *
   * @param payload The query to filter the results by.
   * @returns A promise that resolves to the server's response containing the list of files.
   */
  async list(
    payload?: IListFilesQuery
  ): Promise<AxiosResponse<ListObjectsOutput>> {
    return this.request({
      method: "GET",
      url: `/api/v1/file-manager?${qs.stringify(filterNonNull(payload || {}))}`,
      data: payload,
    });
  }

  /**
   * Creates a new folder in the file manager.
   *
   * @param payload The data to send to the server to create the folder.
   * The payload should contain the `bucket` and `key` of the folder.
   * @returns A promise that resolves to the server's response.
   */
  async createFolder(payload: ICreateFolder): Promise<AxiosResponse> {
    return this.request({
      method: "POST",
      url: "/api/v1/file-manager/folder",
      data: payload,
    });
  }

  /**
   * Deletes a file from the file manager.
   *
   * @param payload The data to send to the server to delete the file.
   * The payload should contain the `bucket` and `key` of the file.
   * @returns A promise that resolves to the server's response.
   */
  async delete(payload: IFileDelete): Promise<AxiosResponse> {
    return this.request({
      method: "DELETE",
      url: "/api/v1/file-manager",
      data: payload,
    });
  }

  /**
   * Initializes a multipart upload for a file in the file manager.
   *
   * @param key The key of the file to initialize the multipart upload for.
   * @returns A promise that resolves to the server's response containing the multipart upload details.
   */
  async initMultipartUpload(
    key: string
  ): Promise<AxiosResponse<IMultiPartResponse>> {
    return this.request({
      method: "POST",
      url: "/api/v1/file-manager/upload/initialize_multipart",
      data: { Key: key },
    });
  }

  /**
   * Retrieves a list of pre-signed URLs for uploading a file in multiple parts.
   *
   * @param payload The data to send to the server to retrieve the pre-signed URLs.
   * The payload should contain the `key`, `upload_id`, `parts`, and `part_number` of the file.
   * @returns A promise that resolves to the server's response containing the list of pre-signed URLs.
   */
  async getMultipartPresignedUrl(
    payload: IGetMultiPart
  ): Promise<AxiosResponse<IGetMultiPartResponse[]>> {
    return this.request({
      method: "POST",
      url: "/api/v1/file-manager/upload/get_multipart_presigned_urls",
      data: payload,
    });
  }

  /**
   * Finalizes a multipart upload for a file in the file manager.
   *
   * @param payload The data to send to the server to finalize the multipart upload.
   * The payload should contain the `file_key`, `upload_id`, `parts`, and `part_number` of the file.
   * @returns A promise that resolves to the server's response.
   */
  async finalizeMultipartUpload(
    payload: IFinalizeMultipartUpload
  ): Promise<AxiosResponse> {
    return this.request({
      method: "POST",
      url: "/api/v1/file-manager/upload/finalize_multipart",
      data: payload,
    });
  }

  /**
   * Retrieves a pre-signed URL for uploading a file to the file manager.
   *
   * @param key The key of the file to upload.
   * @returns A promise that resolves to the server's response containing the pre-signed URL.
   */
  async createUploadPresignedUrl(key: string): Promise<AxiosResponse<string>> {
    return this.request({
      method: "POST",
      url: "/api/v1/file-manager/upload/create_pre_sign_url",
      data: { key },
    });
  }

  /**
   * Retrieves a signed URL for accessing a file in the file manager.
   *
   * @param key The key of the file to access.
   * @returns A promise that resolves to the server's response containing the signed URL.
   */
  async getSignedUrl(key: string): Promise<AxiosResponse<string>> {
    return this.request({
      method: "GET",
      url: `/api/v1/file-manager/get-sign-url?key=${key}`,
    });
  }

  /**
   * Retrieves a signed URL for accessing a file in the file manager for transcoding.
   *
   * @param key The key of the file to access.
   * @returns A promise that resolves to the server's response containing the signed URL.
   */
  async getTranscoderSignUrl(key: string): Promise<AxiosResponse<string>> {
    return this.request({
      method: "POST",
      url: "/file-manager/get-sign-url",
      data: { key },
    });
  }
}

export default FileManagerService;
