declare interface ISocialLinks {
  id: string;
  name: string;
  href: string;
  newTab: boolean;
  status: boolean;
  icon: string;
}
declare interface IWebSettingsMenu {
  name: string;
  link: string;
  type: "custom" | "category";
  icon?: string;
  id: string;
}
declare interface IWebSettingsHeader {
  menu: IWebSettingsMenu[];
}
declare interface IWebSettingsFooter {
  menu: IWebSettingsMenu[];
}
declare interface IWebSettings {
  header: IWebSettingsHeader;
  footer: IWebSettingsFooter;
}
declare interface IPaymentGatewaySettings {
  name: string;
  provider: "razorpay" | "stripe" | "ccavenue";
  status: boolean;
  key: string;
  secret: string;
  enabled_on: {
    android: boolean;
    ios: boolean;
    web: boolean;
    android_tv: boolean;
  };
  availablity?: {
    android: boolean;
    ios: boolean;
    web: boolean;
    android_tv: boolean;
  };
}

declare interface ITranscoderSettings {
  id: string;
  hostname: string;
  username: string;
  password: string;
  provider: "aws" | "zezo";
  status: boolean;
}

declare interface ISMTPServerSettings {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  name: string;
}

declare type IGetSettingsKeys =
  | "all"
  | "webSettings"
  | "AwsConfig"
  | "warning"
  | "social_links"
  | "header"
  | "footer"
  | "aws_config_s3"
  | "aws_config_cloudfront"
  | "smtp_server"
  | "payment_gateways"
  | "transcoder"
  | "basic_settings";

export interface IWebSetting {
  _id: string;
  name: string;
  admin_title: string;
  web_title: string;
  description: string;
  logo: string;
  favicon: string;
  siteUrl: string;
  seo_title: string;
  meta_description: string;
  meta_keywords: string[];
  google_teg_manager: string;
  social_links: any[];
  copy_right_text: string;
  new_release_poster: string;
  webSettings: IWebSettings;
}

export interface IWebsiteSetting {
  message: string;
  data: IWebSetting;
}

export interface IGetManageSettingsQuery {
  select?: string;
}

export interface IUpdateSettings {
  id: string;
  name?: string;
  description?: string;
  siteUrl?: string;
  seo_title?: string;
  meta_description?: string;
  meta_keywords?: string[];
  google_teg_manager?: string;
  copy_right_text?: string;

  logo?: File; // File
  favicon?: File; // File
}

export interface IUpdateSocialMedia {
  settings_id: string;
  action: "create" | "update" | "delete";
  id?: string;
  name?: string;
  link?: string;

  icon?: string; // File
}
