export class NotificationLoginController {
    notificationAuthUseCase;
    constructor(notificationAuthUseCase) {
        this.notificationAuthUseCase = notificationAuthUseCase;
    }
    async run(req, res) {
        const data = req.body;
        try {
            console.log("data", data);
            await this.notificationAuthUseCase.run(data);
            res.status(200).send({
                status: "success",
                data: "Notificacion enviada",
            });
        }
        catch (error) {
            //Code HTTP : 204 Sin contenido
            console.log("error", error);
            res.status(400).send({
                status: "error",
                data: "Ocurrió un error al solicitar el servicio",
                msn: error,
            });
        }
    }
}
