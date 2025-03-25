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
