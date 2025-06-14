import { AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import {
  IChangePasswordPayload,
  IForgotPasswordPayload,
  ILoginPayload,
  IRemoveSessionPayload,
  IResetPasswordPayload,
  ISendOTPPayload,
  ISendOTPResponse,
  ISignUpPayload,
  IVerifyOtpPayload,
  IWhoami,
} from "./auth.types";

class AuthService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Send OTP to the user's phone
   * @param payload phone and optional recaptcha token
   * @returns response from the server
   */
  async sendOTP(
    payload: ISendOTPPayload
  ): Promise<AxiosResponse<ISendOTPResponse>> {
    return this.request({
      method: "POST",
      url: "/auth/login?provider=phone",
      data: payload,
    });
  }

  /**
   * Logins the user with the given email and password
   * @param payload email and password
   * @returns response from the server
   */
  async login(payload: ILoginPayload) {
    return this.request({
      method: "POST",
      url: "/auth/login?provider=email",
      data: payload,
    });
  }

  /**
   * Verify the OTP sent to the user
   * @param payload the otp hash and the otp sent to the user
   * @returns response from the server
   */
  async verifyOTP(payload: IVerifyOtpPayload) {
    return this.request({
      method: "POST",
      url: "/auth/verify-otp",
      data: payload,
    });
  }

  /**
   * Sign up a user
   * @param payload name, email, and password
   * @returns response from the server
   */
  async signUp(payload: ISignUpPayload) {
    return this.request({
      method: "POST",
      url: "/auth/register",
      data: payload,
    });
  }

  /**
   * Forgot password
   * @param payload email
   * @returns response from the server
   */
  async forgotPassword(payload: IForgotPasswordPayload) {
    return this.request({
      method: "POST",
      url: "/auth/forgot-password",
      data: payload,
    });
  }

  /**
   * Reset the user's password
   * @param payload the id of the user, token from the forgot password email, and the new password
   * @returns response from the server
   */
  async resetPassword(payload: IResetPasswordPayload) {
    return this.request({
      method: "POST",
      url: `/auth/reset-password/${payload.id}`,
      data: {
        token: payload.token,
        password: payload.password,
      },
    });
  }

  /**
   * Retrieves the authenticated user's information.
   *
   * @returns An object containing the user's details such as id, name, email, role, and subscription information.
   */
  async whoamI(headers?: Record<string, string>): Promise<{ data: IWhoami }> {
    return this.request({
      method: "GET",
      url: "/auth/whoami",
      headers,
    });
  }

  /**
   * Logs out the user
   * @returns response from the server
   */
  async logout(headers?: Record<string, string>) {
    return this.request({
      method: "POST",
      url: "/auth/logout",
      headers,
    });
  }

  /**
   * Removes a user session based on the provided token ID.
   * @param payload - An object containing the token ID of the session to be removed.
   * @returns Response from the server indicating the result of the session removal.
   */

  async removeSession(payload: IRemoveSessionPayload) {
    return this.request({
      method: "PATCH",
      url: "/auth/self/remove-session",
      data: payload,
    });
  }

  /**
   * Changes the user's password.
   * @param payload - An object containing the current password and the new password.
   * @returns Response from the server indicating the result of the password change.
   */
  async changePassword(payload: IChangePasswordPayload) {
    return this.request({
      method: "PATCH",
      url: "/auth/self/change-password",
      data: payload,
    });
  }
}

export default AuthService;
