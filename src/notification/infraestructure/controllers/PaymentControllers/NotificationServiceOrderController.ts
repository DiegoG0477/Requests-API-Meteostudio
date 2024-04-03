import { Request, Response } from "express";
import { NotificationServiceOrderUseCase } from "../../../application/Services/PaymentServices/NotificationServiceOrder";

export class NotificationServiceOrderController {
    constructor(readonly notificationServiceOrderUseCase: NotificationServiceOrderUseCase) {}

    async run(req: Request, res: Response) {
        const data = req.body;
        try {
            await this.notificationServiceOrderUseCase.run(data);
            res.status(200).send({
                status: "success",
                data: "Notificacion enviada",
            });
        } catch (error) {
            //Code HTTP : 204 Sin contenido
            res.status(204).send({
                status: "error",
                data: "Ocurrió un error al solicitar el servicio",
                msn: error,
            });
        }
    }
}
