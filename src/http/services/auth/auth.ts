import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import { ISendOTPPayload } from "./auth.types";

class AuthService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Send OTP to the user's phone
   * @param payload phone and optional recaptcha token
   * @returns response from the server
   */
  async sendOTP(payload: ISendOTPPayload) {
    return this.request({
      method: "POST",
      url: "/auth/login?provider=phone",
      data: payload,
    });
  }
}

export default AuthService;
