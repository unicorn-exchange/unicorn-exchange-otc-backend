import {Application, Router} from "express";
import {authRouter} from "./routes/auth";
import {infoRouter} from "./routes/info";
import {usersRouter} from "./routes/users";
import {settingsRouter} from "./routes/settings";

export function loadAPIV1(app: Application) {
  const apiV1 = Router();

  // Load sub-routes
  authRouter(apiV1);
  infoRouter(apiV1);
  usersRouter(apiV1);
  settingsRouter(apiV1);

  app.use("/api/v1", apiV1);
}
