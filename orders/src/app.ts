import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";

/**
 * ErrorHandlers
 */

import {
  errorHandler,
  NotFoundError,
  currentUser,
} from "@eden-d-tickets/common";

/**
 * Routes
 */
import { newOrderRouter } from "./routes/new";
import { showOrderRouter } from "./routes/show";
import { indexOrderRouter } from "./routes/index";
import { deleteOrderRouter } from "./routes/delete";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);
app.use(currentUser);

/**
 * Routers
 */

app.use(newOrderRouter);
app.use(showOrderRouter);
app.use(indexOrderRouter);
app.use(deleteOrderRouter);

/**
 *  Create error for the route that does'nt exits.
 *  app.all gonna watch for any type of method for req
 */
app.all("*", async (req, res) => {
  throw new NotFoundError();
});

/**
 *  Middlewares
 */
app.use(errorHandler);

export { app };
