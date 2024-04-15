export class NotificationQueueUseCase {
    serviceNotifiacion;
    constructor(serviceNotifiacion) {
        this.serviceNotifiacion = serviceNotifiacion;
    }
    async run(notification) {
        await this.serviceNotifiacion.sendNotification(notification);
    }
}
