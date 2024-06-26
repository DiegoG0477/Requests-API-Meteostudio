import { Request, Response } from 'express';
import { NotificationRequestFileStationUseCase } from '../../../application/Services/EnterpriseServices/NotficationFileStation';

export class NotificationRequestFileStationController {
    constructor(readonly notificationRequestFileStationUseCase: NotificationRequestFileStationUseCase) {}

    async run(req: Request, res: Response) {
        let data = req.body;
        const idStation = req.params.idStation;
        try {
            if(idStation) {
                data = {
                    ...data,
                    idStation,
                };
            }

            await this.notificationRequestFileStationUseCase.run(data);
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