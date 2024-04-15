export class NotificationGetUsersUseCase {
    serviceNotifiacion;
    createNotification;
    constructor(serviceNotifiacion, createNotification) {
        this.serviceNotifiacion = serviceNotifiacion;
        this.createNotification = createNotification;
    }
    async run(data) {
        let event = "users.get-id";
        if (!data.userId) {
            event = "users.get-all";
        }
        const notification = await this.createNotification.run(event, data);
        if (notification === null) {
            throw new Error("No se pudo crear la notificación");
        }
        await this.serviceNotifiacion.sendNotification(notification);
    }
}
