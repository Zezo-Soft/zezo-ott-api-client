/**
 * @author Naresh Dhamu
 * @lastModified Sat 28 Jun 2025 at 04:20 PM
 */

import { IContentData } from "../content/content.types";

export interface IHistory {
  data: {
    _id: string;
    content: {
      _id: string;
      name: string;
      slug: string;
      u_age: string;
      description: string;
      duration: string;
      rating: string;
      source_link: string;
      source_type: string;
      trailer_source_link: string;
      trailer_source_type: string;
      poster: string;
      thumbnail: string;
      seasons: {
        season_number: number;
        _id: string;
        name: string;
        content_id: string;
        order: string;
        episodes: string[];
        status: boolean;
        created_by: string;
        updated_by: string;
        createdAt: string;
        updatedAt: string;
      }[];
      type: string;
      content_offering_type: string;
      images: {
        id: string;
        image_id: string;
        name: string;
        width: number;
        height: number;
        sizes: {
          small: string;
          medium: string;
          large: string;
          original: string;
        };
      }[];
    };
    content_type: string;
    currentTime: number;
    duration: number;
    season_number: number;
    episode_number: number;
    completed: boolean;
    current_season: string | null;
    current_episode: string | null;
  }[];
}

export interface IHistoryUpdate {
  content_id: string;
  type: IContentData["type"];
  currentTime: number;
  duration: number;
  completed: boolean;
  season_number?: number;
  episode_number?: number;
  current_episode?: string | null;
}
