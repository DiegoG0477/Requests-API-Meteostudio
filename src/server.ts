import express from "express";
import morgan from "morgan";
import { Signale } from "signale";

import { authRouter } from "./notification/infraestructure/routes/AuthRouter";
import { bookRouter } from "./notification/infraestructure/routes/BookRouter";
import { serviceOrderRouter } from "./notification/infraestructure/routes/ServiceOrderRouter";

const app = express();

const signale = new Signale();

app.use(express.json());
app.use(morgan("dev"));
app.use('/auth', authRouter);
app.use('/books', bookRouter);
app.use('/service-order', serviceOrderRouter);

app.listen(3000, () => {
  signale.success("Server online in port 3000");
});
