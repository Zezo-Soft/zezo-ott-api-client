import { IPopulateV1 } from "../sections/sections.types";

export interface ICreateGenre {
  name: string;
  description?: string;
}

export interface IUpdateGenre extends ICreateGenre {}

export interface IActionGenre {
  ids: string[];
  action: "public" | "private" | "moveToTrash" | "restore";
}

export interface IListGenreQuery {
  page?: number;
  limit?: number;
  order?: "asc" | "desc";
  sortBy?: string;
  id?: string;
  q?: string;
  slug?: string;
  filters?: object;
  select?: string;
  populate?: IPopulateV1[];
}

export interface IListGenre {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  status: boolean;
  trash: boolean;
  created_by: string;
  updated_by: string;
}

export interface IGenre {
  _id: string;
  name: string;
  slug: string;
  description?: string;
}
