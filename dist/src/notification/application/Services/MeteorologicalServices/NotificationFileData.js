export class NotificationRequestFileDataUseCase {
    serviceNotifiacion;
    createNotification;
    constructor(serviceNotifiacion, createNotification) {
        this.serviceNotifiacion = serviceNotifiacion;
        this.createNotification = createNotification;
    }
    async run(data) {
        const event = "meteorological.request-file-time";
        if (!data) {
            throw new Error("No se pudo crear la estación (datos insuficientes)");
        }
        const notification = await this.createNotification.run(event, data);
        if (notification === null) {
            throw new Error("No se pudo crear la notificación");
        }
        await this.serviceNotifiacion.sendNotification(notification);
    }
}
