import { Request, Response } from "express";
import { NotificationGetBooksUseCase } from "../../../application/Services/BookServices/NotificationGetBooks";

export class NotificationGetBooksController {
    constructor(readonly notificationBookUseCase: NotificationGetBooksUseCase) {}

    async run(req: Request, res: Response) {
        const bookId = req.params.id;
        try {
            const data = bookId ? { bookId } : {};
            
            this.notificationBookUseCase.run(data);

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
