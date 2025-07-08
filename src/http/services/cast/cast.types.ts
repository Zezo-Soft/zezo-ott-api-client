import { IPopulateV1 } from "../sections/sections.types";

export interface ICastCreate {
  name: string;
  description?: string;
  type?: "actor" | "director" | "writer" | "producer";
  avatar?: File;
}

export interface IUpdateCast extends ICastCreate {}

export interface IActionCast {
  action: "public" | "private" | "moveToTrash" | "restore";
  ids: string[];
}

export interface ICastQuery {
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

export interface IManageCast {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  avatar?: string;
  type: "actor" | "director" | "producer" | "writer";
  status: boolean;
  trash: boolean;
  created_by: string;
  updated_by: string;
}

export interface ICast {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  avatar?: string;
  type: "actor" | "director" | "producer" | "writer";
}
