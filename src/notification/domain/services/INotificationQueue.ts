import { Notification } from "../Notification";

export interface INotificationQueue {
  sendNotification(notification : Notification): Promise<boolean>;
}