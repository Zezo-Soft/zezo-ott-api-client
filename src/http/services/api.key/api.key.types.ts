export interface ICreateApiKey {
  name: string;
  expiresAt?: Date;
  neverExpires: boolean;
  ipWhitelist?: string[];
}

export interface IApiKey {
  _id: string;
  key: string;
  name: string;
  status: boolean;
  expiresAt?: Date;
  neverExpires: boolean;
  totalCalls: number;
  lastCallAt?: Date;
  ipWhitelist?: string[];
  createdBy: string;
  acl: {
    resources: string[];
    permissions: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface IUpdateApiKey {
  name?: string;
  status?: boolean;
  ipWhitelist?: string[];
  acl?: {
    resources: string[];
    permissions: string[];
  };
}
