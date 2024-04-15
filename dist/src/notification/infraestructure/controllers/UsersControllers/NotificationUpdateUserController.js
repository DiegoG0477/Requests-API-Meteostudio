export class NotificationUpdateUserController {
    notificationUpdateUserUseCase;
    constructor(notificationUpdateUserUseCase) {
        this.notificationUpdateUserUseCase = notificationUpdateUserUseCase;
    }
    async run(req, res) {
        let data = req.body;
        const idUser = req.params.idUser;
        try {
            data = {
                ...data,
                idUser,
            };
            await this.notificationUpdateUserUseCase.run(data);
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
