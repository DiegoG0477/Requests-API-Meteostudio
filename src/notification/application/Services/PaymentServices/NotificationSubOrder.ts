import { CreateNotificationUseCase } from "../../UseCases/CreateNotificationUseCase";
import { NotificationQueue } from "../../../infraestructure/services/RabbitMq/NotificationQueue";

export class NotificationSubscriptionOrderUseCase {
    constructor(
        readonly serviceNotifiacion: NotificationQueue,
        readonly createNotification: CreateNotificationUseCase
    ) {}

    async run(data: any) {
        let event = "payment.request-subscription";

        if (!data) {
            throw new Error("No se pudo procesar (datos corruptos o incompletos)");
        }
        
        const notification = await this.createNotification.run(event, data);

        if (notification === null) {
            throw new Error("No se pudo crear la notificación");
        }

        await this.serviceNotifiacion.sendNotification(notification);
    }
}
