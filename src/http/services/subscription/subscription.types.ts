export interface ISubscriptionData {
  _id: string;
  name: string;
  description: string;
  price: number;
  points: string[];
  duration: string;
  currency: [string];
  status: boolean;
  maxVideoQuality: string;
  created_by: string;
  updated_by: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
  isPopular: boolean;
}

export interface ISubscriptions {
  message: string;
  data: ISubscriptionData[];
}

export interface ISubscriptionUpdate {
  name: string;
  description: string;
  price: number;
  points: string[];
  duration:
    | "weekly"
    | "monthly"
    | "quarterly"
    | "half-yearly"
    | "yearly"
    | "two-yearly"
    | "three-yearly"
    | "four-yearly"
    | "five-yearly"
    | "ten-yearly"
    | "fifteen-yearly";
  currency: string[];
  status: boolean;
  maxVideoQuality:
    | "144"
    | "240"
    | "360"
    | "480"
    | "720"
    | "1080"
    | "1440"
    | "2160";
  isPopular: boolean;
}

export interface ISubscriptionQuery {
  page?: number;
  limit?: number;
  order?: "asc" | "desc";
  q?: string;
  sortby?: string;
  select?: string[];
}
