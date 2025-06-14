type TEnvironment = "dev" | "prod" | "staging";

export interface ICreateConfigPayload {
  key: string;
  value: string;
  environment: TEnvironment;
}

export interface IUpdateConfigPayload {
  keyId: string;
  value: string;
  environment: TEnvironment;
}

export interface IDeleteConfigPayload {
  key: string;
  environment: TEnvironment;
}

export interface IGetConfigPayload {
  keys: string[];
  environment: TEnvironment;
}

export interface IConfigData {
  _id: string;
  key: string;
  value: string;
  environment: TEnvironment;
  createdAt: string;
  updatedAt: string;
}
