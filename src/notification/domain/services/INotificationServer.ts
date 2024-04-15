import { Notification } from "../Notification";

export interface INotificationServer {
  sendNotification(notification : Notification): Promise<boolean>;
}