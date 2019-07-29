import {initEnvVariables} from "./env";
import express from "express";
import {initLogger} from "./utils/logger";
import {initLoaders} from "./loaders";
import {initMiddlewares} from "./api/middlewares";
import {initServices} from "./services";
import {initSocket} from "./socket";
import {initModels} from "./models";
import {initDBConnection} from "./services/db";

const app = express();
const env = initEnvVariables();
const logger = initLogger(env);

// const services = initServices(app, env);
initDBConnection(env)
  .then(initModels)
  .then(db => initServices(app, db, env))
  .then(services => {
    app.ctx = {
      env,
      logger,
      services,
      db,
    };
    initMiddlewares(env);
    initLoaders(app);

    const server = app.listen(env.PORT, (err: Error) => {
      if (err) {
        app.ctx.logger.error(err);
        process.exit(1);
        return;
      }
      app.ctx.logger.info(`Server listening on port: ${env.PORT}`);
    });

    initSocket(server);
  })
  .catch(err => {
    logger.error(err);
    process.exit(1);
  });
