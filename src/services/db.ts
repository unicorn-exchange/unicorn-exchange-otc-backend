import {Sequelize} from "sequelize-typescript";
import {mockEnv} from "../../tests/test_utils";
import path from "path";
import {IBaseContext} from "../interfaces/IContext";
import {UserModel} from "../models/user.model";

export async function initDBConnection(ctx: IBaseContext): Promise<Sequelize> {
  const db = createDB(ctx);

  return db.authenticate().then(() => db);
}

export function createDB(ctx: IBaseContext): Sequelize {
  const {env} = ctx;
  return new Sequelize(env.DB_NAME, env.DB_USERNAME, env.DB_PASSWORD, {
    models: [UserModel],
    logging: console.log,
    host: env.DB_HOST,
    dialect: env.DB_DIALECT ? env.DB_DIALECT : "sqlite",
    storage: path.join("./tests", mockEnv.SQLITE_STORAGE),
  });
}
