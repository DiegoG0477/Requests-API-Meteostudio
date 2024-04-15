import { CreateNotificationUseCase } from "../../UseCases/CreateNotificationUseCase";
import { NotificationServer } from "../../../infraestructure/services/aws/NotificationServer";

export class NotificationCancelSubsciptionUseCase {
    constructor(
        readonly serviceNotifiacion: NotificationServer,
        readonly createNotification: CreateNotificationUseCase
    ) {}

    async run(data: any) {
        const event = "enterprise.disable-subscription";

        if (!data) {
            throw new Error("No se pudo cancelar la suscripción (datos insuficientes)");
        }
        
        const notification = await this.createNotification.run(event, data);

        if (notification === null) {
            throw new Error("No se pudo crear la notificación");
        }

        await this.serviceNotifiacion.sendNotification(notification);
    }
}