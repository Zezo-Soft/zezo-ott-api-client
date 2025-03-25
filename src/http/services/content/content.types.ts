export interface IContentlanguage {
  _id: string;
  name: string;
}

export interface IContentCast {
  _id: string;
  name: string;
  type: "actor" | "director" | "writer" | "producer";
  avatar: string | null;
  castType: string;
}

export interface ISubtitles {
  title?: string | undefined;
  language?: string | undefined;
  type: "application/x-subrip" | "application/ttml+xml" | "text/vtt";
  url: string;
}

export interface IContentEpisodes {
  _id: string;
  name: string;
  description: string;
  duration: number;
  number: number;
  source_link: string;
  trailer_source_link: string;
  source_type: "HLS" | "MP4";
  content_offering_type: "FREE" | "PREMIUM";
  subtitles: ISubtitles[];
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
}

export interface IContentSeasons {
  _id: string;
  name: string;
  contant_id: string;
  order: number;
  season_number: number;
  episodes: IContentEpisodes[] | null;
  status: boolean;
  created_by: string;
  createdAt: string;
  updatedAt: string;
}

export interface IContentCategory {
  _id: string;
  name: string;
}

export interface IContentGenres {
  _id: string;
  name: string;
}

export interface IContentPagination {
  length: number;
  limit: number;
  page: number;
  total: number;
  hasNextPage: boolean;
  nextPage: number | null;
}

export interface IContentMeta {
  pagination: IContentPagination;
  report: any | null;
}

export interface IContentImages {
  id: string;
  image_id: string;
  name: string;
  width: number;
  height: number;
  sizes?: {
    small: string;
    medium: string;
    large: string;
    original: string;
  };
}

export interface IContentData {
  _id: string;
  name: string;
  slug: string;
  u_age: string;
  description: string;
  duration: string;
  rating: number;
  source_link: string | null;
  source_type: "HLS" | "MP4" | "LIVE_STREAM_HLS";
  trailer_source_link: string | null;
  trailer_source_type: "HLS" | "MP4";
  language: IContentlanguage[] | null;
  cast: IContentCast[] | null;
  poster: string;
  thumbnail: string;
  views: number;
  tags: string[];
  job_id: string | null;
  seasons: IContentSeasons[] | null;
  status: "PUBLIC" | "PRIVATE" | "PENDING" | "REJECTED";
  trash: boolean;
  type: "series" | "movie" | "live_stream";
  content_offering_type: "FREE" | "PREMIUM" | "BUY_OR_RENT";
  updated_by: string;
  created_by: string;
  createdAt: string;
  updatedAt: string;
  category: IContentCategory[] | null;
  genres: IContentGenres[] | null;
  subtitles: ISubtitles[];
  is_buy_or_rent?: "BUY" | "RENT";
  rent_duration?: number | null;
  price?: number | null;
  buy_or_rent_status: {
    _id?: string;
    status?: "valid" | "expired";
  }[];
  title_image?: string | null;
  content_duration?: string | null;
  release_year?: string | null;
  images?: IContentImages[] | null;
}

export interface IContent {
  data: IContentData[];
  meta: IContentMeta;
}

export interface IRentOrBuyContentData {
  _id: string;
  content_id: IContentData;
  user_id: string;
  status: "valid" | "expired";
  valid_upto: string;
  createdAt: string;
  updatedAt: string;
}
// rent or buy content
export interface IRentOrBuyContent {
  data: IRentOrBuyContentData[];
  meta: IContentMeta;
}

// get rent or buy by content id or user id
export interface IGetIsRentOrBuyContentByIDData {
  _id: string;
  content_id: {
    _id: string;
    name: string;
    is_buy_or_rent?: "BUY" | "RENT";
    rent_duration: number;
    price: number;
  };
  user_id: string;
  status: "valid" | "expired";
  valid_upto: string;
  createdAt: string;
  updatedAt: string;
}

export interface ITvod {
  data: IContent["data"];
  meta: {
    pagination: {
      page: number;
      limit: number;
      pages: number;
      total: number;
      hasNextPage: boolean;
      nextPage: null | number;
    };
  };
}
