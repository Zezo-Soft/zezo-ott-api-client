export interface IAuthMethods {
  success: boolean;
  message: string;
  data: Array<"email" | "phone">;
}
