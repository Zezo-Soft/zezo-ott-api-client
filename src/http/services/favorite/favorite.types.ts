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
  id: string;
  content: IContentData;
  title: string;
  thumbnail: string;
  type: "movie" | "series";
}
