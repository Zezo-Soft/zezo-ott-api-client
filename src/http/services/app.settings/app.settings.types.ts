export interface IUpdateAppSettings {
  width?: number;
  height?: number;
  screenTime?: number;
  fullscreen?: boolean;
  resizeMode?: "contain" | "cover" | "stretch" | "repeat" | "center";
  type?: "image" | "video" | "lottie-animation";
  backgroundTransparent?: boolean;
  backgroundColor?: string;

  source?: File;
}

export type IUpdateAppSettingsType =
  | "app_splesh_screen"
  | "tv_splesh_screen"
  | "logo"
  | "login_poster";

export interface IAndroidVersion {
  version: string;
  url: string;
  notes: string[];
  forceUpdate: boolean;
}

export interface IAppPages {
  icon: string;
  name: string;
  slug: string;
  color: string;
}

export interface IUpdateAppPages extends Omit<IAppPages, "color"> {
  color?: string;
}
export interface IAppSettings {
  app_splesh_screen: IAppSpleshScreenType;
  tv_splesh_screen: IAppSpleshScreenType;
  logo: string;
  login_poster?: string | null;
}

export interface IAppSpleshScreenType {
  source: string;
  width: number;
  height: number;
  screenTime: number;
  fullscreen: boolean;
  resizeMode?: "contain" | "cover" | "stretch" | "repeat" | "center";
  type?: "image" | "video" | "lottie-animation";
  backgroundTransparent?: boolean;
  backgroundColor?: string;
}

export enum ElevationLevels {
  "level0",
  "level1",
  "level2",
  "level3",
  "level4",
  "level5",
}

export type MD3ElevationColors = {
  [key in keyof typeof ElevationLevels]: string;
};

export type MD3Colors = {
  primary: string;
  primaryContainer: string;
  secondary: string;
  secondaryContainer: string;
  tertiary: string;
  tertiaryContainer: string;
  surface: string;
  surfaceVariant: string;
  surfaceDisabled: string;
  background: string;
  error: string;
  errorContainer: string;
  onPrimary: string;
  onPrimaryContainer: string;
  onSecondary: string;
  onSecondaryContainer: string;
  onTertiary: string;
  onTertiaryContainer: string;
  onSurface: string;
  onSurfaceVariant: string;
  onSurfaceDisabled: string;
  onError: string;
  onErrorContainer: string;
  onBackground: string;
  outline: string;
  outlineVariant: string;
  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;
  shadow: string;
  scrim: string;
  backdrop: string;
  elevation: MD3ElevationColors;
  text: string;
  white: string;
  black: string;
  transparent: string;
};

export interface IUpdateTheme {
  name: string;
  type: string;
  status: boolean;
  colors: MD3Colors;
}

export interface ITheme {
  _id: string;
  name: string;
  type: string;
  colors: MD3Colors;
}

export interface IThemeManage {
  _id: string;
  name: string;
  type: string;
  colors: MD3Colors;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}
