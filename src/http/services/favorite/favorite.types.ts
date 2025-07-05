import { IContentData } from "../content/content.types";

export interface IAddToFavorites {
  id: string;
}

export interface IIsFavorite {
  id: string;
}

export interface IRemoveFromFavorites {
  id: string;
}

export interface IFavoriteContentItem {
  _id: string;
  content: IContentData;
  createdAt: Date;
  updatedAt: Date;
}

export interface IFavoritesResponse {
  data: IFavoriteContentItem[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
