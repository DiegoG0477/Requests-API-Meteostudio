import express from 'express';
import { notificationRequestFileDataController, notificationGetDataController } from '../dependencies';
export const meteorologicalRouter = express.Router();
meteorologicalRouter.get('/data/file', notificationRequestFileDataController.run.bind(notificationRequestFileDataController));
meteorologicalRouter.get('/data/:idStation', notificationGetDataController.run.bind(notificationGetDataController));
