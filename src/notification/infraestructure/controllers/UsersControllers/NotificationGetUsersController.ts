import { Request, Response } from "express";
import { NotificationGetUsersUseCase } from "../../../application/Services/UserServices/NotificationsGetUsers";

export class NotificationGetUsersController {
    constructor(readonly notificationGetUsersUseCase: NotificationGetUsersUseCase) {}

    async run(req: Request, res: Response) {
        let data = req.body;
        const idUser = req.params.idUser;
        try {
            if(idUser) {
                data = {
                    ...data,
                    idUser,
                };
            }

            await this.notificationGetUsersUseCase.run(data);
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