import { Notification } from "../../domain/Notification";
import { NotificationQueue } from "../../infraestructure/services/RabbitMq/NotificationQueue";

export class NotificationQueueUseCase {
  constructor(readonly serviceNotifiacion: NotificationQueue) {}

  async run(notification: Notification) {
    await this.serviceNotifiacion.sendNotification(notification);
  }
}
