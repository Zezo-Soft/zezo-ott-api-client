import { IPopulate } from "../../../types";
import { IRoles } from "../auth/auth.types";

export interface IUserExportQueryPayload {
  /**
   * @default now
   * @example "2023-01-01"
   * */
  from?: string;
  /**
   * @default now
   * @example "2023-01-01"
   */
  to?: string;
  /**
   * @default "csv"
   * @example "csv"
   */
  format?: "csv";
  /**
   * @example "name,email"
   */
  select?: string;
}

export interface IUserQueryPayload {
  page?: number;
  limit?: number;
  order?: "asc" | "desc";
  fields?: string[];
  q?: string;
  filters?: string;
  populate?: IPopulate[];
  id?: string;
}

export interface isPremium {
  status: boolean;
  subscriptionId: null | string;
  active_at: Date | null;
  // in app purchase fields
  isInAppPurchase?: boolean;
  inAppPurchaseFrom?: "apple" | "google" | "amazon" | "none";
  inAppPurchaseTransactionId?: string | null;
  inAppPurchaseProductId?: string | null;
  inAppPurchaseReceipt?: string | null;
  validTill?: Date | null;
}

export interface IUserLocation {
  country: string | null;
  state: string | null;
  city: string | null;
}

export interface IDeviceInfo {
  name: string | null;
  browser: string | null;
  location: IUserLocation | null;
}

export interface ISessions {
  id: string;
  token: string;
  refreshToken: string | null;
  deviceId: string | null;
  lastActivity?: Date;
  deviceInfo: IDeviceInfo | null;
}

export interface IUser {
  _id: string;
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  balance?: number;
  countryCode?: string;
  lastActivity?: Date;
  role: IRoles;
  avatar?: string;
  isActivated?: boolean;
  trash?: boolean;
  isPrimium: isPremium;
  maxSessionsLimit: number;
  sessions: ISessions[];
  fcmTokens: string[];
  acl: {
    permissions: string[];
    resources: string[];
    roles: string[];
  };
  lastSettlementDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserResponse {
  docs: IUser[];
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null | number;
  nextPage: null | number;
}

export interface IUsersActionsPayload {
  id: string[];
  action: "activate" | "deactivate" | "move_to_trash" | "restore";
}

export interface IUserCreatePayload {
  name: string;
  email: string;
  password: string;
  role: "partner" | "manager" | "user";
}

export interface IUserAvatarUpdatePayload {
  avatar: File;
}

export interface IUserUpdatePayload {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  countryCode?: string;
  role?: "partner" | "manager" | "user";
}

export interface IRemoveUserSessionPayload {
  user_id: string;
  sid?: string;
  type?: "all" | "single";
}

export interface IUserACLUpdatePayload {
  id: string;
  acl: string[];
}

export interface IUserSubscriptionUpdatePayload {
  user_id: string;
  subscription_id?: string;
  action: "add" | "remove";
}
