import { Notification } from "../../../domain/Notification";
import { INotificationServer } from "../../../domain/services/INotificationServer";
import axios from "axios";

export class NotificationServer implements INotificationServer {
    async sendNotification(notification: Notification): Promise<boolean> {
        const lambdaUrl = "https://6izln6f63q5k6ra67mf2hhuh6u0qgybx.lambda-url.us-east-1.on.aws/";

        const requestData = {
            body: JSON.stringify(notification),
        };

        const response = await axios.post(lambdaUrl, requestData.body, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log("Respuesta de la función Lambda:", response.data);

        if (response.status === 200) {
            console.log("Notificación enviada con éxito a la función Lambda");
            return response.data;
        } else {
            throw Error(
                "Error al enviar la notificación a la función Lambda:" +
                    response.statusText
            );
        }
    }
}
