export interface ITvodItem {
  name: string;
  poster: string;
  slug: string;
  thumbnail: string;
  type: string;
  purchasedAt: string;
  price: number;
  _id: string;
}

export interface ITvodResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
      hasNextPage: boolean;
      nextPage?: number | null;
    };
  };
}
