export interface ISendOTPPayload {
  phone: string;
  countryCode?: string;
  re_captcha_token?: string;
}

export interface ISendOTPResponse {
  hash: string;
  phone: string;
}

export interface ISignUpPayload {
  name: string;
  email: string;
  password: string;
}

export interface ISignUpResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export interface ILoginPayload {
  email: string;
  password: string;
  check?: boolean;
}

export interface IVerifyOtpPayload {
  hash: string;
  otp: number | string;
  phone: number | string;
}

export interface ISignUpPayload {
  name: string;
  email: string;
  password: string;
}

export interface IForgotPasswordPayload {
  email: string;
}

export interface IResetPasswordPayload {
  id: string;
  token: string;
  password: string;
}

export type IRoles = "user" | "admin" | "partner" | "manager";

export interface IWhoami {
  id: string;
  name: string;
  phone: string;
  email: string;
  role: IRoles;
  avatar: string | null;
  sessions?: object[];
  isSubscribed: boolean;
  subscription: {
    subscriptionId: string;
    subscriptionDetails: {
      _id: string;
      name: string;
      description: string;
      price: number;
      points: string[];
      duration: string;
      currency: string[];
      status: boolean;
      maxVideoQuality: string;
      created_by: string;
      updated_by: string;
      createdAt: string;
      updatedAt: string;
      isPopular: boolean;
    } | null;
    active_at: string;
    expiresIn: string;
  } | null;
  permissions: {
    permissions: string[];
    resources: string[];
    roles: string[];
  };
}

export interface IRemoveSessionPayload {
  token_id: string;
}

export interface IChangePasswordPayload {
  current_password: string;
  new_password: string;
}
