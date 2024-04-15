import fetch from 'node-fetch';
export class NotificationServer {
    async sendNotification(notification) {
        try {
            // URL de tu función Lambda
            const lambdaUrl = 'https://6izln6f63q5k6ra67mf2hhuh6u0qgybx.lambda-url.us-east-1.on.aws/';
            // Datos a enviar a la función Lambda
            const requestData = {
                body: JSON.stringify(notification) // Datos de la notificación que deseas enviar a la función Lambda
            };
            // Realiza una solicitud HTTP POST a tu función Lambda
            const response = await fetch(lambdaUrl, {
                method: 'POST',
                body: requestData.body,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // Verifica si la solicitud fue exitosa
            if (response.ok) {
                console.log('Notificación enviada con éxito a la función Lambda');
                return true;
            }
            else {
                const errorMessage = await response.text();
                console.error('Error al enviar la notificación a la función Lambda:', errorMessage);
                return false;
            }
        }
        catch (error) {
            console.error('Error al enviar la notificación a la función Lambda:', error);
            return false;
        }
    }
}
