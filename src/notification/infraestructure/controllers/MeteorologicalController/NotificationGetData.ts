import { Request, Response } from 'express';
import { NotificationGetDataUseCase } from '../../../application/Services/MeteorologicalServices/NotificationGetData';

export class NotificationGetDataController {
    constructor(readonly notificationGetDataUseCase: NotificationGetDataUseCase) {}

    async run(req: Request, res: Response) {
        const data = req.body;
        try {
            await this.notificationGetDataUseCase.run(data);
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