import { AxiosHeaders, AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import {
  IRemoveUserSessionPayload,
  IUserACLUpdatePayload,
  IUserAvatarUpdatePayload,
  IUserCreatePayload,
  IUserExportQueryPayload,
  IUserQueryPayload,
  IUserResponse,
  IUsersActionsPayload,
  IUserSubscriptionUpdatePayload,
  IUserUpdatePayload,
} from "./user.types";
import qs from "qs";
import { filterNonNull } from "../../../utils";

class UserService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Export users as a CSV file.
   *
   * @param query An object of query parameters to filter the results.
   * The available query parameters are:
   * - `from`: The start date of the export in ISO 8601 format.
   * - `to`: The end date of the export in ISO 8601 format.
   * - `format`: The format of the export file. The only available value is `csv`.
   * - `select`: The columns to include in the export. The available values are `all`, `email`, `name`, `phone`, `role`, `status`, `createdAt`, `updatedAt`.
   * @returns An AxiosResponse containing the exported file.
   */
  async export(query?: IUserExportQueryPayload): Promise<AxiosResponse<any>> {
    if (query) {
      return this.request({
        method: "GET",
        url: `/api/v1/users/export?${qs.stringify(query)}`,
      });
    }
    return this.request({
      method: "GET",
      url: "/api/v1/users/export",
    });
  }

  /**
   * Retrieves a list of users.
   *
   * @param query An object of query parameters to filter the results.
   * The available query parameters are:
   * - `page`: The page number to retrieve.
   * - `limit`: The number of items to retrieve per page.
   * - `order`: The order to sort the results by. The available values are `asc` and `desc`.
   * - `fields`: An array of column names to include in the results.
   * - `q`: A search query to filter the results by.
   * - `filters`: An object of filter values to filter the results by.
   * - `populate`: An array of populate options to include associated data in the results.
   * - `id`: A user ID to retrieve a single user.
   * @returns A promise that resolves to the server's response containing the list of users.
   */
  async get(query?: IUserQueryPayload): Promise<AxiosResponse<IUserResponse>> {
    if (query) {
      return this.request({
        method: "GET",
        url: `api/v1/users?${qs.stringify(filterNonNull(query))}`,
      });
    }
    return this.request({
      method: "GET",
      url: "api/v1/users",
    });
  }

  /**
   * Perform an action on multiple users.
   *
   * @param payload An object of payload values to filter the results.
   * The available payload values are:
   * - `action`: The action to perform on the users. The available values are `ban` and `unban`.
   * - `id`: An array of user IDs to perform the action on.
   * @returns A promise that resolves to the server's response containing the result of the action.
   */
  async actions(payload: IUsersActionsPayload): Promise<AxiosResponse> {
    return this.request({
      method: "PUT",
      url: "/api/v1/users/actions",
      data: payload,
    });
  }

  /**
   * Deletes users by their IDs.
   *
   * @param id An array of user IDs to delete.
   * @returns A promise that resolves to the server's response.
   */
  async deleteUsers(id: string[]): Promise<AxiosResponse> {
    return this.request({
      method: "DELETE",
      url: "/api/v1/users/delete",
      data: { id },
    });
  }

  /**
   * Creates a new user.
   *
   * @param payload An object of user data to send to the server.
   * The available payload values are:
   * - `name`: The name of the user to create.
   * - `email`: The email address of the user to create.
   * - `password`: The password of the user to create.
   * - `role`: The role of the user to create. The available values are `partner`, `manager`, and `user`.
   * @returns A promise that resolves to the server's response containing the ID of the new user.
   */
  async create(
    payload: IUserCreatePayload
  ): Promise<AxiosResponse<{ id: string }>> {
    return this.request({
      method: "POST",
      url: "/api/v1/users",
      data: payload,
    });
  }

  /**
   * Updates the avatar of a user.
   *
   * @param id The ID of the user to update the avatar for.
   * @param payload The avatar data to send to the server.
   * @param headers Optional headers to include in the request.
   * @returns A promise that resolves to the server's response.
   */
  async updateAvatar(
    id: string,
    payload: IUserAvatarUpdatePayload,
    headers?: AxiosHeaders
  ): Promise<AxiosResponse> {
    return this.request({
      method: "PUT",
      url: `/api/v1/users/avatar/${id}`,
      data: payload,
      headers: headers || {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Updates a user.
   *
   * @param payload An object of user data to send to the server.
   * The available payload values are:
   * - `id`: The ID of the user to update.
   * - `name`: The name of the user to update.
   * - `email`: The email address of the user to update.
   * - `phone`: The phone number of the user to update.
   * - `countryCode`: The country code of the user to update.
   * - `role`: The role of the user to update. The available values are `partner`, `manager`, and `user`.
   * @returns A promise that resolves to the server's response.
   */
  async update(payload: IUserUpdatePayload): Promise<AxiosResponse> {
    return this.request({
      method: "PUT",
      url: "/api/v1/users",
      data: payload,
    });
  }

  /**
   * Removes a user session by ID.
   *
   * @param payload An object with the following properties:
   * - `user_id`: The ID of the user to remove the session for.
   * - `sid`: The ID of the session to remove. If not provided,
   *          all sessions for the user will be removed.
   * - `type`: The type of removal. The available values are `single` and `all`.
   *          If not provided, the default value is `single`.
   * @returns A promise that resolves to the server's response.
   */
  async removeSession(
    payload: IRemoveUserSessionPayload
  ): Promise<AxiosResponse> {
    const data = {
      user_id: payload.user_id,
    } as IRemoveUserSessionPayload;
    if (payload.sid) {
      data["sid"] = payload.sid;
    }
    return this.request({
      method: "PATCH",
      url: `/api/v1/users/remove-session?type=${payload.type || "single"}`,
      data: data,
    });
  }

  /**
   * Updates the access control list (ACL) for a user.
   *
   * @param payload An object with the following properties:
   * - `id`: The ID of the user to update the ACL for.
   * - `acl`: An array of access control list values to set for the user.
   * @returns A promise that resolves to the server's response.
   */
  async updateACL(payload: IUserACLUpdatePayload): Promise<AxiosResponse> {
    return this.request({
      method: "PUT",
      url: "/api/v1/users/acl",
      data: payload,
    });
  }

  /**
   * Updates the subscription for a user.
   *
   * @param payload An object with the following properties:
   * - `user_id`: The ID of the user to update the subscription for.
   * - `subscription_id`: The ID of the subscription to add or remove.
   * - `action`: The action to perform on the subscription. The available values
   *            are `add` and `remove`.
   * @returns A promise that resolves to the server's response.
   */
  async updateSubscription(
    payload: IUserSubscriptionUpdatePayload
  ): Promise<AxiosResponse> {
    return this.request({
      method: "PUT",
      url: `/api/v1/users/subscription?action=${payload.action}`,
      data: {
        user_id: payload.user_id,
        subscription_id: payload.subscription_id,
      },
    });
  }
}

export default UserService;
