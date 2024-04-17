import { CreateNotificationUseCase } from "../../UseCases/CreateNotificationUseCase";
import { NotificationServer } from "../../../infraestructure/services/aws/NotificationServer";

export class NotificationAllowAccessUseCase{
    constructor(
        readonly serviceNotifiacion: NotificationServer,
        readonly createNotification: CreateNotificationUseCase
    ){}

    async run(data: any){
        const event = "enterprise.stations.allow-access";

        if (!data){
            throw new Error("No se pudo brindar el acceso (datos insuficientes)");
        }

        const notification = await this.createNotification.run(event, data);

        if (notification === null){
            throw new Error("No se pudo crear la notificación");
        }

        await this.serviceNotifiacion.sendNotification(notification);
    }
}