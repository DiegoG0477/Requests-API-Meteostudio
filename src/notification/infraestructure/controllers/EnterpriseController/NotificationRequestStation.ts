import { Request, Response } from 'express';
import { NotificationRequestStationUseCase } from '../../../application/Services/EnterpriseServices/NotificationRequestStation';

export class NotificationRequestStationController {
    constructor(readonly notificationRequestStationUseCase: NotificationRequestStationUseCase) {}

    async run(req: Request, res: Response) {
        const data = req.body;
        try {
            await this.notificationRequestStationUseCase.run(data);
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