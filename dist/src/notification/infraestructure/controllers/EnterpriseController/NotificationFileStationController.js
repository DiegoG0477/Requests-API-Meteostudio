export class NotificationRequestFileStationController {
    notificationRequestFileStationUseCase;
    constructor(notificationRequestFileStationUseCase) {
        this.notificationRequestFileStationUseCase = notificationRequestFileStationUseCase;
    }
    async run(req, res) {
        let data = req.body;
        const idStation = req.params.idStation;
        try {
            if (idStation) {
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