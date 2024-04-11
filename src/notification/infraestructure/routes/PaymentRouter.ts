import express from 'express';

import {
    notificationSubscriptionOrderController,
} from '../dependencies';

export const paymentRouter = express.Router();

paymentRouter.post(
    '/subscription',
    notificationSubscriptionOrderController.run.bind(notificationSubscriptionOrderController)
);