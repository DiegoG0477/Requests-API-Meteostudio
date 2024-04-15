import { Request, Response } from "express";
import { NotificationLoginUseCase } from "../../../application/Services/UserServices/NotificationLogin";

export class NotificationLoginController {
    constructor(readonly notificationAuthUseCase: NotificationLoginUseCase) {}

    async run(req: Request, res: Response) {
        const data = req.body;
        try {
            console.log("data", data);
            await this.notificationAuthUseCase.run(data);
            res.status(200).send({
                status: "success",
                data: "Notificación enviada",
            });
        } catch (error) {
            console.log("error", error);
            res.status(400).send({
                status: "error",
                message: "Ocurrió un error al solicitar el servicio",
                data: error,
            });
        }
    }
}
