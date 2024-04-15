import { Notification } from "../../domain/Notification";
import { NotificationServer } from "../../infraestructure/services/aws/NotificationServer";

export class NotificationServerUseCase {
  constructor(readonly serviceNotifiacion: NotificationServer) {}

  async run(notification: Notification) {
    await this.serviceNotifiacion.sendNotification(notification);
  }
}
