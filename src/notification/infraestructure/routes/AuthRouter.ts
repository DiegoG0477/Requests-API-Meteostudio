import express from "express";

import {
    notificationLoginController,
    notificationRegisterController,
} from "../dependencies";

export const authRouter = express.Router();

authRouter.post(
    "/login",
    notificationLoginController.run.bind(notificationLoginController)
);

authRouter.post(
    "/register",
    notificationRegisterController.run.bind(notificationRegisterController)
);