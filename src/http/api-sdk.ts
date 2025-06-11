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

export interface IOptions {
  baseUrl: string;
  withCredentials?: boolean;
  headers?: Record<string, string>;
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
  }
}
