import { IContentData } from "../content/content.types";

export interface IGetSectionsQuery {
  page?: number;
  limit?: number;
  type?: string;
  category?: string;
  fields?: string[];
  content_list?: boolean;
  content_list_fields?: string[];
  content_list_limit?: number;
  content_list_populate?: any[];
}

export interface ISectionData {
  _id: string;
  name: string;
  type: string;
  category: {
    _id: string;
    name: string;
    slug: string;
  };
  content: {
    data: IContentData[];
    meta: {
      pagination: {
        page: number;
        limit: number;
        length: number;
        total: number;
        hasNextPage: boolean;
        nextPage: number | null;
      };
    };
  };
}
export interface ISection {
  data: ISectionData[];
  meta: {
    pagination: {
      page: number;
      limit: number;
      length: number;
      total: number;
      hasNextPage: boolean;
      nextPage: number | null;
    };
  };
}

export interface ICreateSectionPayload {
  name: string;
}

export interface IPopulateV1 {
  path: string;
  select?: string;
  populate?: IPopulateV1[];
}

export interface IGetManageSectionsQuery {
  id?: string;
  page?: number;
  limit?: number;
  order?: "asc" | "desc";
  sortBy?: string;
  genre?: string;
  category?: string;
  type?: string;
  select?: string;
  filters?: object;
  profile?: "kids" | "family" | "none";
  populate?: IPopulateV1[];
}

export interface IGetSectionManageResponse {
  _id: string;
  name: string;
  label: string;
  order: number;
  type: string;
  profile?: "kids" | "family" | "none";
  content_ids: IContentData[];
  category: {
    _id: string;
    name: string;
    slug: string;
  };
  genre?: string;
  content: {
    data: IContentData[];
  };
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUpdateSectionStatusPayload {
  id: string;
  status: boolean;
}

export interface ISectionUpdate {
  id: string;
  type: string;
  content_ids: string[];
  profile: "kids" | "family" | "none";
  name?: string;
  label?: string;
  category?: string;
  genre?: string;
}

export interface ISectionStyles {
  _id: string;
  name: string;
  description: string;
  style_key: string;
  ios: {
    status: boolean;
    available: boolean;
    style_preview_image?: string;
  };
  android: {
    status: boolean;
    available: boolean;
    style_preview_image?: string;
  };
  web: {
    status: boolean;
    available: boolean;
    style_preview_image?: string;
  };
  tv: {
    status: boolean;
    available: boolean;
    style_preview_image?: string;
  };
}

export interface ICreateSectionStyle
  extends Pick<
    ISectionStyles,
    "name" | "description" | "style_key" | "ios" | "android" | "tv" | "web"
  > {}

export interface IUpdateSectionStyle extends ICreateSectionStyle {}

export interface IGetSectionStylesQuery {
  page?: number;
  limit?: number;
  order?: "asc" | "desc";
  q?: string;
  id?: string;
  sort?: string;
  select?: string;
  filter?: object;
}
