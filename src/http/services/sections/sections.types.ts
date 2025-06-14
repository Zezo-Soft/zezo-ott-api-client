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
