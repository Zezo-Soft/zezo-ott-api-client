export interface IWatchHistoryItem {
  id: string;
  title: string;
  thumbnail: string;
  lastWatchedAt: string;
  resumePoint?: number;
  progress: number;
  watchedAt: string | number | Date;
}

export interface IHistory {
  history: IWatchHistoryItem[];
}

export interface IHistoryUpdate {
  id: string;
  resumePoint: number;
}
