import { Request, Response } from 'express';
import { NotificationUpdateUserUseCase } from '../../../application/Services/UserServices/NotificationUpdateUser';

export class NotificationUpdateUserController {
    constructor(readonly notificationUpdateUserUseCase: NotificationUpdateUserUseCase) {}

    async run(req: Request, res: Response) {
        let data = req.body;
        const idUser = req.params.idUser;
        try {
            data = {
                ...data,
                idUser,
            };
            await this.notificationUpdateUserUseCase.run(data);
            res.status(200).send({
                status: 'success',
                data: 'Notificacion enviada',
            });
        } catch (error) {
            // Code HTTP : 204 Sin contenido
            res.status(204).send({
                status: 'error',
                data: 'Ocurrió un error al solicitar el servicio',
                msn: error,
            });
        }
    }
}