import express from "express";
import morgan from "morgan";
import { Signale } from "signale";
import dotenv from "dotenv";

import { authRouter } from "./notification/infraestructure/routes/AuthRouter";
import { enterpriseRouter } from "./notification/infraestructure/routes/EnterpriseRouter";
import { paymentRouter } from "./notification/infraestructure/routes/PaymentRouter";
import { userRouter } from "./notification/infraestructure/routes/UserRouter";

dotenv.config();

const PORT = process.env.SERVER_PORT ?? 3000;

const app = express();

const signale = new Signale();

app.use(express.json());
app.use(morgan("dev"));
app.use('/auth', authRouter);
app.use('/enterprise', enterpriseRouter);
app.use('/payment', paymentRouter);
app.use('/users', userRouter);

app.listen(PORT, () => {
  signale.success("Server online in port " + PORT);
});
