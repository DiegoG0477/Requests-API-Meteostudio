import { Request, Response } from "express";

import { NotificationNewBookUseCase } from "../../../application/Services/BookServices/NotificationNewBook";

export class NotificationNewBookController {
    constructor(readonly notificationBookUseCase: NotificationNewBookUseCase) {}

    async run(req: Request, res: Response) {
        const data = req.body;
        try {
            await this.notificationBookUseCase.run(data);
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
