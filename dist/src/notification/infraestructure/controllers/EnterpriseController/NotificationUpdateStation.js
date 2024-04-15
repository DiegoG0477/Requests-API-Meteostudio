export class NotificationUpdateStationController {
    notificationUpdateStationUseCase;
    constructor(notificationUpdateStationUseCase) {
        this.notificationUpdateStationUseCase = notificationUpdateStationUseCase;
    }
    async run(req, res) {
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
        }
        catch (error) {
            // Code HTTP : 204 Sin contenido
            res.status(204).send({
                status: 'error',
                data: 'Ocurrió un error al solicitar el servicio',
                msn: error,
            });
        }
    }
}
