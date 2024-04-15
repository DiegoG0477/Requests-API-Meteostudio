import { Request, Response } from 'express';
import { NotificationRequestFileDataUseCase } from '../../../application/Services/MeteorologicalServices/NotificationFileData';

export class NotificationRequestFileDataController {
    constructor(readonly notificationRequestFileDataUseCase: NotificationRequestFileDataUseCase) {}

    async run(req: Request, res: Response) {
        const data = req.body;
        try {
            await this.notificationRequestFileDataUseCase.run(data);
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