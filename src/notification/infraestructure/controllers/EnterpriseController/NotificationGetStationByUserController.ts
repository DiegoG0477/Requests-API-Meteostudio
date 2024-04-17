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
                    idUser,
                };
            }

            console.log("data", data);
            await this.useCase.run(data);
            res.status(200).send("Notificación enviada");
        } catch (error) {
            res.status(500).send(error);
        }
    }
}