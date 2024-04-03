import { Notification } from "./Notification";

export interface NotificationRepository {
    createNotification(event: string, data: any): Promise<Notification | null>;
}
