import { Request, Response } from "express";
import { NotificationRegisterUseCase } from "../../../application/Services/AuthServices/NotificationRegister";

export class NotificationRegisterController {
    constructor(readonly notificationAuthUseCase: NotificationRegisterUseCase) {}

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
