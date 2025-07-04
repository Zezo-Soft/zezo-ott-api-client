export interface ICreateReel {
  name: string;
  description: string;
  thumbnail: File;
  tags?: string[];
}

export interface IUpdateReel {
  name: string;
  description: string;
  tags?: string[];
  thumbnail?: File;
  content?: string;
}

export interface IReelActions {
  action: "active" | "inactive" | "trash" | "pending" | "blocked";
  ids: string[];
}

interface IPopulate {
  path: string;
  select?: string[];
  populate?: IPopulate[];
}

export interface IListReelsQuery {
  page?: number;
  limit?: number;
  order?: "asc" | "desc";
  q?: string;
  filter?: Record<string, unknown>;
  select?: string[];
  sort?: string;
  id?: string;
  populate?: IPopulate[];
}

export interface IReel {
  _id: string;
  title: string;
  description: string;
  video?: string | null;
  thumbnail: string;
  tags: string[];
  created_by: string;
  likes: number;
  dislikes: number;
  views: number;
  status: "active" | "inactive" | "deleted" | "pending" | "blocked";
  content: string;
  deletedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IFeedReel {
  _id: string;
  title: string;
  description: string;
  video?: string | null;
  thumbnail: string;
  tags: string[];
  created_by: string;
  content: string;
  likes: number;
  isLiked: boolean;
}
