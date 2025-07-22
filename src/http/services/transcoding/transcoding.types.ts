export type IJobPriority = "low" | "medium" | "high";
export type IJobResolution =
  | "144p"
  | "240p"
  | "360p"
  | "480p"
  | "720p"
  | "1080p"
  | "2160p";
export type IJobStorage = "s3" | "digitalocean_spaces";
export type IJobConvertTo = "hls" | "mp4" | "images";

export interface ITranscodingJob {
  name: string;
  priority?: IJobPriority;
  input: string;
  inputKey?: string;
  resolutions?: IJobResolution[];
  storage?: IJobStorage;
  convert_to?: IJobConvertTo[];
  input_protected?: boolean;
  resolution_priority?: IJobResolution;
  take_screenshot?: {
    status: boolean;
    time: number;
    width?: number;
    height?: number;
  };
  codec?: "h264" | "h265";
}

export interface IListTranscodingQuery {
  page?: number;
  limit?: number;
  order?: "asc" | "desc";
  sortBy?: "createdAt" | "updatedAt";
  query?: string;
  filter?: "all" | "completed" | "processing" | "failed" | "submitted";
  id?: string;
}

export interface ITranscoderChildJob {
  _id: string;
  convert_to: IJobConvertTo;
  job_id: string;
  resolution: IJobResolution;
  status: string;
  progress: number;
  process_id: string;
  upload_to_storage_status: string;
  upload_to_storage_progress: number;
  error_message: string;
  error: string;
  rclone_retry_cmd: string;
  createdAt: string;
  updatedAt: string;
}
export interface ITranscoderJob {
  _id: string;
  name: string;
  keyName: string;
  priority: IJobPriority;
  input: string;
  inputKey: string;
  resolutions: string[] | IJobResolution[];
  status: string;
  duration: number;
  storage: string;
  input_protected: boolean;
  convert_to: IJobConvertTo[];
  resolution_priority: IJobResolution | string;
  take_screenshot: {
    status: boolean;
    time: number;
    width: number;
    height: number;
  };
  codec: string;
  main_progress: number;
  input_download_progress: number;
  input_download_status: string;
  snapshot_status: string;
  child_jobs: ITranscoderChildJob[];
  createdAt: string;
  updatedAt: string;
}

export interface ITranscoderJobResponse {
  message: string;
  cache: boolean;
  data: ITranscoderJob[];
  meta: {
    pagination: {
      page: number;
      limit: number;
      totalPage: number;
      total: number;
      submitted_jobs: number;
      processing_jobs: number;
      completed_jobs: number;
      failed_jobs: number;
      hasNextPage: boolean;
    };
  };
}
