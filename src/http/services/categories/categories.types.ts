import { IPopulateV1 } from "../sections/sections.types";

export interface IGetManageCategories {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  image?: string;
  show_in_menu: boolean;
  order: number;
  status: boolean;
  trash: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IGetCategoriesData {
  _id: string;
  name: string;
  slug: string;
  description: string;
  order: number;
  icon: string | null;
  show_in_menu: boolean;
  image: string | null;
}
export interface IGetCategories {
  message: string;
  data: IGetCategoriesData[];
}

export interface IUpdateCategory {
  name: string;
  description?: string;
  show_in_menu?: boolean;
  order?: number;
  icon?: string;
  image?: string;
}

export interface ICreateCategory extends IUpdateCategory {}

export interface ICategoryActions {
  action: "public" | "private" | "moveToTrash" | "restore";
  ids: string[];
}

export interface IGetCategoriesQuery {
  page?: number;
  limit?: number;
  order?: "asc" | "desc";
  sortBy?: string;
  id?: string;
  q?: string;
  slug?: string;
  select?: string;
  filters?: object;
  populate?: IPopulateV1[];
}
