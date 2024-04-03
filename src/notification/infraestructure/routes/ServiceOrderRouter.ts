import express from "express";

import {
    notificationServiceOrderController
} from "../dependencies";

export const serviceOrderRouter = express.Router();

serviceOrderRouter.post(
    "/",
    notificationServiceOrderController.run.bind(notificationServiceOrderController)
);