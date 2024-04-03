import { Request, Response } from "express";

import { NotificationDeleteBookUseCase } from "../../../application/Services/BookServices/NotificationDeleteBook";

export class NotificationDeleteBookController {
    constructor(readonly notificationBookUseCase: NotificationDeleteBookUseCase) {}

    async run(req: Request, res: Response) {
        let data = req.body;
        const bookId = req.params;

        try {
            data = {
                ...data,
                bookId
            }

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
