import { IPopulateV1 } from "../sections/sections.types";

export interface ICreateLanguage {
  name: string;
  description?: string;
  image?: File;
}

export interface IUpdateLanguage extends ICreateLanguage {}

export interface IActionLanguage {
  ids: string[];
  action: "public" | "private" | "moveToTrash" | "restore";
}

export interface IGetLanguageQuery {
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

export interface IManageLanguage {
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

export interface ILanguage {
  _id: string;
  name: string;
  slug: string;
  description?: string;
}
