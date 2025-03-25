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
