import { Request, Response } from "express";
import { NotificationSubscriptionOrderUseCase } from "../../../application/Services/PaymentServices/NotificationSubOrder";

export class NotificationSubscriptionOrderController {
    constructor(readonly notificationSubscriptionOrderUseCase: NotificationSubscriptionOrderUseCase) {}

    async run(req: Request, res: Response) {
        const data = req.body;
        try {
            await this.notificationSubscriptionOrderUseCase.run(data);
            res.status(200).send({
                status: "success",
                data: "Notificacion enviada",
            });
        } catch (error) {
            res.status(400).send({
                status: "error",
                data: "Ocurrió un error al solicitar el servicio",
                msn: error,
            });
        }
    }
}
