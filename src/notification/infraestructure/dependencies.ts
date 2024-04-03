import { NotificationNewBookUseCase } from "../application/Services/BookServices/NotificationNewBook";
import { NotificationGetBooksUseCase } from "../application/Services/BookServices/NotificationGetBooks";
import { NotificationDeleteBookUseCase } from "../application/Services/BookServices/NotificationDeleteBook";
import { NotificationUpdateBookUseCase } from "../application/Services/BookServices/NotificationUpdateBook";
import { NotificationLoginUseCase } from "../application/Services/AuthServices/NotificationLogin";
import { NotificationRegisterUseCase } from "../application/Services/AuthServices/NotificationRegister";
import { NotificationServiceOrderUseCase } from "../application/Services/PaymentServices/NotificationServiceOrder";
import { CreateNotificationUseCase } from "../application/UseCases/CreateNotificationUseCase";

import { NotificationNewBookController } from "./controllers/BookControllers/NotificationNewBookController";
import { NotificationGetBooksController } from "./controllers/BookControllers/NotificationGetBooksController";
import { NotificationUpdateBookController } from "./controllers/BookControllers/NotificationUpdateBookController";
import { NotificationDeleteBookController } from "./controllers/BookControllers/NotificationDeleteBookController";
import { NotificationLoginController } from "./controllers/AuthControllers/NotificationLoginController";
import { NotificationRegisterController } from "./controllers/AuthControllers/NotificationRegisterController";
import { NotificationServiceOrderController } from "./controllers/PaymentControllers/NotificationServiceOrderController";

import { NotificationQueue } from "./services/RabbitMq/NotificationQueue";

export const servicesNotification = new NotificationQueue();

export const createNotificationUseCase = new CreateNotificationUseCase();

export const notificationNewBookUseCase = new NotificationNewBookUseCase(
  servicesNotification,
  createNotificationUseCase
);

export const notificationGetBooksUseCase = new NotificationGetBooksUseCase(
  servicesNotification,
  createNotificationUseCase
);

export const notificationUpdateBookUseCase = new NotificationUpdateBookUseCase(
  servicesNotification,
  createNotificationUseCase
);

export const notificationDeleteBookUseCase = new NotificationDeleteBookUseCase(
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

export const notificationServiceOrderUseCase = new NotificationServiceOrderUseCase(
  servicesNotification,
  createNotificationUseCase
);

export const notificationNewBookController = new NotificationNewBookController(
  notificationNewBookUseCase
);

export const notificationGetBooksController = new NotificationGetBooksController(
  notificationGetBooksUseCase
);

export const notificationUpdateBookController = new NotificationUpdateBookController(
  notificationUpdateBookUseCase
);

export const notificationDeleteBookController = new NotificationDeleteBookController(
  notificationDeleteBookUseCase
);

export const notificationLoginController = new NotificationLoginController(
  notificationLoginUseCase
);

export const notificationRegisterController = new NotificationRegisterController(
  notificationRegisterUseCase
);

export const notificationServiceOrderController = new NotificationServiceOrderController(
  notificationServiceOrderUseCase
);