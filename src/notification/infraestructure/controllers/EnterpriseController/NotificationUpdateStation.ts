import { Request, Response } from 'express';
import { NotificationUpdateStationUseCase } from '../../../application/Services/EnterpriseServices/NotificationUpdateStation';

export class NotificationUpdateStationController {
    constructor(readonly notificationUpdateStationUseCase: NotificationUpdateStationUseCase) {}

    async run(req: Request, res: Response) {
        let data = req.body;
        const idStation = req.params.idStation;
        try {
            data = {
                ...data,
                idStation,
            };

            await this.notificationUpdateStationUseCase.run(data);
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