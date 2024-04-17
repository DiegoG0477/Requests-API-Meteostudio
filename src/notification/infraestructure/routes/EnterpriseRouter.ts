import express from "express";
import { authenticateMiddleware } from "../../../middlewares/authentication";

import { 
    notificationCancelSubscriptionController,
    notificationRequestFileStationController,
    notificationGetStationsController,
    notificationInviteUserUseCase,
    notificationRequestStationController,
    notificationUpdateStationController,
    notificationGetStationsByUserController
} from "../dependencies";

export const enterpriseRouter = express.Router();

enterpriseRouter.patch(
    "/subscriptions/cancel",
    authenticateMiddleware,
    notificationCancelSubscriptionController.run.bind(notificationCancelSubscriptionController)
);

enterpriseRouter.get(
    "/stations/file/:idStation",
    authenticateMiddleware,
    notificationRequestFileStationController.run.bind(notificationRequestFileStationController)
)

enterpriseRouter.get(
    "/stations",
    notificationGetStationsController.run.bind(notificationGetStationsController)
)

enterpriseRouter.get(
    "/stations/:idStation",
    notificationGetStationsController.run.bind(notificationGetStationsController)
)

enterpriseRouter.post(
    "/stations/invite",
    authenticateMiddleware,
    notificationInviteUserUseCase.run.bind(notificationInviteUserUseCase)
)

enterpriseRouter.post(
    "/stations/request",
    notificationRequestStationController.run.bind(notificationRequestStationController)
)

enterpriseRouter.patch(
    "/stations/:idStation",
    authenticateMiddleware,
    notificationUpdateStationController.run.bind(notificationUpdateStationController)
)

enterpriseRouter.get(
    "/stations/users/list",
    authenticateMiddleware,
    notificationGetStationsByUserController.run.bind(notificationGetStationsByUserController)
)