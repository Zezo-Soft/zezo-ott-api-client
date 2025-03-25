export interface IBlogQuery {
  slug: string;
}

export interface IBlog {
  _id: string;
  title: string;
  slug: string;
  blog_content: string;
  tags: string[];
  thumbnail: string | null;
  status: boolean;
  trash: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface IBlogs {
  message: string;
  data: IBlog[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
    report?: {
      totalPublic: number;
      totalPrivate: number;
    };
  };
}
