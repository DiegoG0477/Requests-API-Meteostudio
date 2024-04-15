export class NotificationGetStationsUseCase {
    serviceNotifiacion;
    createNotification;
    constructor(serviceNotifiacion, createNotification) {
        this.serviceNotifiacion = serviceNotifiacion;
        this.createNotification = createNotification;
    }
    async run(data) {
        let event = "enterprise.get-stations-id";
        if (!data.stationId) {
            event = "enterprise.get-stations-all";
        }
        const notification = await this.createNotification.run(event, data);
        if (notification === null) {
            throw new Error("No se pudo crear la notificación");
        }
        await this.serviceNotifiacion.sendNotification(notification);
    }
}
