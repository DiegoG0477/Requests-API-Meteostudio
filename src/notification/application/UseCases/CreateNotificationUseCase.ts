import { Notification } from "../../domain/Notification";
import { NotificationRepository } from "../../domain/NotificationRepository";

export class CreateNotificationUseCase implements NotificationRepository {
  async run(event: string, data: any): Promise<Notification | null> {
    return await this.createNotification(event, data);
  }

  createNotification(event: string, data: any): Promise<Notification | null> {
    return Promise.resolve(new Notification(event, data));
  }
}