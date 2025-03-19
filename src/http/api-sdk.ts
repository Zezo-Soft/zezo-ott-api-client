import AuthService from "./services/auth/auth";
import SettingsService from "./services/settings/settings";

export interface IOptions {
  baseUrl: string;
  withCredentials?: boolean;
}

export class ZezoOTT {
  authService: AuthService;
  settingsService: SettingsService;

  /**
   * Constructor for ZezoOTT class.
   * @param {IOptions} options an object containing the base URL and optionally
   * a flag to indicate whether to send credentials with requests.
   */
  constructor(options: IOptions) {
    this.authService = new AuthService(options);
    this.settingsService = new SettingsService(options);
  }
}
