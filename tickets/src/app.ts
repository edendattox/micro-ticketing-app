import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";

/**
 * Routes
 */
import { createTicketRouter } from "./routes/new";

/**
 * ErrorHandlers
 */

import {
  errorHandler,
  NotFoundError,
  currentUser,
} from "@eden-d-tickets/common";

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

app.use(createTicketRouter);

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
