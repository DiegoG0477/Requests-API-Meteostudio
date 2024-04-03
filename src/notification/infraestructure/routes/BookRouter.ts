import express from "express";

import {
    notificationGetBooksController,
    notificationDeleteBookController,
    notificationNewBookController,
    notificationUpdateBookController
} from "../dependencies";

export const bookRouter = express.Router();

bookRouter.post(
    "/",
    notificationNewBookController.run.bind(notificationNewBookController)
);

bookRouter.patch(
    "/:idBook",
    notificationUpdateBookController.run.bind(notificationUpdateBookController)
);

bookRouter.delete(
    "/:idBook",
    notificationDeleteBookController.run.bind(notificationDeleteBookController)
);

bookRouter.get(
    "/:idBook",
    notificationGetBooksController.run.bind(notificationGetBooksController)
);

bookRouter.get(
    "/",
    notificationGetBooksController.run.bind(notificationGetBooksController)
);
