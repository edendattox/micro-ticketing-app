import express from "express";
import { json } from "body-parser";

/**
 * ErrorHandler
 */

import { errorHandler } from "./middlewares/error-handler";

/**
 * Routes
 */
import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";

const app = express();

/**
 * Routers
 */

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

/**
 *  Middlewares
 */
app.use(json());
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
