import { Request, Response } from "express";
import { NotificationGetStationsByUserUseCase } from "../../../application/Services/EnterpriseServices/NotificationGetStationsByUser";

interface CustomRequest extends Request {
    userId: string;
}

export class NotificationGetStationsByUserController {
    constructor(
        readonly useCase: NotificationGetStationsByUserUseCase
    ) {}

    async run(req: Request, res: Response) {
        let data = req.body;
        const idUser = (req as CustomRequest).userId;
        try {
            if (idUser) {
                console.log("idUser", idUser);
                data = {
                    ...data,
                    user_id:idUser,
                };
            } else {
                throw new Error("No se pudo brindar el acceso (datos insuficientes)");
            }

            console.log("data", data);
            await this.useCase.run(data);
            res.status(200).send({
                status: 'success',
                data: 'Notificacion enviada',
            });
        } catch (error) {
            res.status(400).send({
                status: 'error',
                data: 'Ocurrió un error al solicitar el servicio',
                msn: error,
            });
        }
    }
}