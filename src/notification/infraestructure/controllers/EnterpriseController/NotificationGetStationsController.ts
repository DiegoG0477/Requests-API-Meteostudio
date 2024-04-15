import { Request, Response } from 'express';
import { NotificationGetStationsUseCase } from '../../../application/Services/EnterpriseServices/NotificationGetStations';

export class NotificationGetStationsController {
    constructor(readonly notificationGetStationsUseCase: NotificationGetStationsUseCase) {}

    async run(req: Request, res: Response) {
        let data = req.body;
        const idStation = req.params.idStation;
        try {
            if (idStation) {
                data = {
                    ...data,
                    idStation,
                };
            }

            await this.notificationGetStationsUseCase.run(data);
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