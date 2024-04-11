import { CreateNotificationUseCase } from "../../UseCases/CreateNotificationUseCase";
import { NotificationQueue } from "../../../infraestructure/services/RabbitMq/NotificationQueue";

export class NotificationRequestFileDataUseCase {
    constructor(
        readonly serviceNotifiacion: NotificationQueue,
        readonly createNotification: CreateNotificationUseCase
    ) {}

    async run(data: any) {
        const event = "meteorological.request-file-time";

        if (!data) {
            throw new Error("No se pudo crear la estación (datos insuficientes)");
        }
        
        const notification = await this.createNotification.run(event, data);

        if (notification === null) {
            throw new Error("No se pudo crear la notificación");
        }

        await this.serviceNotifiacion.sendNotification(notification);
    }
}