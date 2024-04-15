import { Request, Response } from 'express';
import { NotificationCancelSubsciptionUseCase } from '../../../application/Services/EnterpriseServices/NotificationCancelSubsciption';

export class NotificationCancelSubscriptionController {
    constructor(readonly notificationCancelSubsciptionUseCase: NotificationCancelSubsciptionUseCase) {}

    async run(req: Request, res: Response) {
        const data = req.body;
        try {
            await this.notificationCancelSubsciptionUseCase.run(data);
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