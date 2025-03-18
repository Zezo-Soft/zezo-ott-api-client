import SettingsService from "./services/settings/settings";

export interface IOptions {
  baseUrl: string;
  withCredentials?: boolean;
}

export class ZezoOTT {
  settingsService: SettingsService;

  constructor(options: IOptions) {
    this.settingsService = new SettingsService(options);
  }
}
