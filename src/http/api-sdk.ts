import AnalyticsService from "./services/analytics/analytics";
import AuthMethodsService from "./services/auth.methods/auth.methods";
import AuthService from "./services/auth/auth";
import BlogService from "./services/blog/blog";
import CategoriesService from "./services/categories/categories";
import ContentService from "./services/content/content";
import FavoriteService from "./services/favorite/favorite";
import PaymentService from "./services/payments/payments";
import SectionsService from "./services/sections/sections";
import SettingsService from "./services/settings/settings";
import SubscriptionService from "./services/subscription/subscription";
import CountriesService from "./services/countries/countries";
import UserService from "./services/user/user";
import { AxiosRequestConfig } from "axios";
import ConfigService from "./services/config/config";
import UpgradeService from "./services/upgrade/upgrade";
import ReleasePopupService from "./services/release.popup/release.popup";

export interface IOptions {
  baseUrl: string;
  withCredentials?: boolean;
  interceptors?: {
    request?: (
      config: AxiosRequestConfig
    ) => AxiosRequestConfig | Promise<AxiosRequestConfig>;
    response?: (response: any) => any;
    responseError?: (error: any) => any;
  };
}

export class ZezoOTT {
  analytics: AnalyticsService;
  auth: AuthService;
  authMethods: AuthMethodsService;
  blogs: BlogService;
  categories: CategoriesService;
  contents: ContentService;
  favorites: FavoriteService;
  payments: PaymentService;
  settings: SettingsService;
  subscriptions: SubscriptionService;
  sections: SectionsService;
  countries: CountriesService;
  users: UserService;
  config: ConfigService;
  upgrade: UpgradeService;
  releasePopup: ReleasePopupService;

  /**
   * Constructor for ZezoOTT class.
   * @param {IOptions} options an object containing the base URL and optionally
   * a flag to indicate whether to send credentials with requests.
   */
  constructor(options: IOptions) {
    this.analytics = new AnalyticsService(options);
    this.auth = new AuthService(options);
    this.authMethods = new AuthMethodsService(options);
    this.blogs = new BlogService(options);
    this.categories = new CategoriesService(options);
    this.contents = new ContentService(options);
    this.favorites = new FavoriteService(options);
    this.payments = new PaymentService(options);
    this.settings = new SettingsService(options);
    this.subscriptions = new SubscriptionService(options);
    this.sections = new SectionsService(options);
    this.countries = new CountriesService(options);
    this.users = new UserService(options);
    this.config = new ConfigService(options);
    this.upgrade = new UpgradeService(options);
    this.releasePopup = new ReleasePopupService(options);
  }
}
