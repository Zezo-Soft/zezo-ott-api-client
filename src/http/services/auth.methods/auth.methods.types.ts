export interface IAuthMethods {
  success: boolean;
  message: string;
  data: Array<"email" | "phone">;
}

export interface IGetAuthProviderQueryPayload {
  fields: string[];
  select: "web" | "tv" | "mobile";
}

export interface IAuthProviderResponse {
  success: boolean;
  message: string;
  data: {
    _id: string;
    methods_enabled: {
      email: boolean;
      phone: boolean;
      qrcode: boolean;
    };
    methods: Array<"email" | "phone" | "qrcode">;
    createdAt: string;
    updatedAt: string;
  };
}

export interface IAuthProviderUpdatePayload {
  status: boolean;
  methods: Array<"email" | "phone" | "qrcode">;
}
