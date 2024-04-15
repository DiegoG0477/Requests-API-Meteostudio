import { Request, Response } from 'express';
import { NotificationInviteUserUseCase } from '../../../application/Services/EnterpriseServices/NotificationInviteUser';

export class NotificationUserController {
    constructor(readonly notificationInviteUserUseCase: NotificationInviteUserUseCase) {}

    async run(req: Request, res: Response) {
        const data = req.body;
        try {
            await this.notificationInviteUserUseCase.run(data);
            res.status(200).send({
                status: 'success',
                data: 'Notificacion enviada',
            });
        } catch (error) {
            res.status(400).send({
                status: 'error',
                data: 'Ocurrió un error al solicitar el servicio',
                msn: error,
            });
        }
    }
}