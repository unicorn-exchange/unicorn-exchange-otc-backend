import {IEnv} from "../env";
import {Sequelize} from "sequelize";
import {mockEnv} from "../../tests/test_utils";
import path from "path";

export async function initDBConnection(env: IEnv): Promise<Sequelize> {
  const db = createDB(env);

  return db.authenticate().then(() => db);
}

export function createDB(env: IEnv): Sequelize {
  return new Sequelize(env.DB_NAME, env.DB_USERNAME, env.DB_PASSWORD, {
    logging: console.log,
    host: env.DB_HOST,
    dialect: env.DB_DIALECT ? env.DB_DIALECT : "sqlite",
    storage: path.join("./tests", mockEnv.SQLITE_STORAGE),
  });
}
