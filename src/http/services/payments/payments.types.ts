export interface ICheckout {
  subscription?: string;
  content?: string;
  coupon_code?: string;
  provider: "razorpay" | "stripe" | "phonepe" | "ccavenue";
  metadata?: {
    payment_type?: "session" | "instant" | "none"; // for stripe
    isPaymentInitiatedEnabled?: boolean; // for phonepe
    checkout_type?: "subscription" | "buy_or_rent";
  };
}

export interface IPlatform {
  platform: "web" | "android" | "ios" | "android_tv";
}

export interface IPaymentReadyResponse {
  provider: "phonepe" | "razorpay" | "stripe" | "ccavenue";
  logo?: string;
}

export interface ICheckoutResponse {
  status: boolean;
  orderId: string;
  amount: number;
  real_amount: number;
  currency: "INR";
  provider: string;
  publicKey?: string;
  extraData?: object;
}

export interface IPaymentsQuery {
  page?: number;
  limit?: number;
  order?: "asc" | "desc";
  q?: string;
  id?: string;
  order_id?: string;
  fields?: string[];
  populate?: object;
  filters?: object;
}

export interface IPayment {
  _id: string;
  userId: {
    _id: string;
    name?: string;
    email?: string;
    phone?: string;
  };
  subscriptionId: string;
  revenue_type?: "tvod" | "svod" | "other";
  tvodId?: string;
  tvodType?: "rent" | "buy" | "other";
  paymentId?: string | null;
  orderId: string;
  reference_no?: string | null;
  tracking_id?: string | null;
  payment_gateway?: string;
  signature?: string | null;
  amount?: number;
  real_amount?: number;
  status: "created" | "paid" | "failed" | "attempted";
  checkout_type: "subscription" | "buy_or_rent" | "other";
  payment_type?: "session" | "instant" | "none";
  coupon_code?: string;
  createdAt: string;
  updatedAt: string;
}
