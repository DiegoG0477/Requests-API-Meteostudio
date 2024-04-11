import express from 'express';

import {
    notificationGetUsersController,
    notificationUpdateUserController
} from '../dependencies';

export const userRouter = express.Router();

userRouter.get(
    '/',
    notificationGetUsersController.run.bind(notificationGetUsersController)
);

userRouter.get(
    '/:idUser',
    notificationGetUsersController.run.bind(notificationGetUsersController)
);

userRouter.patch(
    '/:idUser',
    notificationUpdateUserController.run.bind(notificationUpdateUserController)
);