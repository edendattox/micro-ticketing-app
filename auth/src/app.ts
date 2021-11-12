import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import mongoose from "mongoose";
import cookieSession from "cookie-session";

/**
 * ErrorHandlers
 */

import { errorHandler, NotFoundError } from "@eden-d-tickets/common";

/**
 * Routes
 */
import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

/**
 * Routers
 */

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

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
