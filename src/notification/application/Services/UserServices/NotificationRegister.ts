import { CreateNotificationUseCase } from "../../UseCases/CreateNotificationUseCase";
import { NotificationServer } from "../../../infraestructure/services/aws/NotificationServer";

export class NotificationRegisterUseCase {
    constructor(
        readonly serviceNotifiacion: NotificationServer,
        readonly createNotification: CreateNotificationUseCase
    ) {}

    async run(data: any) {
        const event = "enterprise.users.post-register";

        if (!data) {
            throw new Error("No se pudo registrar al usuario (datos insuficientes)");
        }
        
        const notification = await this.createNotification.run(event, data);

        if (notification === null) {
            throw new Error("No se pudo crear la notificación");
        }

        await this.serviceNotifiacion.sendNotification(notification);
    }
}