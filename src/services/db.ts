import {IEnv} from "../env";
import {Sequelize} from "sequelize";
import {MockEnv} from "../../tests/test_utils";
import path from "path";

export function connectToDB(env: IEnv): Sequelize {
  return new Sequelize(env.DB_NAME, env.DB_USERNAME, env.DB_PASSWORD, {
    host: env.IS_PRODUCTION ? env.DB_HOST : "localhost",
    dialect: env.IS_PRODUCTION ? "postgres" : "sqlite",
    storage: path.join("./tests", MockEnv.SQLITE_STORAGE),
  });
}
