import express from "express";

import { 
    notificationCancelSubscriptionController,
    notificationRequestFileStationController,
    notificationGetStationsController,
    notificationInviteUserUseCase,
    notificationRequestStationController,
    notificationUpdateStationController
} from "../dependencies";

export const enterpriseRouter = express.Router();

enterpriseRouter.patch(
    "/subscriptions/cancel",
    notificationCancelSubscriptionController.run.bind(notificationCancelSubscriptionController)
);

enterpriseRouter.get(
    "/stations/file/:idStation",
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
    notificationInviteUserUseCase.run.bind(notificationInviteUserUseCase)
)

enterpriseRouter.post(
    "/stations/request",
    notificationRequestStationController.run.bind(notificationRequestStationController)
)

enterpriseRouter.patch(
    "/stations/:idStation",
    notificationUpdateStationController.run.bind(notificationUpdateStationController)
)