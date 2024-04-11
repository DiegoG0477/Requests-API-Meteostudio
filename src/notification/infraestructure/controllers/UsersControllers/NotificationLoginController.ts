import { Request, Response } from "express";
import { NotificationLoginUseCase } from "../../../application/Services/UserServices/NotificationLogin";

export class NotificationLoginController {
    constructor(readonly notificationAuthUseCase: NotificationLoginUseCase) {}

    async run(req: Request, res: Response) {
        const data = req.body;
        try {
            await this.notificationAuthUseCase.run(data);
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
