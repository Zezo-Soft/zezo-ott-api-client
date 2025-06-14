import { IContentData } from "../content/content.types";

export interface ICreateReleasePopupResponse {
  id: string;
}

export interface IUpdateReleasePopupResponse {
  id: string;
}

export interface IReleasePopupResponse {
  _id: string;
  content_id: IContentData;
}
