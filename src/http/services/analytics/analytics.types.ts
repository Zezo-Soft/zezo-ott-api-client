export interface IViewCount {
  content_id: string;
  episode_id: string | null;
  /**
   * @deprecated
   */
  ip_address?: string | null;
  platform: "web" | null;
  /**
   * @deprecated
   */
  city?: string | null;
  /**
   * @deprecated
   */
  location?: string | null;
  /**
   * @deprecated
   */
  region?: string | null;
  /**
   * @deprecated
   */
  timezone?: string | null;
}

export interface IWatchTimeCount {
  content_id: string;
  episode_id: string | null;
  time: number;
  platform: "web";
}
