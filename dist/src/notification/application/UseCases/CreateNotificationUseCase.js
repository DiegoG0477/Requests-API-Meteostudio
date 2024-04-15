import { Notification } from "../../domain/Notification";
export class CreateNotificationUseCase {
    async run(event, data) {
        return await this.createNotification(event, data);
    }
    createNotification(event, data) {
        return Promise.resolve(new Notification(event, data));
    }
}
