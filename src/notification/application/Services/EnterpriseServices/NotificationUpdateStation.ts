import { CreateNotificationUseCase } from "../../UseCases/CreateNotificationUseCase";
import { NotificationQueue } from "../../../infraestructure/services/RabbitMq/NotificationQueue";

export class NotificationUpdateStationUseCase {
    constructor(
        readonly serviceNotifiacion: NotificationQueue,
        readonly createNotification: CreateNotificationUseCase
    ) {}

    async run(data: any) {
        const event = "enterprise.update-station";

        if (!data.stationId) {
            throw new Error("No se pudo actualizar la estación (datos insuficientes)");
        }
        
        const notification = await this.createNotification.run(event, data);

        if (notification === null) {
            throw new Error("No se pudo crear la notificación");
        }

        await this.serviceNotifiacion.sendNotification(notification);
    }
}