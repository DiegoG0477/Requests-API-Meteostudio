export class NotificationRequestFileDataController {
    notificationRequestFileDataUseCase;
    constructor(notificationRequestFileDataUseCase) {
        this.notificationRequestFileDataUseCase = notificationRequestFileDataUseCase;
    }
    async run(req, res) {
        const data = req.body;
        try {
            await this.notificationRequestFileDataUseCase.run(data);
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
