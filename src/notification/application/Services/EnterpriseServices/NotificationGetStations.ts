import { CreateNotificationUseCase } from "../../UseCases/CreateNotificationUseCase";
import { NotificationServer } from "../../../infraestructure/services/aws/NotificationServer";

export class NotificationGetStationsUseCase {
    constructor(
        readonly serviceNotifiacion: NotificationServer,
        readonly createNotification: CreateNotificationUseCase
    ) {}

    async run(data: any) {
        let event = "enterprise.get-stations-id";

        if (!data.stationId) {
            event = "enterprise.get-stations-all";
        }

        const notification = await this.createNotification.run(event, data);

        if (notification === null) {
            throw new Error("No se pudo crear la notificación");
        }

        await this.serviceNotifiacion.sendNotification(notification);
    }
}