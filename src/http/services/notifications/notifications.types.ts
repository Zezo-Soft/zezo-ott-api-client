export type INotificationPlatform = "ios" | "android" | "web";
export interface IRegisterDevice {
  fcmToken: string;
  platform: INotificationPlatform;
  deviceId?: string;
}

export interface ISendPushNotification {
  title: string;
  body: string;
  imageUrl?: string;
  topic?: "all";
  platform?: INotificationPlatform;
  filter?: "users" | "freeUser" | "paidUser";
  type?: "normal" | "content";
  userIds?: string[];
}
