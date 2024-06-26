import { NotificationCancelSubsciptionUseCase } from "../application/Services/EnterpriseServices/NotificationCancelSubsciption";
import { NotificationRequestFileStationUseCase } from "../application/Services/EnterpriseServices/NotficationFileStation";
import { NotificationGetStationsUseCase } from "../application/Services/EnterpriseServices/NotificationGetStations";
import { NotificationInviteUserUseCase } from "../application/Services/EnterpriseServices/NotificationInviteUser";
import { NotificationRequestStationUseCase } from "../application/Services/EnterpriseServices/NotificationRequestStation";
import { NotificationUpdateStationUseCase } from "../application/Services/EnterpriseServices/NotificationUpdateStation";
import { NotificationRequestFileDataUseCase } from "../application/Services/MeteorologicalServices/NotificationFileData";
import { NotificationGetDataUseCase } from "../application/Services/MeteorologicalServices/NotificationGetData";
import { NotificationSubscriptionOrderUseCase } from "../application/Services/PaymentServices/NotificationSubOrder";
import { NotificationGetUsersUseCase } from "../application/Services/UserServices/NotificationsGetUsers";
import { NotificationLoginUseCase } from "../application/Services/UserServices/NotificationLogin";
import { NotificationRegisterUseCase } from "../application/Services/UserServices/NotificationRegister";
import { NotificationUpdateUserUseCase } from "../application/Services/UserServices/NotificationUpdateUser";
import { NotificationGetStationsByUserUseCase } from "../application/Services/EnterpriseServices/NotificationGetStationsByUser";
import { NotificationAllowAccessUseCase } from "../application/Services/EnterpriseServices/NotificationAllowAccess";

import { CreateNotificationUseCase } from "../application/UseCases/CreateNotificationUseCase";

import { NotificationCancelSubscriptionController } from "./controllers/EnterpriseController/NotificationCancelSubscriptionController";
import { NotificationRequestFileStationController } from "./controllers/EnterpriseController/NotificationFileStationController";
import { NotificationGetStationsController } from "./controllers/EnterpriseController/NotificationGetStationsController";
import { NotificationUserController } from "./controllers/EnterpriseController/NotificationInviteUserController";
import { NotificationRequestStationController } from "./controllers/EnterpriseController/NotificationRequestStation";
import { NotificationUpdateStationController } from "./controllers/EnterpriseController/NotificationUpdateStation";
import { NotificationRequestFileDataController } from "./controllers/MeteorologicalController/NotificationFileDataController";
import { NotificationGetDataController } from "./controllers/MeteorologicalController/NotificationGetData";
import { NotificationSubscriptionOrderController } from "./controllers/PaymentControllers/NotificationSubOrderController";
import { NotificationGetUsersController } from "./controllers/UsersControllers/NotificationGetUsersController";
import { NotificationLoginController } from "./controllers/UsersControllers/NotificationLoginController";
import { NotificationRegisterController } from "./controllers/UsersControllers/NotificationRegisterController";
import { NotificationUpdateUserController } from "./controllers/UsersControllers/NotificationUpdateUserController";
import { NotificationGetStationsByUserController } from "./controllers/EnterpriseController/NotificationGetStationsByUserController";
import { NotificationAllowAccessController } from "./controllers/EnterpriseController/NotificationAllowAccessController";

import { NotificationServer } from "./services/aws/NotificationServer";

export const servicesNotification = new NotificationServer();

export const createNotificationUseCase = new CreateNotificationUseCase();

export const notificationCancelSubscriptionUseCase = new NotificationCancelSubsciptionUseCase(
  servicesNotification,
  createNotificationUseCase
);

export const notificationRequestFileStationUseCase = new NotificationRequestFileStationUseCase(
  servicesNotification,
  createNotificationUseCase
);

export const notificationGetStationsUseCase = new NotificationGetStationsUseCase(
  servicesNotification,
  createNotificationUseCase
);

export const notificationInviteUserUseCase = new NotificationInviteUserUseCase(
  servicesNotification,
  createNotificationUseCase
);

export const notificationRequestStationUseCase = new NotificationRequestStationUseCase(
  servicesNotification,
  createNotificationUseCase
);

export const notificationUpdateStationUseCase = new NotificationUpdateStationUseCase(
  servicesNotification,
  createNotificationUseCase
);

export const notificationRequestFileDataUseCase = new NotificationRequestFileDataUseCase(
  servicesNotification,
  createNotificationUseCase
);

export const notificationGetDataUseCase = new NotificationGetDataUseCase(
  servicesNotification,
  createNotificationUseCase
);

export const notificationSubscriptionOrderUseCase = new NotificationSubscriptionOrderUseCase(
  servicesNotification,
  createNotificationUseCase
);

export const notificationLoginUseCase = new NotificationLoginUseCase(
  servicesNotification,
  createNotificationUseCase
);

export const notificationRegisterUseCase = new NotificationRegisterUseCase(
  servicesNotification,
  createNotificationUseCase
);

export const notificationGetUsersUseCase = new NotificationGetUsersUseCase(
  servicesNotification,
  createNotificationUseCase
);

export const notificationUpdateUserUseCase = new NotificationUpdateUserUseCase(
  servicesNotification,
  createNotificationUseCase
);

export const notificationGetStationsByUserUseCase = new NotificationGetStationsByUserUseCase(
  servicesNotification,
  createNotificationUseCase
);

export const notificationAllowAccessUseCase = new NotificationAllowAccessUseCase(
  servicesNotification,
  createNotificationUseCase
);

export const notificationCancelSubscriptionController = new NotificationCancelSubscriptionController(
  notificationCancelSubscriptionUseCase
);

export const notificationRequestFileStationController = new NotificationRequestFileStationController(
  notificationRequestFileStationUseCase
);

export const notificationGetStationsController = new NotificationGetStationsController(
  notificationGetStationsUseCase
);

export const notificationUserController = new NotificationUserController(
  notificationInviteUserUseCase
);

export const notificationRequestStationController = new NotificationRequestStationController(
  notificationRequestStationUseCase
);

export const notificationUpdateStationController = new NotificationUpdateStationController(
  notificationUpdateStationUseCase
);

export const notificationRequestFileDataController = new NotificationRequestFileDataController(
  notificationRequestFileDataUseCase
);

export const notificationGetDataController = new NotificationGetDataController(
  notificationGetDataUseCase
);

export const notificationSubscriptionOrderController = new NotificationSubscriptionOrderController(
  notificationSubscriptionOrderUseCase
);

export const notificationGetUsersController = new NotificationGetUsersController(
  notificationGetUsersUseCase
);

export const notificationLoginController = new NotificationLoginController(
  notificationLoginUseCase
);

export const notificationRegisterController = new NotificationRegisterController(
  notificationRegisterUseCase
);

export const notificationUpdateUserController = new NotificationUpdateUserController(
  notificationUpdateUserUseCase
);

export const notificationGetStationsByUserController = new NotificationGetStationsByUserController(
  notificationGetStationsByUserUseCase
);

export const notificationAllowAccessController = new NotificationAllowAccessController(
  notificationAllowAccessUseCase
);